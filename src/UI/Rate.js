import styles from "./Rate.module.css";

const Rate = (props) => {
  return <span className={styles.rate}>{props.rate}</span>;
};

export default Rate;
