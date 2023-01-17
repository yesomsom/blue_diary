import React from "react";
import useFetch from '../hook/useFetch.ts';
import Header from './Header.tsx';
import ProjectDetails from "./ProjectDetails.tsx";
import styled from "styled-components";
import Page from "./Page";
import { useState } from "react";

export interface IProject {
  id: number;
  title: string;
  feeling: string;
  content: string;
  date: string;
}

export default function PersonalMain() {

  const projects: IProject[] = useFetch("http://localhost:3003/project");

  const [limit, setLimit] = useState(15);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  return (
    <>
      <Header/>
      <PersonalProject>
        {projects.slice(offset, offset+limit).map(p => (
          <ProjectDetails project={p} key={p.id}/>
        ))}
      </PersonalProject>
      <Layout>
      <Page 
            total = {projects.length}
            limit = {limit}
            page = {page}
            setPage = {setPage} />
      </Layout>
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

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
`;

