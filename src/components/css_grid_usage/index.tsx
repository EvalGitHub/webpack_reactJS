import * as React from 'react';
import * as styles from './style.scss';
function CssGridUsage () {
  (function () {
    console.log((window as any).__PRERENDER_INJECTED);
  }())
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
        <div className={styles.itmes}>3346</div>
        <img style={{width: '100px', height: '100px'}}
        src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2534506313,1688529724&fm=26&gp=0.jpg" alt=""/>
    </div>
  );
}
export default CssGridUsage;

// 参考：http://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html