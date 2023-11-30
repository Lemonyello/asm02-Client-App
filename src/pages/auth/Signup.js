import {
  Form,
  useActionData,
  useNavigate,
  json,
  redirect,
} from 'react-router-dom';
import styles from './Auth.module.css';
import NavBar from '../home/NavBar/NavBar';
import { url_user_signup } from '../../store/local-storage';

const Signup = () => {
  const navigate = useNavigate();
  const actionData = useActionData();

  return (
    <>
      <NavBar />
      <Form method="POST" className={styles.form}>
        <h1>Signup</h1>
        <input type="text" name="username" placeholder="Username" required />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <button type="submit">Signup</button>
        {actionData && <p>{actionData.msg}</p>}
      </Form>
    </>
  );
};

export default Signup;

export const action = async ({ request }) => {
  try {
    const formData = await request.formData();

    const user = {
      username: formData.get('username'),
      password: formData.get('password'),
    };

    const res = await fetch(url_user_signup, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: request.method,
      body: JSON.stringify(user),
    });

    const data = await res.json();

    if (!res.ok) return data;

    return redirect('/login');
  } catch (error) {
    console.log(error);
  }
};
