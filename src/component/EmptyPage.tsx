import { Link } from "react-router-dom";
import React from "react";
import rightArrow from '../img/arrow_right_64.png';

export default function EmptyPage() {
  return (
    <>
      <h3>잘못된 접근입니다.</h3>
      <Link to="/">
        돌아가기
        <img className="icon_right_arrow" src={ rightArrow } alt="go to write"/>
      </Link>
    </>
  )
}