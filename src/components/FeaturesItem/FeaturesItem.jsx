import styles from './FeaturesItem.module.css'

const FeaturesItem = ({ item }) => {
    return (
      <div className={styles.featuresItem}>
          <img src={item.img.src} alt={item.img.alt} />
          <h4 className={styles.featuresTitle}>{item.title}</h4>
          <p className={styles.featuresText}>{item.text}</p>
      </div>
    )
}
  
export default FeaturesItem