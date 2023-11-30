import styles from './TypeListItem.module.css';

// item of list of type of hotel on home page
const TypeListItem = ({ image, name, count }) => {
  return (
    <div className={styles['type-list-item']}>
      <img src={image} />
      <h6>{name[0].toUpperCase() + name.slice(1) + 's'}</h6>
      <p>
        {count} {name + 's'}
      </p>
    </div>
  );
};

export default TypeListItem;
