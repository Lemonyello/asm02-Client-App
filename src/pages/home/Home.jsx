import Header from './Header/Header';
import NavBar from './NavBar/NavBar';
import styles from './Home.module.css';
import DestinationList from './DestinationList/DestinationList';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

const Home = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <DestinationList />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
