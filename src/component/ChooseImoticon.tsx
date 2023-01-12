import React, { useState } from 'react';
import styled from "styled-components";
import bigSmiling from '../img/icon_big_smiling_96.png';
import smiling from '../img/icon_smiling_96.png';
import crying from '../img/icon_crying_96.png';
import frowning from '../img/icon_frowning_96.png';
import pensive from '../img/icon_pensive_96.png';

export default function ChooseImoticon(props) {

  const [chooseIcon, setChooseIcon] = useState('');

  function bigSmileFunc() {
    props.setChooseIcon('bigSmiling');
  }

  function smilingFunc() {
    props.setChooseIcon('smiling');
  }

  function cryingFunc() {
    props.setChooseIcon('crying');
  }

  function frowningFunc() {
    props.setChooseIcon('frowning');
  }

  function pensiveFunc() {
    props.setChooseIcon('pensive');
  }

  return (
    <>
      <div className="bt_all">
        <Button className={(chooseIcon == 'bigSmiling') ? 'btn_active' : ''} type="button" onClick={bigSmileFunc}><img className="btn_feeling" src={bigSmiling}/></Button>
        <Button className={(chooseIcon == 'smiling') ? 'btn_active' : ''} type="button" onClick={smilingFunc}><img className="btn_feeling" src={smiling}/></Button>
        <Button className={(chooseIcon == 'crying') ? 'btn_active' : ''} type="button" onClick={cryingFunc}><img className="btn_feeling" src={crying}/></Button>
        <Button className={(chooseIcon == 'frowning') ? 'btn_active' : ''} type="button" onClick={frowningFunc}><img className="btn_feeling" src={frowning}/></Button>
        <Button className={(chooseIcon == 'pensive') ? 'btn_active' : ''} type="button" onClick={pensiveFunc}><img className="btn_feeling" src={pensive}/></Button>
      </div>      
    </>
  )
}

const Button = styled.button`
  margin-right: 10px;
  background: none;
  border-radius: 10px;
  border: 1px solid #a1a1a1;
  cursor: pointer;

  &:hover {
    background: #c31e1efa;
    cursor: pointer;
    transform: translateY(-2px);
  }

  &.btn_active {
    background: #c31e1efa;
  }

`;