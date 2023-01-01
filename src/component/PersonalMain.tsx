import React from "react";
import { Link } from "react-router-dom";
import useFetch from '../hook/useFetch.ts';
import Header from './Header.tsx';

export interface IProps {
  project: IProject;
}

export interface IProject {
  id: number;
  title: string;
  content: string;
  date: Date;
}

export default function PersonalMain() {
  const projects: IProject[] = useFetch("http://localhost:3003/project");
  return (
    <>
      <Header/>
      <ul>
        {projects.map(p => (
          <li key={p.id}>
            <Link to={`/project_detail/${p.id}`}>
              <div></div>
              <div>{p.title}</div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}