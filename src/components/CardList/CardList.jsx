import PropTypes from 'prop-types'
import img from '../../assets/img/check-fill.svg'

import styles from './CardList.module.css'

const CardList = ({cardList}) => {
  return (
    <ul className={styles.cardList}>
        {cardList.map((item, i)=>{
            return <li key={i}>
                <img src={img} alt="checkImg" /> {item}
            </li>
        })}
    </ul>
  )
}

CardList.propTypes = {
    cardList: PropTypes.array
}

export default CardList
