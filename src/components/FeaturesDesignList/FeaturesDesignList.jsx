import FeaturesItem from '../FeaturesItem/FeaturesItem'

import logo1 from './../../assets/img/Thumbnail Icons 7.svg'
import logo2 from './../../assets/img/Thumbnail Icons 8.svg'
import logo3 from './../../assets/img/Thumbnail Icons 9.svg'

import featuresItemStyles from './FeaturesItemStyles.module.css'

const featuresList = [
    {
      img: {src: logo1, alt: 'logo1'},
      title: "5K resolution support",
      text: "All images boast a minimum resolution of 5K, ensuring crisp, crystal-clear quality."
    },
    {
      img: {src: logo2, alt: 'logo2'},
      title: "From water to glass",
      text: "We offer a wide array of abstractions, ranging from water to glass, and encompassing various styles including 3D and vector."
    },
    {
      img: {src: logo3, alt: 'logo3'},
      title: "Portrait or landscape",
      text: "Effortlessly adapt your images for any platform - whether it's a stunning wallpaper or captivating Instagram reels and stories."
    },
]

const FeaturesDesignList = () => {
  return (
    <>
        {featuresList.map((item, i) => {
            return <FeaturesItem key={i} item={item} featuresItemStyles={featuresItemStyles} />
        })}
    </>
  )
}

export default FeaturesDesignList
