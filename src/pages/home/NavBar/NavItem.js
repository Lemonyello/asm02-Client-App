import styles from './NavItem.module.css';

// item in list of nav item in navbar of all pages
const NavItem = (props) => {
  return (
    <a
      className={`${styles['nav-item']} ${props.active ? styles.active : ''}`}
      href="#"
    >
      <i className={`fa ${props.icon} `}></i>
      <span>{props.type}</span>
    </a>
  );
};

export default NavItem;
