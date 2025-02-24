import FeaturesItem from '../FeaturesItem/FeaturesItem'

import logo1 from './../../assets/img/Thumbnail Icons 10.svg'
import logo2 from './../../assets/img/Thumbnail Icons 11.svg'
import logo3 from './../../assets/img/Thumbnail Icons 12.svg'

import featuresItemStyles from './../FeaturesDesignList/FeaturesItemStyles.module.css'

const featuresList = [
    {
      img: {src: logo1, alt: 'logo1'},
      title: "Faster downloads",
      text: "Our robust servers are primed to deliver the highest resolution images swiftly, ensuring a smooth download experience."
    },
    {
      img: {src: logo2, alt: 'logo2'},
      title: "Convenience for teams",
      text: "Your single account can accommodate multiple users simultaneously downloading without any disruptions, streamlining teamwork and productivity."
    },
    {
      img: {src: logo3, alt: 'logo3'},
      title: "Royalty-free licensing",
      text: "Our straightforward, royalty-free licensing means your chosen images are yours to innovate with, without the hassle of negotiating usage rights for every new project."
    },
]

const FeaturesConvenienceList = () => {
  return (
    <>
        {featuresList.map((item, i) => {
            return <FeaturesItem key={i} item={item} featuresItemStyles={featuresItemStyles} />
        })}
    </>
  )
}

export default FeaturesConvenienceList
