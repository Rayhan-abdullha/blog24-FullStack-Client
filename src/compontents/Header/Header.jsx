import React from "react";
import intro from '../../imgaes/intro.jpg'
import "./header.css";

export default function Header() {
  return (
    <div className="container header">
        <div className="introImg">
        <h1 className="headerTitleSm text-center my-5">Write Your Blog</h1>
          <img
            src={intro}
            alt="notfound"
          />
        </div>
    </div>
  );
}
