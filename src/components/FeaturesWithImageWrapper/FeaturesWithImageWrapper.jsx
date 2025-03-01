import classNames from 'classnames'
import FeaturesList from '../FeaturesList'

import styles from './FeaturesWithImageWrapper.module.scss'

const FeaturesWithImageWrapper = ({img, imgAlign="left", listData}) => {
    return (
        <div className={classNames(styles.featuresWrapp, {
            [styles.featuresWrappLeft]: imgAlign === "left",
            [styles.featuresWrappRight]: imgAlign === "right",
        })}>
        <div className={styles.featuresImg}>
            <img src={img} alt="img" />
        </div> 
        <div className={styles.features}>
            <FeaturesList data={listData} align={"left"} />
        </div> 
    </div>  

    )
}

export default FeaturesWithImageWrapper