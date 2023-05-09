import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Error from "./components/Error";
import NavBar from "./NavBar";
import Blogs from "./components/Blogs";
import Blog from "./components/Blog";
import User from "./components/User";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/blogs" element={<Blogs />}></Route>
          <Route path="/blogs/:title" element={<Blog />}></Route>
          <Route path="/user" element={<User />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
