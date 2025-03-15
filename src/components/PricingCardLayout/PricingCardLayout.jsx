import classNames from 'classnames'
import PropTypes from 'prop-types'
import Button from '../Button/Button'
import img from '../../assets/img/check-fill.svg'

import styles from './PricingCardLayout.module.css'

const PricingCardLayout = ({title, description, price, cardList, mostPopular}) => {
  return (
    <div className={classNames(styles.cardWrap, {[styles.mostPopularCard]: mostPopular})}>
      {mostPopular && 
        <div className={styles.mostPopular}>Most Popular</div>
      }  
      <div className={styles.container}>
        <div className={styles.title}>
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
        <div className={styles.price}>
            <p><span>${price}</span>/ month</p>
            <p className={styles.priceDesc}>Billed monthly</p>
        </div>
        <ul className={styles.cardList}>
            {cardList.map((item, i)=>{
                return <li key={i}>
                    <img src={img} alt="checkImg" /> {item}
                </li>
            })}
        </ul>
        <div className={styles.btnWrap}>
            {mostPopular ? 
                <Button text="Buy now" variant="dark" className="btnBig"/>
                : <Button text="Buy now" variant="light" className="btnBig"/>
            }            
        </div>
      </div>
    </div>
  )
}

PricingCardLayout.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.string,
    mostPopular: PropTypes.bool,
    cardList: PropTypes.array
}

export default PricingCardLayout
