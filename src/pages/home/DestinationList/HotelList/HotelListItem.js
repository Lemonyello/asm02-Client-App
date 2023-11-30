import { useNavigate } from 'react-router-dom';
import Rate from '../../../../UI/Rate';
import styles from './HotelListItem.module.css';

// item in list of hotel on home page
const HotelListItem = ({
  imageUrl,
  name,
  city,
  rate,
  type,
  price,
  hotelId,
}) => {
  const navigate = useNavigate();

  return (
    <div className={styles['hotel-list-item']}>
      <img src={imageUrl} alt="name" />
      <button onClick={navigate.bind(null, '/detail/' + hotelId)}>
        {name}
      </button>
      <p className={styles.city}>{city}</p>
      <p className={styles.price}> {`Starting from $${price}`}</p>
      <div className={styles.rate}>
        <Rate rate={rate} />
        <span>{type[0].toUpperCase() + type.slice(1)}</span>
      </div>
    </div>
  );
};

export default HotelListItem;
