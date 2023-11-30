import NavItem from './NavItem';
import styles from './NavList.module.css';

const data = [
  {
    type: 'Stays',
    icon: 'fa-bed',
    active: true,
  },
  {
    type: 'Flights',
    icon: 'fa-plane',
    active: false,
  },
  {
    type: 'Car rentals',
    icon: 'fa-car',
    active: false,
  },
  {
    type: 'Attractions',
    icon: 'fa-bed',
    active: false,
  },
  {
    type: 'Airport taxis',
    icon: 'fa-taxi',
    active: false,
  },
];

// list of nav items on navbar of all pages
const NavList = () => {
  return (
    <div className={styles['nav-list']}>
      {data.map((item, i) => (
        <NavItem
          key={i}
          type={item.type}
          icon={item.icon}
          active={item.active}
        />
      ))}
    </div>
  );
};

export default NavList;
