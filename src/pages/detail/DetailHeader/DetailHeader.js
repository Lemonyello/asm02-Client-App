import { useContext } from 'react';
import styles from './DetailHeader.module.css';
import BookingContext from '../../../store/booking-context';

// name of hotel, address, distance from center, booking button on detail page
const DetailHeader = (props) => {
  const { setShowBookingForm } = useContext(BookingContext);

  return (
    <div className={styles.header}>
      <div className={styles.heading}>
        <h1>{props.name}</h1>
        <button
          onClick={() => {
            setShowBookingForm((prevState) => !prevState);
          }}
        >
          Reserver or Book now!
        </button>
      </div>
      <p className={styles.address}>
        <i className="fa fa-map-marker" />
        &nbsp;&nbsp;&nbsp;
        {props.address}
      </p>
      <p className={styles.location}>
        Excellent location - {props.distance}m from center
      </p>
      <p className={styles.price}>
        Book a stay over ${props.price} at this property and get a free airport
        taxi
      </p>
    </div>
  );
};

export default DetailHeader;
