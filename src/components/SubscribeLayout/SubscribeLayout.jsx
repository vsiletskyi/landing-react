import PropTypes from 'prop-types'
import CardList from '../CardList/CardList'
import SubscribeForm from '../SubscribeForm/SubscribeForm'

import styles from './SubscribeLayout.module.css'

const SubscribeLayout = ({title, cardList, description}) => {
  return (
    <div>
      <h3 className={styles.title}>{title}</h3>
      <CardList cardList={cardList}/>
      <SubscribeForm />
      <p className={styles.description}>{description}</p>
    </div>
  )
}

SubscribeLayout.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    cardList: PropTypes.array
}


export default SubscribeLayout
