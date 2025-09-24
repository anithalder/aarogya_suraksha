/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

// The context is created and will be used to provide and consume auth data.
const AuthContext = createContext(null);

// The provider component that will wrap your application or parts of it.
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const backendUrl = import.meta.env.BACKEND_URL;

  /**
   * Logs in a user by checking their credentials against the json-server.
   * @param {string} phone - The user's phone number.
   * @param {string} password - The user's password.
   * @returns {boolean} - True if login is successful, false otherwise.
   */
  const login = async (phone, password) => {
    try {
      // Fetch user from the json-server based on phone and password
      const { data } = await axios.get(`${backendUrl}/users?phone=${phone}&password=${password}`);

      if (data.length > 0) {
        const foundUser = data[0];
        setUser(foundUser); // Set the user state
        toast.success("Login successful!");
        return true;
      } else {
        toast.error("Invalid phone number or password.");
        return false;
      }
    } catch (error) {
      toast.error("Failed to connect to the server.");
      return false;
    }
  };

  /**
   * Logs the current user out by clearing the user state.
   */
  const logout = () => {
    setUser(null);
    toast.info("You have been logged out.");
  };

  return (
    // Provide the user state and login/logout functions to children components
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

/**
 * Custom hook to easily access the authentication context.
 * Note the correction: it uses `useContext(AuthContext)` now.
 */
export const useAuth = () => useContext(AuthContext);
