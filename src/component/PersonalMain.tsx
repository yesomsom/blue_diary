import React from "react";
import useFetch from '../hook/useFetch.ts';
import Header from './Header.tsx';
import ProjectDetails from "./ProjectDetails.tsx";
import styled from "styled-components";

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
      <PersonalProject>
        {projects.map(p => (
          <ProjectDetails project={p} key={p.id}/>
        ))}
      </PersonalProject>
    </>
  )
}

const PersonalProject = styled.div`
  width: 100%;
  margin: 80px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

