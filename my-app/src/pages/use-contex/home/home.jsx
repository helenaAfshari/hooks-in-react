
import { useContext } from "react";
import Layout from "../../../component/use-contex-hook/layout/layout";
import Login from "../../../component/use-contex-hook/login/login";
import { AppContext } from "../../../context/use-contex/app-context";

export default function Home() {
  const {isLogin} = useContext(AppContext)
  return (
    <Layout>
      <div>
        {isLogin ? <div>شما وارد شدید</div> : <Login />}
      </div>
    </Layout>
  );
}