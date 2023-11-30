import Rate from '../../../../UI/Rate';
import styles from './SearchItemHeader.module.css';

// has hotel name and rate, part of searched hotel item on search page
const SearchItemHeader = (props) => {
  return (
    <div className={styles.header}>
      <h2>{props.name}</h2>
      <div className={styles.rate}>
        <p>{props.rateText}</p>
        <Rate rate={props.rate} />
      </div>
    </div>
  );
};

export default SearchItemHeader;
