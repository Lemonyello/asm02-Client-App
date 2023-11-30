import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button onClick={props.onClick} className={styles.button}>
      {props.title}
    </button>
  );
};

export default Button;
