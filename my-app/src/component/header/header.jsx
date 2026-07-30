import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {AppContext} from "../../App";
import "./header.css";

export default function Header() {
  const {} = useContext(AppContext)
  return (
    <header className="header">
      <div> {false ? (<span>هانا افشاری</span> ) : ( <button className="login-button" type="button">نام کاربری</button> )} </div>

      <nav>
        <ul>
          <li>
            <Link to="/">خانه</Link>
          </li>

          <li>
            <Link to="/articles">مقاله‌ها</Link>
          </li>

          <li>
            <span>خروج</span>
          </li>

        </ul>
      </nav>
    </header>
  );
}