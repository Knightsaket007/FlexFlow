import './App.css';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import Home from './pages/Home';
import Playground from './pages/Playground';
import Profile from './pages/Profile';
import Market from './pages/Market';
import Documentation from './pages/Documentation';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import About from './pages/About';
function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoggedIn = async () => {
      try {
        const cookies = new Cookies();
        const userCookie = cookies.get('user');
        if (userCookie) {
          const res = await axios.post('https://flexflow-server.onrender.com/auth/check-auth', { userCookie });
          if (res.data[0] === 'success') {
            setLoggedIn(true);
          }
        }
      } catch (error) {
        setLoggedIn(false);
      }
    };

    checkLoggedIn();
  }, []);

  return (
    <BrowserRouter>
      <AppRoutes loggedIn={loggedIn} />
    </BrowserRouter>
  );
}

function AppRoutes({ loggedIn }) {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/' || location.pathname === '/profile' || location.pathname === '/market'|| location.pathname === '/doc'|| location.pathname === '/about') {
      const script = document.createElement('script');
      script.src = `${process.env.PUBLIC_URL}/js/bootstrap.js`;
      script.async = true;
      document.body.appendChild(script);

      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = `${process.env.PUBLIC_URL}/css/bootstrap.css`;
      document.head.appendChild(link);

      return () => {
        document.body.removeChild(script);
        document.head.removeChild(link);
      };
    }
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/playground" element={<Playground />} />
      <Route path="/market" element={<Market />} />
      <Route path="/doc" element={<Documentation />} />
      <Route path="/about" element={<About />} />

      {loggedIn ? (
          <Route path="/profile" element={<Profile />} />
        ) : (
          <Route path="/profile" element={<Navigate to="/"  />} />
        )}
    </Routes>
  );
}

export default App;
