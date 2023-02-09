import { useEffect, useState, createContext } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  return (
    <UserContext.Provider value={{ users, setUsers, loading }}>
      {children}
    </UserContext.Provider>
  );
};
