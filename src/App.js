import React, { useEffect, useState } from 'react';
import Navbar from './nav/menuBar.js';
import Home from './pages/home.js';
import Projects from './pages/projects.js';
import Team from './pages/team.js';
import Blog from './pages/blog.js';
import Contact from './pages/contact.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
