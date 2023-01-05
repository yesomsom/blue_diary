import React from "react";
import { Link } from "react-router-dom";
import useFetch from '../hook/useFetch.ts';
import Header from './Header.tsx';
import ProjectDetails from "./ProjectDetails.tsx";

export interface IProject {
  id: number;
  title: string;
  feeling: string;
  content: string;
  date: string;
}

export default function PersonalMain() {
  const projects: IProject[] = useFetch("http://localhost:3003/project");
  return (
    <>
      <Header/>
      <div>
        {projects.map(p => (
          <ProjectDetails project={p} key={p.id}/>
        ))}
      </div>
    </>
  )
}