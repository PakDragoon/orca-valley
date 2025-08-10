import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
// Components
import TestimonialBox from "../Elements/TestimonialBox";

export default function TestimonialSlider() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="Orca Valley's blend of creativity and technology expertise has significantly enhanced our operations. A game-changing partnership!"
            author="Mark Robinson, OD, EcoTech"
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="Orca Valley transformed our operations with their innovative solutions. Exceptional expertise and service!"
            author="Jordan Lee, CEO, TechFlow"
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="Revolutionary software and outstanding client care. Orca Valley is a game-changer in tech industry!"
            author="Maria Gomez, Director, GreenTech"
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="Orca Valley's insights and strategies propelled our startup's success. Invaluable partnership anyone would want!"
            author="Alex Huang, Founder, NextGen"
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="Innovative, reliable, and user-focused – Orca Valley's services have elevated our digital experience to new heights."
            author="Emily Chen, Digital SM, BlueSky"
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="Orca Valley's software solutions are top-notch. Their team's innovative approach has been pivotal for our efficiency."
            author="Sam Patel, CTO, Quantum Dynamics"
          />
        </LogoWrapper>
      </Slider>
    </div>
  );
}

const LogoWrapper = styled.div`
  width: 90%;
  padding: 0 5%;
  cursor: pointer;
  :focus-visible {
    outline: none;
    border: 0px;
  }
`;
