import { useContext } from "react";
import { Link } from "react-router-dom";

import { AppContext } from "../../../context/use-contex/app-context";
import "./header.css";

export default function Header() {
  const { isLogin,setIsLogin } = useContext(AppContext);

  return (
    <header className="header">
      <div>
        {isLogin ? (
          <span>هانا افشاری</span>
        ) : (
          <button className="login-button" type="button">
            نام کاربری
          </button>
        )}
      </div>

      <nav>
        <ul>
          <li>
            <Link to="/">خانه</Link>
          </li>

          <li>
            <Link to="/articles">مقاله‌ها</Link>
          </li>

          <li>
            <span onClick={()=>setIsLogin(false)}>خروج</span>
          </li>
        </ul>
      </nav>
    </header>
  );
}