import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyles } from "../components/globalStyles/GlobalStyles";
import Navbar from "../components/nav/Navbar";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import About from "../pages/about/About";

import PrivateRouter from "./PrivateRouter";
import Detail from "../pages/detail/Detail";
import { LoginContext } from "../components/context/LoginContext";

const AppRouter = () => {
  const [user, setUser] = useState("");
  return (
    <LoginContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <GlobalStyles />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="about" element={<PrivateRouter />}>
            <Route path="" element={<About />} />
          </Route>
          <Route path="detail" element={<PrivateRouter />}>
            <Route path="" element={<Detail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LoginContext.Provider>
  );
};

export default AppRouter;
