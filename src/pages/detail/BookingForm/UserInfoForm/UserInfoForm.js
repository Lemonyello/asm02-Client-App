import { Form } from 'react-router-dom';
import styles from './UserInfoForm.module.css';

const UserInfoForm = () => {
  return (
    <Form className={styles.form}>
      <h2>Reserve Info</h2>
      <label>Your Full Name:</label>
      <input type="text" name="name" placeholder="Full Name" />
      <label>Your Email:</label>
      <input type="email" name="email" placeholder="Email" />
      <label>Your Phone Number:</label>
      <input type="number" name="phone" placeholder="Phone Number" />
      <label>Your Identity Card Number:</label>
      <input type="number" name="idCard" placeholder="Card Number" />
    </Form>
  );
};

export default UserInfoForm;
