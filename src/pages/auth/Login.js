import { Form, json, useActionData, useNavigate } from 'react-router-dom';
import styles from './Auth.module.css';
import NavBar from '../home/NavBar/NavBar';
import { useContext } from 'react';
import BookingContext from '../../store/booking-context';
import { url_user_login } from '../../store/local-storage';

const Login = () => {
  const navigate = useNavigate();
  const actionData = useActionData();
  const { isLoggedIn, setIsLoggedIn, setUsername } = useContext(BookingContext);

  if (actionData?.ok && !isLoggedIn) {
    setIsLoggedIn(true);
    setUsername(actionData.username);
    navigate('/');
  }

  return (
    <>
      <NavBar />
      <Form method="POST" className={styles.form}>
        <h1>Login</h1>
        <input type="text" name="username" placeholder="Username" required />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <button type="submit">Login</button>
        {actionData && !actionData.ok && <p>{actionData.msg}</p>}
      </Form>
    </>
  );
};

export default Login;

export const action = async ({ request }) => {
  try {
    const formData = await request.formData();

    const user = {
      username: formData.get('username'),
      password: formData.get('password'),
    };

    const res = await fetch(url_user_login, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: request.method,
      body: JSON.stringify(user),
    });

    const data = await res.json();

    if (!res.ok) return data;

    return json({ ok: true, username: user.username });
  } catch (error) {
    console.log(error);
  }
};
