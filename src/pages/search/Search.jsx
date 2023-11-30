import NavBar from './../home/NavBar/NavBar';
import Footer from './../home/Footer/Footer';
import SearchPopup from './SearchPopup/SearchPopup';
import SearchList from './SearchList/SearchList';
import styles from './Search.module.css';
import { useContext, useEffect, useState } from 'react';
import { url_hotels_search } from '../../store/local-storage';
import BookingContext from '../../store/booking-context';

const Search = () => {
  const [hotelList, setHotelList] = useState([]);

  const { searchFields } = useContext(BookingContext);

  useEffect(() => {
    (async (e) => {
      const res = await fetch(
        url_hotels_search + '?' + new URLSearchParams(searchFields)
      );

      const data = await res.json();

      res.ok && setHotelList(data);
    })();
  }, [searchFields]);

  const onSearchHandler = (data) => setHotelList(data);

  return (
    <div>
      <NavBar />
      <div className={styles.search}>
        <SearchPopup onSearchHandler={onSearchHandler} />
        <SearchList hotels={hotelList} />
      </div>
      <Footer />
    </div>
  );
};

export default Search;
