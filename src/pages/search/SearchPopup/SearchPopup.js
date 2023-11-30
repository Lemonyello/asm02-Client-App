import { useContext } from 'react';
import styles from './SearchPopup.module.css';
import BookingContext from '../../../store/booking-context';
import { url_hotels_search } from '../../../store/local-storage';

// form to fill out search fields on search page
const SearchPopup = ({ onSearchHandler }) => {
  const { searchFields } = useContext(BookingContext);

  const onSearch = async (e) => {
    const inputVals = Array.from(
      e.target.parentNode.getElementsByTagName('input')
    ).map((input) => input.value);

    const searchInputs = {
      city: inputVals[0],
      startDate: inputVals[1].split(' to ')[0],
      endDate: inputVals[1].split(' to ')[1],
      numPeople: Number(inputVals[2]) + Number(inputVals[3]),
      numRoom: inputVals[4],
    };

    const res = await fetch(
      url_hotels_search + '?' + new URLSearchParams(searchInputs)
    );

    const data = await res.json();

    onSearchHandler(data);
  };

  return (
    <div className={styles['search-popup']}>
      <h2>Search</h2>
      <div>
        <p>Destination</p>
        <input type="text" defaultValue={searchFields.city} />
        <p>Check-in Date</p>
        <input type="text" defaultValue={searchFields.startDate} />
        <p>Check-out Date</p>
        <input type="text" defaultValue={searchFields.endDate} />
      </div>
      <p>Options</p>
      <div className={styles.options}>
        <div>
          <label>Min price per night</label>
          <input type="text" />
        </div>
        <div>
          <label>Max price per night</label>
          <input type="text" />
        </div>
        <div>
          <label>Adult</label>
          <input
            type="number"
            placeholder="1"
            defaultValue={searchFields.numPeople}
          />
        </div>
        <div>
          <label>Children</label>
          <input type="number" placeholder="0" />
        </div>
        <div>
          <label>Room</label>
          <input
            type="number"
            placeholder="1"
            defaultValue={searchFields.numRoom}
          />
        </div>
      </div>
      <button onClick={onSearch}>Search</button>
    </div>
  );
};

export default SearchPopup;
