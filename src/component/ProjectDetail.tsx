import React, { useState, useRef } from "react";
import { useParams } from "react-router-dom";
import useFetch from '../hook/useFetch.ts';
import { IProject } from './PersonalMain.tsx';
import Header from './Header.tsx';
import { useNavigate } from "react-router-dom";

export default function ProjectDetail() {

  const proj = useParams().proj;
  const projectNum : IProject[] = useFetch(`http://localhost:3003/project?id=${proj}`);
  
  const history = useNavigate();

  const [isModi, setIsModi] = useState(true);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [date, setDate] = useState('');

  // 입력한 값으로 제목 변경
  function changeTitle(e) {
    setTitle(e.target.value);
  }

  // 입력한 값으로 내용 변경
  function changeContent(e) {
    setContent(e.target.value);
  }

  // 수정하기 모드로 변경
  function changeModifyVersion() {
    setIsModi(!isModi);
    setTitle(projectNum[0].title);
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
      {isModi ? 
        <div>
          <div>
            <div>제목</div>
            {projectNum.map(p => (
              <div key={p.id}>{p.title}</div>
            ))}
            <div>오늘의 기분</div>
            {projectNum.map(p => (
              <div key={p.id}>{p.feeling}</div>
            ))}
            <div>내용</div>
            {projectNum.map(p => (
              <div key={p.id}>{p.content}</div>
            ))}
          </div>
          <div>작성일</div>
          {projectNum.map(p => (
              <div key={p.id}>{p.date}</div>
            ))}
          <button onClick={changeModifyVersion}>수정</button> 
          <button onClick={del}>삭제</button>
        </div>
        :
        <div>
          <div>
            <div>Title</div>
            <input type="text" value={title} onChange={changeTitle}></input>
            <div>Content</div>
            <input type="text" value={content} onChange={changeContent}></input>
          </div>
          <div>Date</div>
          <div>{date}</div> 
          <button onClick={saveModify}>저장</button> 
          <button onClick={del}>삭제</button>
        </div>
      }
    </>
  )
}