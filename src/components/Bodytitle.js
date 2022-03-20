import * as React from 'react';
import classes from './Bodytitle.module.css'

const Bodytitle = () => {
  return (
    <div className={classes.body}>
        <div className={classes.title}>Welcome to Fantasm</div>
        <div className={classes.text}>Fractional-Algorithmic Synthetic Token pegged to the value of 1 FTM on Fantom Opera</div>
        <div className={classes.total}>
            Total Value Locked
            <span className={classes.total_price}>$
                <span className={classes.total_price}>63,001</span>
            </span>
        </div>
    </div>
  );
};

export default Bodytitle;
