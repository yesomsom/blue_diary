import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
import bigSmiling from '../img/icon_big_smiling_96.png';
import smiling from '../img/icon_smiling_96.png';
import crying from '../img/icon_crying_96.png';
import frowning from '../img/icon_frowning_96.png';
import pensive from '../img/icon_pensive_96.png';
import imgWave from '../img/img_maldives_1920.jpg';
import Header from './Header.tsx';
import styled from "styled-components";

// 오늘 날짜 설정
// 형식 YYYY-MM-DD
function Today () {
  const now = new Date();
  const todayYear = now.getFullYear();
  const todayMonth = (now.getMonth() + 1) > 9 ? (now.getMonth() + 1 ) : '0' + (now.getMonth() + 1 );
  const todayDate = now.getDate() > 9 ? now.getDate() : '0' + now.getDate();

  return todayYear + "-" + todayMonth + "-" + todayDate;
}

// 새로운 프로젝트 생성 + data.json에 데이터 저장
export default function ProjectCreate() {
  const today = Today();

  const history = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const titleRef = useRef<HTMLInputElement>(null);  
  const contentRef = useRef<HTMLTextAreaElement>(null);
  const feelingRef = useRef<HTMLInputElement>(null);
  
  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    if(!isLoading && titleRef.current && contentRef.current && feelingRef.current) {
      setIsLoading(true);

      const title = titleRef.current.value;
      const content = contentRef.current.value;
      const feeling = feelingRef.current.value;
      const date = Today();

      fetch('http://localhost:3003/project', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          feeling,
          content,
          date,
        }),
      }).then(res => {
        if(res.ok) {
          alert("새로운 프로젝트가 완성되었습니다.");
          history('/personal_main');
          setIsLoading(false);
        }
      });
    }  
  }

  const [chooseIcon, setChooseIcon] = useState('');

  function bigSmileFunc() {
    setChooseIcon('bigSmiling');
  }

  function smilingFunc() {
    setChooseIcon('smiling');
  }

  function cryingFunc() {
    setChooseIcon('crying');
  }

  function frowningFunc() {
    setChooseIcon('frowning');
  }

  function pensiveFunc() {
    setChooseIcon('pensive');
  }
  
  return (
    <>
      <Header/>
      <Layout>
        <CreateProjectWrapper onSubmit={onSubmit}>
          <div>
            <div className="mb_10">제목</div>
            <input className="title_input" ref={titleRef} type="text" placeholder="title"></input>
          </div>

          <div className="mt_30">
            <div className="mb_10">오늘의 기분</div>
            <div className="bt_all">
              <Button className={(chooseIcon == 'bigSmiling') ? 'btn_active' : ''} type="button" onClick={bigSmileFunc}><img className="btn_feeling" src={bigSmiling}/></Button>
              <Button className={(chooseIcon == 'smiling') ? 'btn_active' : ''} type="button" onClick={smilingFunc}><img className="btn_feeling" src={smiling}/></Button>
              <Button className={(chooseIcon == 'crying') ? 'btn_active' : ''} type="button" onClick={cryingFunc}><img className="btn_feeling" src={crying}/></Button>
              <Button className={(chooseIcon == 'frowning') ? 'btn_active' : ''} type="button" onClick={frowningFunc}><img className="btn_feeling" src={frowning}/></Button>
              <Button className={(chooseIcon == 'pensive') ? 'btn_active' : ''} type="button" onClick={pensiveFunc}><img className="btn_feeling" src={pensive}/></Button>
            </div>
            <input ref={feelingRef} type="hidden" value={chooseIcon}></input>
          </div>

          <div className="mt_30">
            <div className="mb_10">내용</div>
            <textarea className="content_input" ref={contentRef} placeholder="content"></textarea>
          </div>
          <div className="mb_10 date_right">
            작성일 : {today}
          </div>
          <div className="text_align_center">
            <button className="create_btn">저장</button>
            <Link to="/personal_main"><button className="create_btn">취소</button></Link>
          </div>
        </CreateProjectWrapper>
      </Layout>
    </>
  )
}

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${imgWave});
  background-size: cover;
  height: 150vh;
`;

const CreateProjectWrapper = styled.form`
  border: 1px dashed #bbb;
  width: 500px;
  margin: 100px;
  background-color: #dce5e8de;
  text-align: left;
  padding: 40px;
`;

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

