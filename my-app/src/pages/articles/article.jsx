
import Article from "../../component/article/article";
import Layout from "../../component/layout/layout";

export default function Articles() {
  return (
    <Layout>
      {false ? (
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