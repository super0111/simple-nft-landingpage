import * as React from 'react';
import classes from './XFTM.module.css'

const XFTM = () => {
  return (
    <div className={classes.xftm}>
        <div className={classes.header}>
            <img className={classes.header_img} src='/img/XFTM.df5dd5d99aa13e9a2819.png' />
            <div className={classes.title_field}>
                <div className={classes.title}>XFSM</div>
                <a href='#' className={classes.view_contract}>
                    View contract
                    <img className={classes.viewContract_icon} src='/img/ic-link-primary.e9984944a2eebba5afee360d498ffc47.svg' />    
                </a>
            </div>
            <div className={classes.price_field}>
                <div className={classes.price_name}>
                    Price:
                    <span className={classes.xftm_value}>0.00051 FTM</span>
                </div>
                <div className={classes.usd_price}>$0.234232</div>
            </div>
        </div>
        <div className={classes.body}>
            <div className={classes.body_item}>
                <div className={classes.text}>Circulating supply</div>
                <div className={classes.line}></div>
                <div className={classes.number}>11243,442</div>
            </div>
            <div className={classes.body_item}>
                <div className={classes.text}>Market Cap</div>
                <div className={classes.line}></div>
                <div className={classes.number}>$52,321</div>
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

export default XFTM;
