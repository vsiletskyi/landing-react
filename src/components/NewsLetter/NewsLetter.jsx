import SubscribeLayout from '../SubscribeLayout/SubscribeLayout'
import img from '../../assets/img/Image.svg'
import { cardList4 } from '../../const/listData'

import styles from './NewsLetter.module.css'

const NewsLetter = () => {
  return (
    <div className={styles.container}>
      <div className={styles.subscribeWrap}>
        <SubscribeLayout
          title='Get the finest curated abstracts delivered weekly to your inbox'
          cardList={cardList4}
          description='We only send you the best! No spam.'
          />
      </div>
      <div className={styles.imgWrap}>
        <img src={img} alt="img" />
      </div>
    </div>
  )
}

export default NewsLetter
