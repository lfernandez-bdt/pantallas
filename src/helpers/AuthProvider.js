'use client'
import React, { useState, useEffect, useContext, createContext } from "react";
import { useRouter } from "next/navigation";

const authContext = createContext();

export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const router = useRouter();

  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);


  const login = (rut, password) => {
    localStorage.setItem(
      "state",
      JSON.stringify({ rut: rut, password: password })
    );
    setUser({ rut: rut, password: password });
    return { rut: rut, password: password };
  };

  const updateToken = (token) => {
    localStorage.setItem(
      "token",
      JSON.stringify({ token: token })
    );
    setToken({ token: token });
    return { token: token };
  };

  const setUserInfo = () => {
    const lsToken = localStorage.getItem("token");
    if(lsToken) {
      var base64Url = lsToken.split('.')[1];
      var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));
      localStorage.setItem(
        "userInfo",
        jsonPayload
      )
      return jsonPayload;
    }
  }

  const register = (rut, password) => { };

  const logout = () => {
    localStorage.removeItem("state");
    setUser(false);
    localStorage.removeItem("token");
    setToken(false);
    return true;
  };

  useEffect(() => {
    const unsubscribe = () => {
      console.log("unsuscribe")
      const storage = localStorage.getItem("state");
      if (storage !== null) {
        setUser(JSON.parse(storage));
      } else {
        setUser(false);
      }
      const storageToken = localStorage.getItem("token");
      if (storageToken !== null) {
        setToken(JSON.parse(storageToken));
      } else {
        setToken(false);
      }
    };
    return () => unsubscribe();
  }, []);

  return {
    user,
    token,
    login,
    register,
    logout,
    router,
    updateToken,
    setUserInfo
  };
}
