import styles from './HeaderText.module.css';

// introduction text in main header on home page
const HeaderText = () => {
  return (
    <div className={styles['header-text']}>
      <h1>Get lifetime of discounts? It's Genius.</h1>
      <p>
        Get rewarded for your travels - unlock instant savings of 10% or more
        with a free account
      </p>
      <button>Sign in / Register</button>
    </div>
  );
};

export default HeaderText;
