import React, { useState, useEffect }  from 'react';
import Link from '@material-ui/core/Link';
import Toolbar from '@material-ui/core/Toolbar';
import classes from './headerNav.module.css';

const sections2 = [
    { title: '$0.318', url: '#', icon: '/img/FSM.26a08c9ac39524cc989b.png'},
    { title: '0.001 FTM', url: '#', icon: '/img/XFTM.df5dd5d99aa13e9a2819.png' },
    { title: '$1.298', url: '#', icon: '/img/download.png' },
];

const HeaderNav= () => {
  const [ state, setState ] = useState("Dashboard")
    return (
      <>
        <div className={classes.headerTool}>
          <div className={classes.dflexRow}>
            <div className={classes.navbarLogo}>
                <img className={classes.navbarLogoImg} src='/img/download (1).png' />
            </div>
            <Toolbar component="nav" variant="dense" className={classes.navSection}>
                <Link
                    onClick={ () => setState("Dashboard") }
                    style={{textDecoration: "none"}} 
                    noWrap
                    href="#"
                    className={classes.navToolbarLink}
                >
                  Dashboard
                  { state === "Dashboard" ? 
                    <button className={classes.spider}>
                      <img className={classes.spider_img} src='/img/spider.svg' />
                    </button>
                    : ""
                  }
                </Link>
                <Link
                    onClick={ () => setState("Mint") }
                    style={{textDecoration: "none"}} 
                    noWrap
                    href="#"
                    className={classes.navToolbarLink}
                >
                  Mint
                  { state === "Mint" ? 
                    <button className={classes.spider}>
                      <img className={classes.spider_img} src='/img/spider.svg' />
                    </button>
                    : ""
                  }
                </Link>
                <Link
                    onClick={ () => setState("Redeem") }
                    style={{textDecoration: "none"}} 
                    noWrap
                    href="#"
                    className={classes.navToolbarLink}
                >
                  Redeem
                  { state === "Redeem" ? 
                    <button className={classes.spider}>
                      <img className={classes.spider_img} src='/img/spider.svg' />
                    </button>
                    : ""
                  }
                </Link>
                <Link
                    onClick={ () => setState("Farms") }
                    style={{textDecoration: "none"}} 
                    noWrap
                    href="#"
                    className={classes.navToolbarLink}
                >
                  Farms
                  { state === "Farms" ? 
                    <button className={classes.spider}>
                      <img className={classes.spider_img} src='/img/spider.svg' />
                    </button>
                    : ""
                  }
                </Link>
                <Link
                    onClick={ () => setState("Staking") }
                    style={{textDecoration: "none"}} 
                    noWrap
                    href="#"
                    className={classes.navToolbarLink}
                >
                  Staking
                  { state === "Staking" ? 
                    <button className={classes.spider}>
                      <img className={classes.spider_img} src='/img/spider.svg' />
                    </button>
                    : ""
                  }
                </Link>
                <Link
                    onClick={ () => setState("Airdrop") }
                    style={{textDecoration: "none"}} 
                    noWrap
                    href="#"
                    className={classes.navToolbarLink}
                >
                  Airdrop
                  { state === "Airdrop" ? 
                    <button className={classes.spider}>
                      <img className={classes.spider_img} src='/img/spider.svg' />
                    </button>
                    : ""
                  }
                </Link>
            </Toolbar>
          </div>
          <div className={classes.dflexRow}>
            <Toolbar component="nav" variant="dense" className={classes.priceSection}>
                {sections2.map((section2) => (
                  <div className={classes.priceField}>
                    <img className={classes.priceIcon} src={section2.icon} />
                    <Link
                        style={{textDecoration: "none"}} 
                        noWrap
                        key={section2.title}
                        href={section2.url}
                        className={classes.priceValue}
                    >
                      {section2.title}
                    </Link>

                  </div>
                ))}
            </Toolbar>
            <button className={classes.walletBtn}>
                <img claasName={classes.walletImg} src='/img/ic-ghost.2d95302a05c82ed40b0ac9ad932972d9.svg' />
                <span className={classes.walletBtn_m}>Connect wallet</span>
            </button>
            <div className={classes.menuMore}>
              <img src="/img/ic-more.c71eaae837e0cef1ff7e9e4819130373.svg" />
            </div>
          </div>    
        </div>
      </>
    );
}
export default HeaderNav
