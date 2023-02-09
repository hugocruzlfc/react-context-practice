import "./App.css";
import { UserContextProvider } from "./context/userContext";
import { Routes, Route } from "react-router-dom";
import UserList from "./components/UserList";
import UserDetails from "./components/UserDetails";
import UserForm from "./components/UserForm";

function App() {
  return (
    <UserContextProvider>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={<UserList />}
          />
          <Route
            path="/:userId"
            element={<UserDetails />}
          />
          <Route
            path="/add"
            element={<UserForm />}
          />
        </Routes>
      </div>
    </UserContextProvider>
  );
}

export default App;
