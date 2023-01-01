import React from "react";
import rightArrow from '../img/arrow_right_64.png';
import blueOcean from '../img/blue_ocean.jpg';
import { Link } from "react-router-dom";

export default function WelcomeMain(){

  return(
    <>
      <h2>BLUE</h2>
      <div>
        <h1>오늘 하루는 어땠나요?</h1>
        <Link to="/personal_main">
          오늘의 이야기 작성하기
          <img className="icon_right_arrow" src={ rightArrow } alt="go to write"/>
        </Link>
      </div>
      <div>
        <h2>새롭게 올라온 이야기</h2>
        <img className="img_blue_ocean" src={ blueOcean } alt=""/>
        <img className="img_blue_ocean" src={ blueOcean } alt=""/>
        <img className="img_blue_ocean" src={ blueOcean } alt=""/>
        <div>
          <Link to="/personal_main">
            새로운 스토리 올리기
            <img className="icon_right_arrow" src={ rightArrow } alt="go to write"/>
          </Link>
        </div>

      </div>
    </>
  )
}