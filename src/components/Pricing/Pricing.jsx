import FeaturesTitle from '../FeaturesTitle/FeaturesTitle'
import PricingButton from '../PricingButton/PricingButton'
import PricingCardLayout from '../PricingCardLayout/PricingCardLayout'

import { cardList, cardList2, cardList3 } from '../../const/listData'

import styles from './Pricing.module.css'

const Pricing = () => {
  return (
    <div className={styles.container} id='pricing'>
      <FeaturesTitle
        textTop='Pricing Tiers'
        tittle='Fit for all your needs'
        textBottom='Pick the plan that suits you today and step up as your demands grow - our flexible options have your journey mapped out.'
        />
      <div className={styles.btnsWrap}>
        <PricingButton text='Monthly'/>
        <PricingButton text='Annually'/>
      </div>
      <div className={styles.cardsWrap}>
        <PricingCardLayout
            title='Basic Plan'
            description='Access to a curated selection of abstract images'
            price='9.99'
            cardList={cardList}
        />
        <PricingCardLayout
            title='Standard Plan'
            description='Next-level Integrations, priced economically'
            price='19.99'
            cardList={cardList2}
            mostPopular={true}
        />
        <PricingCardLayout
            title='Premium Plan'
            description='Experience limitless living for power users'
            price='29.99'
            cardList={cardList3}
        />
      </div>  
    </div>
  )
}

export default Pricing
