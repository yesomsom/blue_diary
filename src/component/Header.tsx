import React from "react";
import iconPlus from '../img/icon_plus_75.png';
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div>
        <h1>BLUE</h1>
      </div>
      <Link to="/project_create">
      <img className="icon_plus" src={ iconPlus } alt="create new project"/>
      </Link>
    </>
  )
}