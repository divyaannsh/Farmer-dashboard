import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import RealTimeUpdates from './utils/RealTimeUpdates';
import LearningResources from './utils/LearningResources';
import ExpertConsultations from './utils/ExpertConsultations';
import NotificationsCalendar from './components/NotificationsCalendar';  // Import the new component

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
              <Route path="/notifications" element={<NotificationsCalendar />} /> {/* Add this route */}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
