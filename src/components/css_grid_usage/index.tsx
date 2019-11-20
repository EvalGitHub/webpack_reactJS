import * as React from 'react';
import * as styles from './style.scss';
function CssGridUsage () {
  return (
    <div className={styles.css_grid_wrapper}>
        <div className={[`${styles.itmes}`, `${styles.item1}`].join(' ')}>1</div>
        <div className={styles.itmes}>2</div>
        <div className={styles.itmes}>3</div>
        <div className={styles.itmes}>4</div>
        <div className={styles.itmes}>5</div>
        <div className={styles.itmes}>6</div>
        <div className={styles.itmes}>5</div>
        <div className={styles.itmes}>6</div>
        <div className={styles.itmes}>5</div>
        <div className={styles.itmes}>6</div>
        <div className={styles.itmes}>5</div>
        <div className={styles.itmes}>6</div>
        <div className={styles.itmes}>5</div>
        <div className={styles.itmes}>6</div>
    </div>
  );
}
export default CssGridUsage;