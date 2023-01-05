import React from "react";
import iconPlus from '../img/icon_plus_75.png';
import { Link } from "react-router-dom";
import styled from "styled-components";
import blueOcean from '../img/blue_ocean.jpg';

export default function Header() {
  return (
    <HeaderWrap>
      <HeaderTitle>
        <Link to="/">BLUE</Link>
      </HeaderTitle>
      <MakeProject>
        <Link to="/project_create">
        <img className="icon_plus" src={ iconPlus } alt="create new project"/>
        </Link>
      </MakeProject>
    </HeaderWrap>
  )
}

// npm install styled-components

const HeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #7f87961c;
`;

const HeaderTitle = styled.div`
  font-size: 30px;
  padding: 10px;
  position: relative;
  top: 5px;
  left: 10px;
`;

const MakeProject = styled.div`
  padding: 10px;
`;