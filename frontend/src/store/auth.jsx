import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem("token") || null);
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem("user")) || null);
  
  // Store token and user in localStorage
  const storeTokenInLs = (serverToken) => {
    setToken(serverToken);
    localStorage.setItem("token", serverToken);
  };

  let isLoggedIn = !!token;

  const LogoutUser = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  const userAuthentication = async () => {
    try {
      if (!token) return;
      
      console.log("Fetching user data with token:", token);

      const response = await fetch("http://localhost:3000/user", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log("User data received:", data.userData);
        setUser(data.userData);
        localStorage.setItem("user", JSON.stringify(data.userData));
      } 
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  // Fetch user data when token changes
  useEffect(() => {
    if (token) {
      userAuthentication();
    }
  }, [token]);

  return (
    <AuthContext.Provider value={{ isLoggedIn, token, storeTokenInLs, LogoutUser, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return authContextValue;
};
