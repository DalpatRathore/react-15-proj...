import React from "react";
import "./ModalSidebarApp.css";
import Home from "./Home";
import Modal from "./Modal";
import Sidebar from "./Sidebar";

const ModalSidebarApp = () => {
  return (
    <div className="modalSidebarApp">
      <Home></Home>
      <Modal></Modal>
      <Sidebar></Sidebar>
    </div>
  );
};

export default ModalSidebarApp;
