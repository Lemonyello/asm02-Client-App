import SearchListItem from './SearchIListtem/SearchListItem';
import styles from './SearchList.module.css';

// list of searched hotel on search page
const SearchList = ({ hotels }) => {
  return (
    <div className={styles['search-list']}>
      {hotels.map((item, i) => (
        <SearchListItem key={i} item={item} />
      ))}
    </div>
  );
};

export default SearchList;
