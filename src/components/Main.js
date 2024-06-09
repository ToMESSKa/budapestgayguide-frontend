import Header from "./Header";
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { getUserInfo } from "../api/GetUserInfo";

function Main(isLogin) {
  const [data, setData] = useState([]);

  // const url ="https://budapestgayguide-backend.onrender.com"
  const url ="http://localhost:8080"


  const navigate = useNavigate();
  const [info, setInfo] = useState({
    email: '',
    firstName: '',
    lastName: '',
  });

  // useEffect(() => {
  //   if (!isLogin) navigate('/');

  //   const initUserinfo = async () => {
  //     const newinfo = await getUserInfo();
  //     setInfo(newinfo);
  //   };
  //   initUserinfo();
  // }, [isLogin]);

  return (
    <div className="Main">
      <Header url ={url}></Header>
    </div>
  );
}

export default Main;
