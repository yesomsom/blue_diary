import React from "react";
import rightArrow from '../img/arrow_right_64.png';
import blueOcean from '../img/blue_ocean.jpg';
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function WelcomeMain(){

  return(
    <Wrapper>
      <Overlay>
        <h2 className="dancing_font">BLUE</h2>
        <div className="wrap">
          <h1>오늘 하루는 어땠나요?😊</h1>
          <Link to="/personal_main">
            <span className="font_color_red">오늘의 이야기 작성하기</span>
            <img className="icon_right_arrow" src={ rightArrow } alt="go to write"/>
          </Link>
        </div>
        <div className="wrap">
          <h2>새롭게 올라온 이야기</h2>
          <img className="img_blue_ocean" src={ blueOcean } alt=""/>
          <img className="img_blue_ocean" src={ blueOcean } alt=""/>
          <img className="img_blue_ocean" src={ blueOcean } alt=""/>
          <div>
            <Link to="/personal_main">
              <span className="font_color_red">새로운 스토리 올리기</span>
              <img className="icon_right_arrow" src={ rightArrow } alt="go to write"/>
            </Link>
          </div>
        </div>
      </Overlay>
    </Wrapper>
  )
}

// npm install styled-components

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 150vh;
  background-image: url(${blueOcean});
  background-size: cover;
`;

const Overlay = styled.div`
  background-color: #fffcfc7d;
  width: 60%;
  transform: translate(32%,0%);
`;