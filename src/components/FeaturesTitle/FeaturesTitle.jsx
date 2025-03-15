import PropTypes from 'prop-types'
import styles from './FeaturesTitle.module.css'

const FeaturesTitle = ({textTop, tittle, textBottom}) => {
  return (
    <div className={styles.header}>
        <p className={styles.textTop}>{textTop}</p>
        <h3>{tittle}</h3>
        <p className={styles.textBottom}>{textBottom}</p>
    </div>
  )
}

FeaturesTitle.propTypes = {
    textTop: PropTypes.string,
    tittle: PropTypes.string,
    textBottom: PropTypes.string
}

export default FeaturesTitle
