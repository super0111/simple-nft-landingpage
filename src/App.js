import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './app.module.css';
import HeaderNav from './components/Header/headerNav'
import Bodytitle from './components/Bodytitle';
import FSM from './components/FSM';
import XFTM from './components/XFTM';
import Staking from './components/Staking';
import Farm from './components/Farm';
import Ratio from './components/Ratio';
import MinTWAP from './components/MinTWAP';


function App() {
  return (
    <div className={classes.body}>
      <HeaderNav />
      <Bodytitle />
      <div className={classes.flexRow}>
        <FSM />
        <XFTM />
      </div>
      <div className={classes.flexRow}>
        <Staking />
        <Farm />
      </div>
      <div className={classes.flexRow}>
        <Ratio />
        <MinTWAP />
      </div>
      <div className={classes.footer}>
        Built for L1 tokens fans by Fantasic Team
        <img className={classes.footer_img} src="/img/download (8).png" />
        2022
      </div>
    </div>
  );
}

export default App;
