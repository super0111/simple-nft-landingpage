
import classes from './MinTWAP.module.css'

const MinTWAP = () => {
    return (
        <div className={classes.minTWAP}>
            <img className={classes.ratio_img} src="/img/download (6).png" />
            <div>
                <div className={classes.title}>
                    XFTM 60-MIN TWAP
                </div>
                <div className={classes.text}>
                    Last update: 18/03/2022 01:17:54 GMT-7
                </div>
            </div>
            <div className={classes.progress}>
                0.001 FTM
            </div>
        </div>
    )
}
export default MinTWAP;