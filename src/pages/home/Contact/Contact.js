import Button from '../../../UI/Button';
import styles from './Contact.module.css';

// subscription form on home page and detail page
const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.subscription}>
        <h2>Save time, save money!</h2>
        <p>Sign up and we'll send the best deals to you</p>
        <input placeholder="&nbsp; &nbsp;Your Email" />
        <Button title="Subscribe"></Button>
      </div>
    </div>
  );
};

export default Contact;
