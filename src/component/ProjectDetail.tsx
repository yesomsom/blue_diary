import React from "react";
import { useParams } from "react-router-dom";
import useFetch from '../hook/useFetch.ts';
import { IProject } from './PersonalMain.tsx';
import Header from './Header.tsx';

export default function ProjectDetail() {

  const proj = useParams().proj;
  const projectNum : IProject[] = useFetch(`http://localhost:3003/project?id=${proj}`);

  function del() {
    if(window.confirm('삭제하시겠습니까?')) {
      fetch(`http://localhost:3003/project?id=${proj}`,{
        method: 'DELETE',
      }).then(res => {
        if(res.ok) {
          window.confirm('삭제 완료');
        }
      });
    }
  }

  return (
    <>
      <Header/>
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
      <button>수정</button> 
      <button onClick={del}>삭제</button>  
    </>
  )
}