
import { useContext } from "react";
import Article from "../../../component/use-contex-hook/article/article";
import Layout from "../../../component/use-contex-hook/layout/layout";
import { AppContext } from "../../../context/use-contex/app-context";

export default function Articles() {
  const {isLogin} = useContext(AppContext)
  return (
    <Layout>
      {isLogin ? (
        <div>
          <h1>لیست مقالات</h1>

          <Article
            title="آموزش React"
            description="در این مقاله با مفاهیم اولیه React آشنا می‌شوید."
          />

          <Article
            title="آموزش State"
            description="در این مقاله مدیریت State را یاد می‌گیرید."
          />

          <Article
            title="آموزش React Router"
            description="در این مقاله با ساخت مسیرهای مختلف آشنا می‌شوید."
          />
        </div>
      ) : (
        <p>شما باید وارد شوید</p>
      )}
    </Layout>
  );
}