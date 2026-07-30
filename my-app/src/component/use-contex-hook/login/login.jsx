import { useContext, useState } from "react";
import "./login.css";
import { AppContext } from "../../../context/use-contex/app-context";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    console.log({
      username,
      password,
    });
  }
    const {setIsLogin} = useContext(AppContext)
  return (
    <div className="login-page">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="login-title">ورود به حساب کاربری</h2>

        <div className="login-field">
          <label htmlFor="username">نام کاربری</label>
          <input
            id="username"
            type="text"
            placeholder="نام کاربری خود را وارد کنید"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>

        <div className="login-field">
          <label htmlFor="password">رمز عبور</label>

          <input
            id="password"
            type="password"
            placeholder="رمز عبور خود را وارد کنید"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        <button onClick={()=>setIsLogin(true)} className="login-submit-button" type="submit">
          ورود
        </button>
      </form>
    </div>
  );
}