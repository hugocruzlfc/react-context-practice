import React, { useContext } from "react";
import { UserContext } from "../context/userContext";
import { Link } from "react-router-dom";

export default function UserList() {
  const { users, loading } = useContext(UserContext);
  return (
    <div>
      <h2>UserList</h2>
      {!loading &&
        users.map((user) => (
          <div key={user.id}>
            <Link to={`/${user.id}`}>{user.name}</Link>
          </div>
        ))}
      <br />
      <Link to="/add">Add User</Link>
    </div>
  );
}
