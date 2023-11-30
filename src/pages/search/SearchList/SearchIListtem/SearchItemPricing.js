import { useNavigate } from 'react-router-dom';
import styles from './SearchItemPricing.module.css';

// price and button to book hotel, part of searched hotel item on search page
const SearchItemPricing = ({ price, hotelId }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.pricing}>
      <p className={styles.price}>${price}</p>
      <p className={styles['tax-fee']}>Include taxes and fees</p>
      <button onClick={navigate.bind(null, '/detail/' + hotelId)}>
        See availability
      </button>
    </div>
  );
};

export default SearchItemPricing;
