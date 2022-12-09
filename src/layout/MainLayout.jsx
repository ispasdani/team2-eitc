import { Navbar } from "../components/Navbar/Navbar";

export const MainLayout = (props) => {
  return (
    <div className="main-layout">
      <Navbar />
      <div className="layout-content">{props.children}</div>
    </div>
  );
};
