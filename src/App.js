import React from 'react';
import Navbar from './sections/Navbar.js';
import Footer from './sections/Footer.js';
import Home from './pages/home.js';
import Projects from './pages/projects.js';
import Team from './pages/team.js';
import Blog from './pages/blog.js';
import Contact from './pages/contact.js';

import CentParkPg from './assets/projectinfo/centennialpark';
import EmailAssistPg from './assets/projectinfo/emailAssist';
import GirlScoutsPg from './assets/projectinfo/girlscouts';
import LandTrustPg from './assets/projectinfo/landtrust';
import NashZeroPg from './assets/projectinfo/nash0';
import AncientArtifactsPg from './assets/projectinfo/ancientArtifacts';
import ProjectsMain from './assets/projectinfo/projectmain';
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
        <Route path="/" element={<ProjectsMain />} />
        <Route path="/centennialpark" element={<CentParkPg />} />
        <Route path="/emailAssist" element={<EmailAssistPg />} />
        <Route path="/girlscouts" element={<GirlScoutsPg />} />
        <Route path="/landtrusttn" element={<LandTrustPg />} />
        <Route path="/nash0" element={<NashZeroPg />} />
        <Route path="/ancientartifacts" element={<AncientArtifactsPg />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
