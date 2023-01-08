import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Header() {
  return (
    <HeaderWrap>
      <HeaderTitle>
        <Link to="/">BLUE</Link>
      </HeaderTitle>
      <MakeProject>
        <Link to="/project_create">+</Link>
      </MakeProject>
    </HeaderWrap>
  )
}

// npm install styled-components

const HeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #7f87961c;
  height: 45px;
`;

const HeaderTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  padding: 10px;
  position: relative;
  top: -2px;
  left: 10px;
`;

const MakeProject = styled.div`
  font-size: 45px;
  padding: 10px;
  position: relative;
  top: -25px;
  right: 10px;
`;