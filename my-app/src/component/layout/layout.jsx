
import Header from "../header/header";
import "./layout.css";
export default function Layout({ children }) {
  return (
    <div className="layout">
      <Header />

      <main className="layout-main">
        {children}
      </main>
    </div>
  );
}