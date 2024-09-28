import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import RealTimeUpdates from './utils/RealTimeUpdates';
import LearningResources from './utils/LearningResources';
import BottomNav from './components/BottomNav';
import ExpertConsultations from './components/ExpertConsultations';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col h-screen">
        <div className="flex flex-grow">
          <Sidebar />
          <div className="w-full">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/real-time-updates" element={<RealTimeUpdates />} />
              <Route path="/learning-resources" element={<LearningResources />} />
              <Route path="/expert-consultations" element={<ExpertConsultations />} />
            </Routes>
          </div>
        </div>
        <BottomNav />
      </div>
    </Router>
  );
};

export default App;
