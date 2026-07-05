import Header from "../components/Header";
import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
      <Header />

      <div
        style={{
          display: "flex"
        }}
      >
        <SideBar />

        <main
    style={{
        flex:1
    }}
>
    <Outlet/>
</main>
      </div>
    </>
  );
}

export default MainLayout;
