
import Layout from "../../component/layout/layout";
import Login from "../../component/login/login";

export default function Home() {
  return (
    <Layout>
      <div>
        {false ? <div>شما وارد شدید</div> : <Login />}
      </div>
    </Layout>
  );
}