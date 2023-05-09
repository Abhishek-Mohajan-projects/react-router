import React, { useState } from "react";
import "./../App.css";
import { blogsData } from "./../data";
import { Link, useNavigate } from "react-router-dom";

const Blogs = () => {
  const [blogs, setBlogs] = useState(blogsData);

  const trunCateString = (str, num) => {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  const navigate = useNavigate();
  return (
    <div>
      <h1>Blogs Page</h1>
      <section>
        {blogs.map((blog) => {
          const { id, title, body } = blog;
          return (
            <article key={id}>
              <h1>{title}</h1>
              <p>{trunCateString(body, 100)}</p>
              <Link to={title} state={{ id, title, body }}>
                Learn More
              </Link>
            </article>
          );
        })}
      </section>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Go To Home Page
      </button>
    </div>
  );
};

export default Blogs;
