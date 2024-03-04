import React from "react";
import Header from "../Header";
import Footer from "../Footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <div>
        <Header />
        <div className="p-4 sm:px-10 sm:p-10 lg:px-24 lg:py-16 2xl:px-48 w-full min-h-screen ">
          {children}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
