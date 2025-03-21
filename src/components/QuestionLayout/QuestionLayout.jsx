import PropTypes from 'prop-types'
import imgVector from './../../assets/img/Vector.svg'

import styles from './QuestionLayout.module.css'

const QuestionLayout = ({title, description}) => {
  return (
    <div className={styles.questionWrap}>
        <div className={styles.titleWrap}>
            <h4 className={styles.questionTitle}>{title}</h4>
            <div className={styles.imgWrap}>
                <img src={imgVector} alt="img" />
            </div>
        </div>
        <p className={styles.questionDesc}>{description}</p>
    </div>
  )
}

QuestionLayout.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string
}

export default QuestionLayout
