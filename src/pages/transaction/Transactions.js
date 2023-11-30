import { useLoaderData } from 'react-router-dom';
import { url_get_transaction } from '../../store/local-storage';
import Contact from '../home/Contact/Contact';
import Footer from '../home/Footer/Footer';
import NavBar from '../home/NavBar/NavBar';
import styles from './Transactions.module.css';

const TransactionItem = ({
  transac: { hotel, room, dateEnd, dateStart, price, payment, status },
  index,
}) => {
  return (
    <div className={styles['table-row']}>
      <p className={styles.index}>{index + 1}</p>
      <p className={styles.hotel}>{hotel}</p>
      <p className={styles.room}>{room.toString()}</p>
      <p className={styles.date}>{dateStart + ' - ' + dateEnd}</p>
      <p className={styles.price}>${price}</p>
      <p className={styles.payment}>{payment}</p>
      <p className={styles.status}>
        <span className={styles[status.toLowerCase()]}>{status}</span>
      </p>
    </div>
  );
};

const Transactions = () => {
  let transactions = useLoaderData();
  if (!transactions) transactions = [];
  console.log(transactions);

  return (
    <>
      <NavBar />
      <div className={styles.transactions}>
        <h2>Your Transactions</h2>
        <div className={styles['table-header']}>
          <h5 className={styles.index}>#</h5>
          <h5 className={styles.hotel}>Hotel</h5>
          <h5 className={styles.room}>Room</h5>
          <h5 className={styles.date}>Date</h5>
          <h5 className={styles.price}>Price</h5>
          <h5 className={styles.payment}>Payment Method</h5>
          <h5 className={styles.status}>Status</h5>
        </div>
        {transactions.map((transac, i) => (
          <TransactionItem key={i} index={i} transac={transac} />
        ))}
      </div>
      <Contact />
      <Footer />
    </>
  );
};

export default Transactions;

export const loader = async ({ params }) => {
  try {
    const res = await fetch(url_get_transaction + params.user);

    const data = await res.json();

    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
