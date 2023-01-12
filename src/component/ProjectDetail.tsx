import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import useFetch from '../hook/useFetch.ts';
import { IProject } from './PersonalMain.tsx';
import Header from './Header.tsx';
import FeelingImoticon from './FeelingImoticon.tsx';
import ChooseImoticon from "./ChooseImoticon.tsx";
import oceanGirl from '../img/img_oceanWithGirl_1920.jpg';

export default function ProjectDetail() {

  const proj = useParams().proj;
  const projectNum : IProject[] = useFetch(`http://localhost:3003/project?id=${proj}`);
  
  const history = useNavigate();

  const [isModi, setIsModi] = useState(true);

  const [title, setTitle] = useState('');
  const [feeling, setFeeling] = useState('');
  const [content, setContent] = useState('');
  const [date, setDate] = useState('');
  const [chooseIcon, setChooseIcon] = useState('');


  // 입력한 값으로 제목 변경
  function changeTitle(e) {
    setTitle(e.target.value);
  }

  // 입력한 값으로 내용 변경
  function changeContent(e) {
    setContent(e.target.value);
  }

    // 입력한 값으로 feeling 변경
    function changeFeeling(e) {
      setFeeling(e.target.value);
      alert(feeling);
    }

  // 수정하기 모드로 변경
  function changeModifyVersion() {
    setIsModi(!isModi);
    setTitle(projectNum[0].title);
    setFeeling(projectNum[0].feeling);
    setContent(projectNum[0].content);
    setDate(projectNum[0].date);
  }

  // 수정한 것 저장하기
  function saveModify() {
    if(window.confirm('수정하시겠습니까?')) {
      fetch(`http://localhost:3003/project/${proj}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          feeling,
          content,
          date
        })
      }).then(res => {
        if(res.ok) {
          alert("수정 완료");
          setIsModi(!isModi);
          window.location.replace(`/project_detail/${proj}`); // 페이지를 새로고침
        }
      })
    }
  }

  // 글 삭제하기
  function del() {
    if(window.confirm('삭제하시겠습니까?')) {
      fetch(`http://localhost:3003/project/${proj}`,{
        method: 'DELETE',
      }).then(res => {
        if(res.ok) {
          window.confirm('삭제 완료');
          history('/personal_main');
        }
      });
    }
  }

  return (
    <>
      <Header/>
      <Layout>
        {isModi ? 
          <ProjectDetailWrapper>
            <div className="inner_line">
              <div>
                <div className="mb_10 noto_font_400">제목</div>
                {projectNum.map(p => (
                  <div className="noto_font_300" key={p.id}>{p.title}</div>
                ))}
                <div className="mt_30 mb_10 noto_font_400">오늘의 기분</div>
                {projectNum.map(p => (
                  <div className="noto_font_con" key={p.id}><FeelingImoticon feel={p.feeling} /></div>
                ))}            
                <div className="mt_30 mb_10 noto_font_400">내용</div>
                {projectNum.map(p => (
                  <div className="noto_font_300" key={p.id}>{p.content}</div>
                ))}
              </div>
            </div>
            <div className="text_align_center">
              <button className="modi_del_btn" onClick={changeModifyVersion}>수정</button> 
              <button className="modi_del_btn" onClick={del}>삭제</button>
            </div>
            {projectNum.map(p => (
                <div className="date_position date_right" key={p.id}>작성일 {p.date}</div>
              ))}
          </ProjectDetailWrapper>
          :
          <ProjectDetailWrapperModi>
            <div>
              <div className="mb_10">제목</div>
              <input className="title_input" type="text" value={title} onChange={changeTitle}></input>
              <div className="mb_10 mt_30">기분</div>
              <ChooseImoticon setChooseIcon={setChooseIcon}/>
              <input value={chooseIcon} onChange={changeFeeling}></input>
              <div className="mb_10 mt_30">내용</div>
              <textarea className="content_input" value={content} onChange={changeContent}></textarea>
            </div>
            <div className="mb_10 date_right">날짜: {date}</div> 
            <div className="text_align_center">
              <button className="create_btn" onClick={saveModify}>저장</button> 
              <button className="create_btn" onClick={del}>삭제</button>
            </div>
          </ProjectDetailWrapperModi>
        }
      </Layout>
    </>
  )
}

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${oceanGirl});
  background-size: cover;
  height: 150vh;
`;

const ProjectDetailWrapper = styled.div`
  border: 1px dashed #bbb;
  width: 500px;
  margin: 100px;
  background-color: #ffffffdb;
  text-align: left;
  padding: 40px 40px 15px 40px;
`;

const ProjectDetailWrapperModi = styled.div`
  border: 1px dashed #bbb;
  width: 500px;
  margin: 100px;
  background-color: #ffffffdb;
  text-align: left;
  padding: 40px;
`;