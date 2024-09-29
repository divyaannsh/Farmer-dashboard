import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import RealTimeUpdates from './utils/RealTimeUpdates';
import LearningResources from './utils/LearningResources';
import ExpertConsultations from './utils/ExpertConsultations';
import NotificationsCalendar from './components/NotificationsCalendar';
import CommunityForum from './utils/CommunityForum' // Import the CommunityForum component
import MobileAccess from './utils/MobileAccess';

const App = () => {
  return (
    <Router>
      <div className="flex h-screen">
        {/* Sidebar */}
        <Sidebar />
        
        {/* Main content */}
        <div className="flex-grow bg-gray-100 p-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/real-time-updates" element={<RealTimeUpdates />} />
            <Route path="/learning-resources" element={<LearningResources />} />
            <Route path="/expert-consultations" element={<ExpertConsultations />} />
            <Route path="/notifications" element={<NotificationsCalendar />} />
            <Route path="/community-forum" element={<CommunityForum />} /> {/* Add Community Forum Route */}
            <Route path="/mobile-access" element={<MobileAccess />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
