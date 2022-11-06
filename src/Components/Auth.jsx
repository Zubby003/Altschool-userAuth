import { useState, createContext, useContext } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [values, setValues] = useState({ user: "", email: "" });

  const login = (values) => {
    setValues({ user: values.user, email: values.email });
  };

  const logout = (values) => {
    setValues({ user: null, email: null });
  };

  return (
    <AuthContext.Provider value={{ login, logout, values }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
export { AuthContext, AuthProvider };
