import React from "react";

const MainLayout = ({ children }) => {
  return (
    <>
      <div className="p-4 sm:px-10 sm:p-10 lg:px-24 lg:py-16 2xl:px-48 w-full min-h-screen ">{children}</div>
    </>
  );
};

export default MainLayout;
