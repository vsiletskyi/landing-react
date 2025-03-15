import PropTypes from 'prop-types'
import styles from './PricingButton.module.css'

const PricingButton = ({text}) => {
  return (
    <button className={styles.button}>
      {text}
    </button>
  )
}

PricingButton.propTypes = {
    text: PropTypes.string
}

export default PricingButton
