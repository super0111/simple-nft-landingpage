import * as React from 'react';
import classes from './FSM.module.css'

const FSM = () => {
  return (
    <div className={classes.ftm}>
        <div className={classes.header}>
            <img className={classes.header_img} src='/img/FSM.26a08c9ac39524cc989b.png' />
            <div className={classes.title_field}>
                <div className={classes.title}>FSM</div>
                <a href='#' className={classes.view_contract}>
                    View contract
                    <img className={classes.viewContract_icon} src='/img/ic-link-primary.e9984944a2eebba5afee360d498ffc47.svg' />    
                </a>
            </div>
            <div className={classes.price_field}>
                <div className={classes.price_name}>
                    Price:
                    <span className={classes.ftm_value}>0.274232 FTM</span>
                </div>
                <div className={classes.usd_price}>$0.234232</div>
            </div>
        </div>
        <div className={classes.body}>
            <div className={classes.body_item}>
                <div className={classes.text}>Circulating supply</div>
                <div className={classes.line}></div>
                <div className={classes.number}>154,442</div>
            </div>
            <div className={classes.body_item}>
                <div className={classes.text}>Market Cap</div>
                <div className={classes.line}></div>
                <div className={classes.number}>$55,321</div>
            </div>
            <div className={classes.metamask}>
                <button className={classes.metamask_btn}>
                    <span className={classes.plus_icon}>+</span>
                    <img className={classes.metamask_icon} src='/img/download (3).png' />
                </button>
            </div>
        </div>
    </div>
  );
};

export default FSM;
