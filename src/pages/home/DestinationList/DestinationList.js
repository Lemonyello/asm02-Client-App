import styles from './DestinationList.module.css';
import { json, useLoaderData } from 'react-router-dom';
import CityList from './CityList/CityList';
import TypeList from './TypeList/TypeList';
import HotelList from './HotelList/HotelList';
import { url_hotels, url_hotels_top_rate } from '../../../store/local-storage';

// list of city, type of hotel, hotel
const DestinationList = () => {
  let hotels = useLoaderData();

  if (!hotels) hotels = [];

  return (
    <div className={styles['destination-list']}>
      <CityList className={styles['horizontal-list']} hotels={hotels[0]} />

      <TypeList className={styles['horizontal-list']} hotels={hotels[0]} />

      <HotelList className={styles['horizontal-list']} hotels={hotels[1]} />
    </div>
  );
};

export default DestinationList;

export const loader = async ({ request, params }) => {
  try {
    const res = await Promise.all([
      fetch(url_hotels),
      fetch(url_hotels_top_rate),
    ]);

    if (!res[1].ok && !res[1].ok) return null;

    const data = await Promise.all([res[0].json(), res[1].json()]);

    return data;
  } catch (error) {
    console.log(error);
  }
};
