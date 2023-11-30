import HotelListItem from './HotelListItem';

// list of hotel on home page
const HotelList = ({ className, hotels }) => {
  return (
    <div>
      <h3>Home guests love</h3>
      <div className={className}>
        {hotels.map((hotel, i) => (
          <HotelListItem
            key={i}
            name={hotel.name}
            city={hotel.city}
            price={hotel.cheapestPrice}
            rate={hotel.rating}
            type={hotel.type}
            imageUrl={hotel.photos[0]}
            hotelId={hotel._id}
          />
        ))}
      </div>
    </div>
  );
};

export default HotelList;
