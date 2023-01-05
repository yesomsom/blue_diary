import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IProject } from './PersonalMain.tsx';
import FeelingImoticon from './FeelingImoticon.tsx';
import styled from "styled-components";

export interface IProps {
  project: IProject;
}

export default function ProjectDetails({project:p}:IProps) {

  return (
    <Link to={`/project_detail/${p.id}`}>
      <ProjectWrapper>
        <div className="proj_title">{p.title}</div>
        <FeelingImoticon feel={p.feeling} />
        <div className="proj_date">{p.date}</div>
      </ProjectWrapper>
    </Link>
  )
}

const ProjectWrapper = styled.div`
  border: 1px dashed #ccc;
  width: 200px;
  height: 200px;
  margin:10px;
`;