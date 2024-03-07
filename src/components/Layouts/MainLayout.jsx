import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import SideBar from "../SideBar";

const MainLayout = ({ children }) => {
  return (
    <>
      <div>
        <Header />
        <div className="p-4 w-full min-h-screen flex flex-col md:flex-row gap-8 ">
          {/* <div className="w-full md:w-72">
            <SideBar />
          </div> */}
          {children}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
