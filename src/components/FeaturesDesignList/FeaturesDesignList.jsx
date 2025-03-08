import PropTypes from 'prop-types'
import FeaturesItem from '../FeaturesItem/FeaturesItem'

const FeaturesDesignList = ({data}) => {
  return (
    <div>
        {data.map((item, i) => {
            return <FeaturesItem key={i} item={item} variant='row' />
        })}
    </div>
  )
}

FeaturesDesignList.propTypes = {
  data: PropTypes.array
}

export default FeaturesDesignList
