import { useContext } from 'react';
import styles from './DetailPricing.module.css';
import BookingContext from '../../../store/booking-context';

// price of 9 night stay on detail page
const DetailPricing = (props) => {
  const { setShowBookingForm } = useContext(BookingContext);

  return (
    <div className={styles['detail-pricing']}>
      <div className={styles.price}>
        <span>${props.price}</span>
        <span>&nbsp;(1 nights)</span>
      </div>
      <button
        onClick={() => {
          setShowBookingForm((prevState) => !prevState);
        }}
      >
        Reserve or Book Now!
      </button>
    </div>
  );
};

export default DetailPricing;
