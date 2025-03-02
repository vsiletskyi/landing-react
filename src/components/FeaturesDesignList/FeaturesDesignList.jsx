import FeaturesItem from '../FeaturesItem/FeaturesItem'

import logo7 from './../../assets/img/Thumbnail Icons 7.svg'
import logo8 from './../../assets/img/Thumbnail Icons 8.svg'
import logo9 from './../../assets/img/Thumbnail Icons 9.svg'

const featuresList = [
    {
      img: {src: logo7, alt: 'logo7'},
      title: "5K resolution support",
      text: "All images boast a minimum resolution of 5K, ensuring crisp, crystal-clear quality."
    },
    {
      img: {src: logo8, alt: 'logo8'},
      title: "From water to glass",
      text: "We offer a wide array of abstractions, ranging from water to glass, and encompassing various styles including 3D and vector."
    },
    {
      img: {src: logo9, alt: 'logo9'},
      title: "Portrait or landscape",
      text: "Effortlessly adapt your images for any platform - whether it's a stunning wallpaper or captivating Instagram reels and stories."
    },
]

const FeaturesDesignList = () => {
  return (
    <>
        {featuresList.map((item, i) => {
            return <FeaturesItem key={i} item={item} variant='row' />
        })}
    </>
  )
}

export default FeaturesDesignList
