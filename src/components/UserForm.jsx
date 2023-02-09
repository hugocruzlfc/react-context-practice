import React, { useContext, useState } from "react";
import { UserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";

export default function UserForm() {
  const { users, setUsers } = useContext(UserContext);
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      id: users.length + 1,
      ...user,
    };
    setUsers([...users, newUser]);
    navigate("/");
  };

  return (
    <>
      <div>Add New User</div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="phone"
          onChange={handleChange}
        />
        <button type="submit">Add User</button>
      </form>
    </>
  );
}
