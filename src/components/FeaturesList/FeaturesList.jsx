import FeaturesItem from '../FeaturesItem/FeaturesItem'

import logo1 from './../../assets/img/Thumbnail Icons 1.svg'
import logo2 from './../../assets/img/Thumbnail Icons 2.svg'
import logo3 from './../../assets/img/Thumbnail Icons 3.svg'
import logo4 from './../../assets/img/Thumbnail Icons 4.svg'
import logo5 from './../../assets/img/Thumbnail Icons 5.svg'
import logo6 from './../../assets/img/Thumbnail Icons 6.svg'


const featuresList = [
    {
      img: {src: logo1, alt: 'logo1'},
      title: "Infinite Download",
      text: "Once you subscribe to our plans, they're all yours. Download as many as you want and use them for work presentations, wallpapers, and much more."
    },
    {
      img: {src: logo2, alt: 'logo2'},
      title: "Purely Handcrafted",
      text: "No AI, no generic images. Crafted from various chemicals, fabrics, clouds, or even particles as small as dust."
    },
    {
      img: {src: logo3, alt: 'logo3'},
      title: "All Are Under licensed",
      text: "The only limitation with these abstract images is that you are not able to sell them in any form, whether digital or hard copy (such as paintings or prints on paper)."
    },
    {
      img: {src: logo4, alt: 'logo4'},
      title: "Cancel Anytime",
      text: "Subscribe at your own pace, and cancel when you feel it's enough."
    },
    {
      img: {src: logo5, alt: 'logo5'},
      title: "Empowering For Team",
      text: "We support multiple seats at once, requiring only a single payment."
    },
    {
      img: {src: logo6, alt: 'logo6'},
      title: "No Limitations",
      text: "Use as many as you want, from Dribbble presentations to PowerPoint presentations."
    },
]

const FeaturesList = () => {
  return (
    <>
      {featuresList.map((item, i) => {
        return <FeaturesItem key={i} item={item} />
      })}
    </>
  )
}

export default FeaturesList
