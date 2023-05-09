import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

const User = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchParams({ name: name, age: age });
  };
  return (
    <div>
      {/*  <h1>{searchParams.get("id")}</h1>
      <h1>{searchParams.get("name")}</h1> */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="age"
          required
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <button type="submit">Find User</button>
      </form>
    </div>
  );
};

export default User;
