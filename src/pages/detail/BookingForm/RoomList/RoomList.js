import styles from './RoomList.module.css';

const RoomListItem = ({
  room: { title, roomNumbers, desc, maxPeople, price },
  onSelectRoom,
  roomsSelected,
}) => {
  const selectRoomHandler = (e) => {
    let roomsSelectedCopy = JSON.parse(JSON.stringify(roomsSelected));

    if (e.target.checked)
      roomsSelectedCopy.push({
        number: e.target.dataset.number,
        price: e.target.dataset.price,
      });
    else
      roomsSelectedCopy.splice(
        roomsSelectedCopy.findIndex(
          (r) => r.number === e.target.dataset.number
        ),
        1
      );

    onSelectRoom(roomsSelectedCopy);
  };

  return (
    <div className={styles['room-list-item']}>
      <h4>{title}</h4>
      <div>
        <div>
          <p>{desc}</p>
          <h6>Max people: {maxPeople}</h6>
          <h5>${price}</h5>
        </div>
        <div className={styles['room-checkbox']}>
          {roomNumbers.map((rn, i) => (
            <div key={i} className={styles.checkbox}>
              <label>{rn}</label>
              <input
                type="checkbox"
                onChange={selectRoomHandler}
                data-number={rn}
                data-price={price}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const RoomList = ({ roomList, onSelectRoom, roomsSelected }) => {
  return (
    <div className={styles['room-list']}>
      <h3>Select Rooms</h3>
      <div>
        {roomList.map((room, i) => (
          <RoomListItem
            room={room}
            key={i}
            onSelectRoom={onSelectRoom}
            roomsSelected={roomsSelected}
          />
        ))}
      </div>
    </div>
  );
};

export default RoomList;
