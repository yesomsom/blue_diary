import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IProject } from './PersonalMain.tsx';
import FeelingImoticon from './FeelingImoticon.tsx';

export interface IProps {
  project: IProject;
}

export default function ProjectDetails({project:p}:IProps) {

  return (
    <Link to={`/project_detail/${p.id}`}>
      <ul>
        <li>{p.title}</li>
        <FeelingImoticon feel={p.feeling} />
        <li>{p.date}</li>
      </ul>
    </Link>
  )
}