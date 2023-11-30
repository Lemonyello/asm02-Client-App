import NavBar from '../home/NavBar/NavBar';
import Contact from '../home/Contact/Contact';
import Footer from '../home/Footer/Footer';
import DetailHeader from './DetailHeader/DetailHeader';
import DetailImageList from './DetailImageList/DetailImageList';
import DetailPricing from './DetailPricing/DetailPricing';
import DetailDescription from './DetailDescription/DetailDescription';
import styles from './Detail.module.css';
import { url_hotel } from '../../store/local-storage';
import { useLoaderData } from 'react-router-dom';
import BookingForm from './BookingForm/BookingForm';
import { useContext } from 'react';
import BookingContext from '../../store/booking-context';

const Detail = () => {
  const hotel = useLoaderData() ?? { photos: [] };

  const { showBookingForm } = useContext(BookingContext);

  return (
    <div>
      <NavBar />
      <DetailHeader
        name={hotel.name}
        address={hotel.address}
        distance={hotel.distance}
        price={hotel.cheapestPrice}
      />
      <DetailImageList photos={hotel.photos} />
      <div className={styles['description-container']}>
        <DetailDescription title={hotel.title} description={hotel.desc} />
        <DetailPricing price={hotel.cheapestPrice} />
      </div>
      {showBookingForm && (
        <BookingForm hotelId={hotel._id} hotelName={hotel.name} />
      )}
      <Contact />
      <Footer />
    </div>
  );
};

export default Detail;

export const loader = async ({ request, params }) => {
  try {
    const res = await fetch(url_hotel + params.hotelId);

    if (!res.ok) return null;

    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};
