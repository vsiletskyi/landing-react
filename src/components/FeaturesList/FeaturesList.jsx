import FeaturesItem from '../FeaturesItem/FeaturesItem'

const FeaturesList = ({data, align}) => {
  return (
    <>
      {data?.map((item, i) => {
        return <FeaturesItem key={i} item={item} align={align} />
      })}
    </>
  )
}

export default FeaturesList
