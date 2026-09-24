"use client";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastProvider = () => {
  return (
    <ToastContainer
      position="top-center"
      autoClose={2000}
      theme="dark"
    />
  );
};

export default ToastProvider;