import PropTypes from 'prop-types'

import styles from './FeaturesItem.module.css'

const FeaturesItem = ({ item, featuresItemStyles}) => {
    const itemStyles = featuresItemStyles || styles;

    return (
      <div className={itemStyles.featuresItem}>
        <div className={itemStyles.imgWrapp}>
            <img src={item.img.src} alt={item.img.alt} />
        </div>
        <div className={itemStyles.textWrapp}>
            <h4 className={itemStyles.featuresTitle}>{item.title}</h4>
            <p className={itemStyles.featuresText}>{item.text}</p>
        </div>          
      </div>
    )
}

FeaturesItem.propTypes = {
    item: PropTypes.object,
    featuresItemStyles: PropTypes.object
  }
  
export default FeaturesItem