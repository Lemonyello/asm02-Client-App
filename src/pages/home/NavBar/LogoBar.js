import { useNavigate } from 'react-router-dom';
import styles from './LogoBar.module.css';
import { useContext } from 'react';
import BookingContext from '../../../store/booking-context';

// logo and register, signin buttons in navbar on all pages
const LogoBar = () => {
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn, username, setUsername } =
    useContext(BookingContext);

  const onLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    navigate('/login');
  };

  const notAuthenticatedBtns = (
    <div className={styles.buttons}>
      <button onClick={navigate.bind(null, '/signup')}>Signup</button>
      <button onClick={navigate.bind(null, '/login')}>Login</button>
    </div>
  );

  const authenticatedBtns = (
    <div className={styles.buttons}>
      <p>{username}</p>
      <button onClick={navigate.bind(null, '/transactions/' + username)}>
        Transactions
      </button>
      <button onClick={onLogout}>Logout</button>
    </div>
  );

  return (
    <div className={styles.logo}>
      <button onClick={navigate.bind(null, '/')}>Booking Website</button>
      {isLoggedIn ? authenticatedBtns : notAuthenticatedBtns}
    </div>
  );
};

export default LogoBar;
