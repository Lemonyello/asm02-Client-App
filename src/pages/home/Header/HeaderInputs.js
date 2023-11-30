import { useContext, useState } from 'react';
import styles from './HeaderInputs.module.css';
import { useNavigate } from 'react-router-dom';
import BookingContext from '../../../store/booking-context';
import DatePicker from '../../../UI/DatePicker';

// group of search inputs on home page
const HeaderInputs = () => {
  const navigate = useNavigate();
  const { setSearchFields } = useContext(BookingContext);

  //states------------

  const [selectedDate, setSelectedDate] = useState('');

  const [activeDateModal, setActiveDateModal] = useState(false);

  //handlers------------

  const onClickDateInputHandler = () =>
    setActiveDateModal((prevState) => !prevState);

  const onSearch = (e) => {
    const inputVals = Array.from(
      e.target.parentNode.getElementsByTagName('input')
    ).map((input) => input.value);

    setSearchFields({
      city: inputVals[0],
      startDate: inputVals[1].split(' to ')[0],
      endDate: inputVals[1].split(' to ')[1],
      numPeople: Number(inputVals[2]) + Number(inputVals[3]),
      numRoom: inputVals[4],
    });

    navigate('/search');
  };

  return (
    <div className={styles.inputs}>
      <input placeholder="&#xf236;  Where are you going?" type="text" />

      <input
        placeholder="&#xf073; 06/24/2022 to 06/24/2022"
        defaultValue={selectedDate}
        onClick={onClickDateInputHandler}
      />

      <div>
        <input placeholder="&#xf183; 1 adult &nbsp; &#183;" />
        <input placeholder="0 children &#183;" />
        <input placeholder="1 room" />
      </div>

      <button className={styles.button} onClick={onSearch}>
        Search
      </button>

      {activeDateModal && (
        <DatePicker setSelectedDate={setSelectedDate} className={styles.date} />
      )}
    </div>
  );
};

export default HeaderInputs;
