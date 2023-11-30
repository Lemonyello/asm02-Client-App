import styles from './DetailDescription.module.css';

// description about hotel on detail page
const DetailDescription = (props) => {
  return (
    <div className={styles['detail-description']}>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
};

export default DetailDescription;
