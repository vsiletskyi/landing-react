import FeatureLayout from '../../components/FeatureLayout'
import FeaturesList from '../../components/FeaturesList/FeaturesList'
import { featuresList } from '../../const/listData'

import styles from './Features.module.css'

const Features = () => {
  return (
    <FeatureLayout
        id="features"
        title="Easy access to top quality images"
        textTop="Premium abstract images"
        textBottom="In a world where storytelling constantly evolves, we lead with groundbreaking images designed for your presentation excellence."
    >
        <div className={styles.features}>
                <FeaturesList data={featuresList} align='top' />
        </div>
    </FeatureLayout>
  )
}

export default Features
