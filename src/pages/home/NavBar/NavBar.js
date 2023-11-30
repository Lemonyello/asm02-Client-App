import styles from './NavBar.module.css';
import NavList from './NavList';
import LogoBar from './LogoBar';

// navbar of all pages, has logo, list of nav items
const NavBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles['nav-bar']}>
        <LogoBar />
        <NavList />
      </div>
    </div>
  );
};

export default NavBar;
