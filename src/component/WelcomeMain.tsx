import React from "react";
import rightArrow from '../img/arrow_right_64.png';
import blueOcean from '../img/blue_ocean.jpg';
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function WelcomeMain(){

  return(
    <Wrapper>
      <Overlay>
        <h1 className="dancing_font">BLUE</h1>
        <div className="wrap">
          <h1 className="noto_font_400">오늘 하루는 어땠나요?😊</h1>
          <Link to="/personal_main">
            <span className="font_color_red_noto">오늘의 이야기 작성하기</span>
            <img className="icon_right_arrow" src={ rightArrow } alt="go to write"/>
          </Link>
        </div>

        <div className="wrap">
          <h2 className="noto_font_400">새롭게 올라온 이야기</h2>
          <Layout>
            <ul>
              <li className="new_story st1">STORY1</li>
              <li className="new_story st2">STORY2</li>
              <li className="new_story st3">STORY3</li>
            </ul>
          </Layout>

          <div className="btn_padding">
            <Link to="/personal_main">
              <span className="font_color_red_noto">새로운 스토리 올리기</span>
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
  height: 250vh;
  background-image: url(${blueOcean});
  background-size: cover;
`;

const Overlay = styled.div`
  background-color: #fffcfc7d;
  width: 70%;
  transform: translate(20%,0%);
`;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  left: -20px;
`;