import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [showHeader, setShowHeader] = useState(true); 

  const navigate = useNavigate();

  const login = (data) => {
    setUser(data);
    navigate("/favfilms");
  };

  const logout = () => {
    setUser(null);
    navigate("/");
  };

  return (
    <UserContext.Provider value={{ user, login, logout, showHeader, setShowHeader }}>
      {children}
    </UserContext.Provider>
  );
};