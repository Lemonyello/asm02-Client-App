import styles from './SearchItemDescription.module.css';

// has info about free-cancel, type of room, hotel name, part of searched hotel item on search page
const SearchItemDescription = (props) => {
  return (
    <div className={styles['search-item-description']}>
      <p>{props.distance} m from center</p>
      <p className={styles.tag}>{props.tag}</p>
      <p className={styles.type}>{props.description}</p>
      <p>{props.type}</p>
    </div>
  );
};

export default SearchItemDescription;
