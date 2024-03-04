import React from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <main className="min-h-screen h-full w-full">
        <Outlet />
        <ToastContainer />
      </main>
    </>
  );
};

export default App;
