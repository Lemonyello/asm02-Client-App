import { useContext, useState } from 'react';
import DatePicker from '../../../UI/DatePicker';
import styles from './BookingForm.module.css';
import RoomList from './RoomList/RoomList';
import UserInfoForm from './UserInfoForm/UserInfoForm';
import {
  url_create_transaction,
  url_hotel_not_booked_rooms,
} from '../../../store/local-storage';
import BookingContext from '../../../store/booking-context';
import { useNavigate } from 'react-router-dom';

const BookingForm = ({ hotelId, hotelName }) => {
  const navigate = useNavigate();
  const { username } = useContext(BookingContext);
  const [date, setDate] = useState('');
  const [rooms, setRooms] = useState([]);
  const [roomsSelected, setRoomsSelected] = useState([]);
  const [payment, setPayment] = useState('');
  const [msg, setMsg] = useState(null);

  const bill = roomsSelected.reduce((sum, r) => sum + Number(r.price), 0);

  const onBookRoom = async () => {
    !username && navigate('/login');

    const transaction = {
      hotel: hotelName,
      room: roomsSelected.map((r) => r.number),
      dateStart: date.split(' to ')[0],
      dateEnd: date.split(' to ')[1],
      price: bill,
      payment,
      user: username,
      status: 'Booked',
    };

    const res = await fetch(url_create_transaction, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(transaction),
    });

    const data = await res.json();

    if (!res.ok) setMsg(data.msg);
    else navigate('/transactions/' + username);
  };

  return (
    <div className={styles.form}>
      <div className={styles.date}>
        <div>
          <h2>Dates</h2>
          <DatePicker
            setSelectedDate={async (newDate) => {
              const res = await fetch(
                url_hotel_not_booked_rooms +
                  new URLSearchParams({
                    hotelId,
                    dateStart: newDate.split(' to ')[0],
                    dateEnd: newDate.split(' to ')[1],
                  })
              );

              const data = await res.json();

              setRooms(data);
              setDate(newDate);
            }}
          />
        </div>
        <UserInfoForm />
      </div>
      {rooms.length > 0 && (
        <RoomList
          roomList={rooms}
          onSelectRoom={(rooms) => {
            setRoomsSelected(rooms);
          }}
          roomsSelected={roomsSelected}
        />
      )}
      <h3>Total Bill: ${bill}</h3>
      <select onChange={(e) => setPayment(e.target.value)}>
        <option selected disabled hidden>
          Select Payment Method
        </option>
        <option>Credit Card</option>
        <option>Cash</option>
      </select>
      <button onClick={onBookRoom}>Reserve Now</button>
      {msg && <span>{msg}</span>}
    </div>
  );
};

export default BookingForm;
