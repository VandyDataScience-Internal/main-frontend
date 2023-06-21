// Font Update
import '@fontsource/open-sans/700.css';
import React from 'react';

// React Router
import {
  Routes, //replaces "Switch" used till v5
  Route,
} from 'react-router-dom';

// Individual Pages
import CentParkPg from '../components/projectinfo/centennialpark';
import EmailAssistPg from '../components/projectinfo/emailAssist';
import GirlScoutsPg from '../components/projectinfo/girlscouts';
import LandTrustPg from '../components/projectinfo/landtrust';
import NashZeroPg from '../components/projectinfo/nash0';
import AncientArtifactsPg from '../components/projectinfo/ancientArtifacts';
import ProjectsMain from '../components/projectinfo/projectmain';
import { Box } from '@chakra-ui/react';

const Projects = () => {
  return (
    <Box style={styles.page}>
      <Routes>
        <Route path="/" element={<ProjectsMain />} />
        <Route path="/centennialpark" element={<CentParkPg />} />
        <Route path="/emailAssist" element={<EmailAssistPg />} />
        <Route path="/girlscouts" element={<GirlScoutsPg />} />
        <Route path="/landtrusttn" element={<LandTrustPg />} />
        <Route path="/nash0" element={<NashZeroPg />} />
        <Route path="/ancientartifacts" element={<AncientArtifactsPg />} />
      </Routes>
    </Box>
  );
};

export default Projects;

let styles = {
  page: {
    marginTop: '130px',
  },
};
