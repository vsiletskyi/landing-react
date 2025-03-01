import PropTypes from 'prop-types'

import styles from './FeaturesItem.module.scss'
import classNames from 'classnames';

const FeaturesItem = ({ item, align="left"}) => {

    return (
      <div className={classNames(styles.featuresItem, {
        [styles.featuresItemLeft]: align === "left",
        [styles.featuresItemRight]: align === "right",
        [styles.featuresItemTop]: align === "top"
    })}>
        <div className={styles.imgWrapp}>
            <img src={item.img.src} alt={item.img.alt} />
        </div>
        <div className={styles.textWrapp}>
            <h4 className={styles.featuresTitle}>{item.title}</h4>
            <p className={styles.featuresText}>{item.text}</p>
        </div>          
      </div>
    )
}

FeaturesItem.propTypes = {
    item: PropTypes.object,
    featuresItemStyles: PropTypes.object
  }
  
export default FeaturesItem