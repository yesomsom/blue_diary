import React, { useState } from "react";
import { Link } from "react-router-dom";
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

  const [isLoading, setIsLoading] = useState(false);

  const titleRef = useRef<HTMLInputElement>(null);  
  const contentRef = useRef<HTMLInputElement>(null);
  
  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    if(!isLoading && titleRef.current && contentRef.current) {
      setIsLoading(true);

      
    }



    
  }

  return (
    <form>
      <div onSubmit={onSubmit}>
        <label>Title</label>
        <input ref="{titleRef}" type="text" placeholder="title"></input>
      </div>
      <div>
        <label>Content</label>
        <input ref="{contentRef}" type="text" placeholder="content"></input>
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