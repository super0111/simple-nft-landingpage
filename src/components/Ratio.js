
import classes from './Ratio.module.css'

const Ratio = () => {
    return (
        <div className={classes.ratio}>
            <img className={classes.ratio_img} src="/img/download (6).png" />
            <div>
                <div className={classes.title}>
                    COLLATEAL RATIO
                </div>
                <div className={classes.text}>
                    18/03/2022 01:17:54 GMT-7
                </div>
            </div>
            <div className={classes.progress}>
                100%
            </div>
        </div>
    )
}
export default Ratio;