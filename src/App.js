import React from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen h-full w-full">
        <Outlet />
        <ToastContainer />
      </main>
      <Footer />
    </>
  );
};

export default App;
