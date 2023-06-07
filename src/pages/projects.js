// Font Update
import '@fontsource/open-sans/700.css'
import React from 'react';

// React Router
import {
  BrowserRouter,
  Routes, //replaces "Switch" used till v5
  Route,
} from "react-router-dom";


// Individual Pages
import CentParkPg from './projectinfo/centennialpark';
import EmailAssistPg from './projectinfo/emailAssist';
import GirlScoutsPg from './projectinfo/girlscouts';
import LandTrustPg from './projectinfo/landtrust';
import NashZeroPg from './projectinfo/nash0';
import AncientArtifactsPg from './projectinfo/ancientArtifacts';
import ProjectsMain from './projectinfo/projectmain';



const Projects = () => {
  return (
    <BrowserRouter>
      <Routes>
            <Route path="/" element={<ProjectsMain />} />
            <Route path="/centennialpark" element={<CentParkPg />} />
            <Route path="/emailAssist" element={<EmailAssistPg />} />
            <Route path="/girlscouts" element={<GirlScoutsPg />} />
            <Route path="/landtrusttn" element={<LandTrustPg />} />
            <Route path="/nash0" element={<NashZeroPg />} />
            <Route path="/ancientartifacts" element={<AncientArtifactsPg />} />
          </Routes>
    </BrowserRouter>
  );
};

export default Projects;