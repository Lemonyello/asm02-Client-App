import styles from './CityListItem.module.css';

// item in list of city on home page
const CityListItem = (props) => {
  return (
    <div
      className={styles['city-list-item']}
      style={{ backgroundImage: `url('${props.image}')` }}
    >
      <h4>{props.name}</h4>
      <h5>{props.subText}</h5>
    </div>
  );
};

export default CityListItem;
