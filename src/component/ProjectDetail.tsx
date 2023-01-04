import React, { useState } from "react";
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

  function changeModifyVersion() {
    setIsModi(!isModi); // 수정버튼 클릭시 isModi = true
  }

  function saveModify() {
    if(window.confirm('수정하시겠습니까?')) {
      fetch(`http://localhost:3002/project/${proj}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({

        })
      }).then(res => {
        if(res.ok) {
          alert("수정 완료");
        }
      })
    }
  }

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
            <div>Title</div>
            {projectNum.map(p => (
              <div key={p.id}>{p.title}</div>
            ))}
            <div>Content</div>
            {projectNum.map(p => (
              <div key={p.id}>{p.content}</div>
            ))}
          </div>
          <div>Date</div>
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
            <input value={projectNum[0].title}></input>
            <div>Content</div>
            <input value={projectNum[0].content}></input>
          </div>
          <div>Date</div>
          <div>{projectNum[0].date}</div> 
          <button onClick={changeModifyVersion}>저장</button> 
          <button onClick={del}>삭제</button>
        </div>
      }
  
    </>
  )
}