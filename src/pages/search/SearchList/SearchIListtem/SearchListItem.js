import SearchItemDescription from './SearchItemDescription';
import SearchItemHeader from './SearchItemHeader';
import SearchItemPricing from './SearchItemPricing';
import styles from './SearchListItem.module.css';

// item in list of searched hotel on search page
const SearchListItem = ({
  item: {
    photos,
    name,
    rating,
    distance,
    description,
    cheapestPrice,
    rooms,
    _id: hotelId,
  },
}) => {
  return (
    <div className={styles['search-list-item']}>
      <img src={photos[0]} alt={name} />
      <div className={styles['content-container']}>
        <SearchItemHeader name={name} rate={rating} />
        <div className={styles.content}>
          <SearchItemDescription
            distance={distance}
            type={rooms[0].desc}
            description={description}
            tag={rooms[0].title}
          />
          <SearchItemPricing price={cheapestPrice} hotelId={hotelId} />
        </div>
      </div>
    </div>
  );
};

export default SearchListItem;
