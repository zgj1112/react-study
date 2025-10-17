import React from "react";
import { useNavigate } from "react-router-dom";
import "./BackToHome.css";

const BackToHome = () => {
  const navigate = useNavigate();

  return (
    <button className="back-button" onClick={() => navigate("/")}>
      返回首页
    </button>
  );
};

export default BackToHome; 