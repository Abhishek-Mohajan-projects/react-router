import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
/* import { blogsData } from "../data"; */

const Blog = () => {
  const { title } = useParams();
  //   const [bodyData, setBodyData] = useState("");

  const location = useLocation();

  /*  useEffect(() => {
    const blogData = blogsData.filter((blog) => blog.title === title);
    setBodyData(blogData[0].body);
  }, []); */

  return (
    <div>
      <h1>{title}</h1>
      <p>{location.state.body.slice(0, 500)}</p>
      <p>{location.state.body.slice(501, 5800)}</p>
    </div>
  );
};

export default Blog;
