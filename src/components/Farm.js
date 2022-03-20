import classes from './Farm.module.css'

const Farm = () => {
    return (
        <div className={classes.farm}>
            <div className={classes.header}>
                <img className={classes.header_img} src='/img/download (5).png' />
                FARM
                <a className={classes.goFarm} href="#">GO TO FARMS</a>
            </div>
            <div>
                <div className={classes.apr_field}>
                    FSM/FTM
                    <span className={classes.text}>APR: 0%</span>
                </div>
                <div className={classes.apr_field}>
                    FSM/XFTM
                    <span className={classes.text}>APR: 0%</span>
                </div>
                <div className={classes.apr_field}>
                    XFSM/FTM
                    <span className={classes.text}>APR: 0%</span>
                </div>
            </div>
        </div>
    )
}
export default Farm;