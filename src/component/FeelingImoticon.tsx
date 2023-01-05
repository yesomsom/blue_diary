import React from "react";
import bigSmiling from '../img/icon_big_smiling_96.png';
import smiling from '../img/icon_smiling_96.png';
import crying from '../img/icon_crying_96.png';
import frowning from '../img/icon_frowning_96.png';
import pensive from '../img/icon_pensive_96.png';

export default function FeelingImoticon({feel:f}) {

  return (
    <>
      <div>
        {f == "bigSmiling" && <img src={bigSmiling}></img>}
        {f == "smiling" && <img src={smiling}></img>}
        {f == "crying" && <img src={crying}></img>}
        {f == "frowning" && <img src={frowning}></img>}
        {f == "pensive" && <img src={pensive}></img>}
      </div>
    </>
  )
}