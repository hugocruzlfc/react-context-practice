import React, { useContext, useMemo } from "react";
import { UserContext } from "../context/userContext";
import { useParams } from "react-router-dom";

export default function UserDetails() {
  const { userId } = useParams();
  const { users } = useContext(UserContext);

  const currentUser = useMemo(
    () => users.find((user) => user.id.toString() === userId),
    [userId, users]
  );

  //   console.log(users);
  //   console.log(currentUser);
  //   console.log(userId);

  return (
    <>
      <div>UserDetails</div>
      <h3>{currentUser?.name}</h3>
      <h3>{currentUser?.email}</h3>
      <h3>{currentUser?.phone}</h3>
    </>
  );
}
