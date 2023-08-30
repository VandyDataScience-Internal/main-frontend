import React from 'react';
import Navbar from './sections/Navbar.js';
import Footer from './sections/Footer.js';
import Home from './pages/home.js';
import Projects from './pages/projects.js';
import Team from './pages/team.js';
import Blog from './pages/blog.js';
import Contact from './pages/contact.js';

import CentParkPg from './components/projectinfo/centennialpark.js';
import EmailAssistPg from './components/projectinfo/emailAssist.js';
import GirlScoutsPg from './components/projectinfo/girlscouts.js';
import LandTrustPg from './components/projectinfo/landtrust.js';
import NashZeroPg from './components/projectinfo/nash0.js';
import AncientArtifactsPg from './components/projectinfo/ancientArtifacts.js';
import ProjectsMain from './components/projectinfo/projectmain.js';
import BlogMain from './components/blogPages/blogMain.js';
import BlogPageOne from './components/blogPages/blogPageOne.js';
import BlogPageTwo from './components/blogPages/blogPageTwo.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './css/app.css';

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
        <Route path="/Projects/centennialpark" element={<CentParkPg />} />
        <Route path="/Projects/emailAssist" element={<EmailAssistPg />} />
        <Route path="/Projects/girlscouts" element={<GirlScoutsPg />} />
        <Route path="/Projects/landtrusttn" element={<LandTrustPg />} />
        <Route path="/Projects/nash0" element={<NashZeroPg />} />
        <Route
          path="/Projects/ancientartifacts"
          element={<AncientArtifactsPg />}
        />
        <Route path="/" element={<BlogMain />} />
        <Route path="/Blog/blogPageOne" element={<BlogPageOne />} />
        <Route path="/Blog/blogPageTwo" element={<BlogPageTwo />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
