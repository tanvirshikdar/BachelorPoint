import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

// Use your computer's local IP for Expo Go on Android
const backendUrl = 'http://192.168.0.211:5000';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // { token, user: { ... } }
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load user from storage on mount
    const loadUser = async () => {
      try {
        const userData = await AsyncStorage.getItem('user');
        if (userData) setUser(JSON.parse(userData));
      } catch (e) {}
      setLoading(false);
    };
    loadUser();
  }, []);

  const login = async (email, password) => {
    console.log('AuthContext: login called', email);
    try {
      const res = await axios.post(`${backendUrl}/api/auth/login`, { email, password }, { timeout: 7000 });
      setUser(res.data);
      await AsyncStorage.setItem('user', JSON.stringify(res.data));
      console.log('AuthContext login success:', res.data);
      return { success: true, user: res.data.user, token: res.data.token };
    } catch (err) {
      console.log('AuthContext login error:', err?.response?.data || err.message);
      return { success: false, message: err.response?.data?.message || 'Login failed' };
    }
  };

  const register = async (form) => {
    try {
      const res = await axios.post(`${backendUrl}/api/auth/register`, form);
      setUser(res.data);
      await AsyncStorage.setItem('user', JSON.stringify(res.data));
      return { success: true };
    } catch (err) {
      return { success: false, message: err.response?.data?.message || 'Registration failed' };
    }
  };

  const logout = async () => {
    setUser(null);
    await AsyncStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
