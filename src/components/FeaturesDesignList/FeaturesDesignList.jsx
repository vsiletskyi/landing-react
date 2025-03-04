import PropTypes from 'prop-types'
import FeaturesItem from '../FeaturesItem/FeaturesItem'

const FeaturesDesignList = ({data}) => {
  return (
    <>
        {data.map((item, i) => {
            return <FeaturesItem key={i} item={item} variant='row' />
        })}
    </>
  )
}

FeaturesDesignList.propTypes = {
  data: PropTypes.array
}

export default FeaturesDesignList
