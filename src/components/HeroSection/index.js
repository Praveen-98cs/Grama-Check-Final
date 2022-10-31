import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroElements';
import {Button} from '../ButtonElements';


const HeroSection = () => {
  const [hover, setHover] = useState(false)

  const onHover= () => {
    setHover(!hover)
  }
  return (
    <HeroContainer >
        <HeroBg >
            <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
        </HeroBg>
        <HeroContent>
          <HeroH1>Grama Check - Your Local Digital Certificate
</HeroH1>
        <HeroP>SignUp for a new account today and receive your Local Digital Certificate. </HeroP>
        <HeroBtnWrapper >
          <Button to= "about" onMouseEnter ={onHover} onMouseLeave={onHover} primary='true' dark='true '
              smooth={true} duration={500} spy={true} exact = 'true' offset={-80}
          
          > 
            Get Started {hover ? <ArrowForward/> : <ArrowRight/>}
          </Button>
        </HeroBtnWrapper>
        </HeroContent>
        </HeroContainer>
  )
}

export default HeroSection