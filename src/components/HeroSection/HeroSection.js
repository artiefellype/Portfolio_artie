import React from "react";
import {
    HeroContainer,
    HeroBg,
    VideoBg
} from './HeroElements';

const HeroSection = () => {
    return (
        <>
            <HeroContainer>
                <HeroBg>
                    <VideoBg autoplay loop muted src={video} type='video/mp4' />
                </HeroBg>
            </HeroContainer>
            
        </>
    )
}

export default HeroSection;