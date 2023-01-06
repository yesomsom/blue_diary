import React from "react";
import bigSmiling from '../img/icon_big_smiling_96.png';
import smiling from '../img/icon_smiling_96.png';
import crying from '../img/icon_crying_96.png';
import frowning from '../img/icon_frowning_96.png';
import pensive from '../img/icon_pensive_96.png';
import styled from "styled-components";

export default function FeelingImoticon({feel:f}) {

  return (
    <>
      <div>
        {f == "bigSmiling" && <ImoticonImg src={bigSmiling}></ImoticonImg>}
        {f == "smiling" && <ImoticonImg src={smiling}></ImoticonImg>}
        {f == "crying" && <ImoticonImg src={crying}></ImoticonImg>}
        {f == "frowning" && <ImoticonImg src={frowning}></ImoticonImg>}
        {f == "pensive" && <ImoticonImg src={pensive}></ImoticonImg>}
      </div>
    </>
  )
}

const ImoticonImg = styled.img`
  width: 80px;
  height: 80px;
`;