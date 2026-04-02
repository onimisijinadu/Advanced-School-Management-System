import {
  createContext,
  useContext,
  useState,
} from 'react';

import toast, { Toaster } from 'react-hot-toast';

// authentication context starts
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
// authentication context ends..

// my toaster context
export const ToasterContext = createContext();

export const useToast = () => useContext(ToasterContext);

export const ToastProvider = ({ children }) => {
  const showToast = (message, icon) => {
    toast(message, {
      icon: icon,
      position: "top-right",
      duration: 3000,
      style: {
        background: "white",
        color: "black",
        fontWeight: 600,
        borderRadius: "9px",
        fontSize: "14px",
      },
    });
  };

  return (
    <ToasterContext.Provider value={{ showToast }}>
      {children}
      <Toaster />
    </ToasterContext.Provider>
  );
};

//toaster context ends
