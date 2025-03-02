import FeaturesItem from '../FeaturesItem/FeaturesItem'

import logo10 from './../../assets/img/Thumbnail Icons 10.svg'
import logo11 from './../../assets/img/Thumbnail Icons 11.svg'
import logo12 from './../../assets/img/Thumbnail Icons 12.svg'

const featuresList = [
    {
      img: {src: logo10, alt: 'logo10'},
      title: "Faster downloads",
      text: "Our robust servers are primed to deliver the highest resolution images swiftly, ensuring a smooth download experience."
    },
    {
      img: {src: logo11, alt: 'logo11'},
      title: "Convenience for teams",
      text: "Your single account can accommodate multiple users simultaneously downloading without any disruptions, streamlining teamwork and productivity."
    },
    {
      img: {src: logo12, alt: 'logo12'},
      title: "Royalty-free licensing",
      text: "Our straightforward, royalty-free licensing means your chosen images are yours to innovate with, without the hassle of negotiating usage rights for every new project."
    },
]

const FeaturesConvenienceList = () => {
  return (
    <>
        {featuresList.map((item, i) => {
            return <FeaturesItem key={i} item={item} variant='row' />
        })}
    </>
  )
}

export default FeaturesConvenienceList
