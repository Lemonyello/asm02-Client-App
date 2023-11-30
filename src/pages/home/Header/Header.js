import styles from './Header.module.css';
import HeaderText from './HeaderText';
import HeaderInputs from './HeaderInputs';

// header of home page, has introduction text and search fields
const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <HeaderText />
        <HeaderInputs />
      </div>
    </div>
  );
};

export default Header;
