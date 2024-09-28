import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import RealTimeUpdates from './utils/RealTimeUpdates';
import LearningResources from './utils/LearningResources';
import ExpertConsultations from './utils/ExpertConsultations';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col h-screen">
        <div className="flex flex-grow">
          {/* Sidebar will be hidden on smaller screens and shown on larger ones */}
          <div className="hidden lg:block lg:w-1/5">
            <Sidebar />
          </div>
          <div className="w-full lg:w-4/5">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/real-time-updates" element={<RealTimeUpdates />} />
              <Route path="/learning-resources" element={<LearningResources />} />
              <Route path="/expert-consultations" element={<ExpertConsultations />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
