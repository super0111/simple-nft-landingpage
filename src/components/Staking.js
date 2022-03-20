import classes from './Staking.module.css'

const Staking = () => {
    return (
        <div className={classes.staking}>
            <div className={classes.header}>
                <img className={classes.header_img} src='/img/download (4).png' />
                STAKING
                <a className={classes.goStaking} href="#">GO TO STAKING</a>
            </div>
            <div>
                <div className={classes.apr_field}>
                    Staking APR
                    <span className={classes.text}>0%</span>
                </div>
                <div className={classes.apr_field}>
                    Lock APR
                    <span className={classes.text}>546%</span>
                </div>
            </div>
        </div>
    )
}
export default Staking;