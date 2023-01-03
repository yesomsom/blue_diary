import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";

function Today () {
  const now = new Date();
  const todayYear = now.getFullYear();
  const todayMonth = (now.getMonth() + 1) > 9 ? (now.getMonth() + 1 ) : '0' + (now.getMonth() + 1 );
  const todayDate = now.getDate() > 9 ? now.getDate() : '0' + now.getDate();

  return todayYear + "-" + todayMonth + "-" + todayDate;
}

export default function ProjectCreate() {
  const today = Today();

  const history = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const titleRef = useRef<HTMLInputElement>(null);  
  const contentRef = useRef<HTMLInputElement>(null);
  
  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert("onSubmit");

    if(!isLoading && titleRef.current && contentRef.current) {
      setIsLoading(true);

      const title = titleRef.current.value;
      const content = contentRef.current.value;
      const date = Today();

      fetch('http://localhost:3003/project', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
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

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>Title</label>
        <input ref={titleRef} type="text" placeholder="title"></input>
      </div>
      <div>
        <label>Content</label>
        <input ref={contentRef} type="text" placeholder="content"></input>
      </div>
      <div>
        <label>Date</label>
        <span>{today}</span>
      </div>
      <div>
        <button>저장</button>
        <Link to="/personal_main">취소</Link>       
      </div>
    </form>
  )
}