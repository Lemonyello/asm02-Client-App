import styles from './DetailImageList.module.css';

// list of hotel images on detail page
const DetailImageList = (props) => {
  return (
    <div className={styles['detail-image-list']}>
      {props.photos.map((img, i) => (
        <img src={img} key={i} alt={i} />
      ))}
    </div>
  );
};

export default DetailImageList;
