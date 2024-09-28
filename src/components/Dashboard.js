import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaLeaf, FaComments, FaCalendarCheck, FaBookOpen } from 'react-icons/fa';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleRealTimeUpdatesClick = () => {
    navigate('/real-time-updates');
  };

  const handleExpertConsultationsClick = () => {
    navigate('/expert-consultations');
  };

  const handleNotificationsClick = () => {
    navigate('/notifications');
  };

  const handleLearningResourcesClick = () => {
    navigate('/learning-resources');
  };

  return (
    <div className="p-4 sm:p-8 bg-gradient-to-r from-green-100 to-green-200 min-h-screen">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-green-800">
        Welcome to Your Dashboard
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        <div
          className="relative p-6 bg-white shadow-xl rounded-lg cursor-pointer flex items-center hover:shadow-2xl transition-shadow hover:scale-105 transform duration-300"
          onClick={handleRealTimeUpdatesClick}
        >
          <FaLeaf className="text-4xl text-green-600 mr-4" />
          <div>
            <h2 className="text-xl font-semibold text-green-800">Real-time Updates</h2>
            <p className="text-gray-600 text-sm">
              Get the latest agricultural alerts, weather conditions, and market prices.
            </p>
          </div>
          <div className="absolute top-0 right-0 h-full w-full rounded-lg bg-gradient-to-r from-green-400 to-green-600 opacity-10"></div>
        </div>

        <div
          className="relative p-6 bg-white shadow-xl rounded-lg cursor-pointer flex items-center hover:shadow-2xl transition-shadow hover:scale-105 transform duration-300"
          onClick={handleExpertConsultationsClick}
        >
          <FaComments className="text-4xl text-blue-600 mr-4" />
          <div>
            <h2 className="text-xl font-semibold text-green-800">Expert Consultations</h2>
            <p className="text-gray-600 text-sm">
              Consult with experts via chat, voice, or video.
            </p>
          </div>
          <div className="absolute top-0 right-0 h-full w-full rounded-lg bg-gradient-to-r from-blue-400 to-blue-600 opacity-10"></div>
        </div>

        <div
          className="relative p-6 bg-white shadow-xl rounded-lg cursor-pointer flex items-center hover:shadow-2xl transition-shadow hover:scale-105 transform duration-300"
          onClick={handleNotificationsClick}
        >
          <FaCalendarCheck className="text-4xl text-yellow-600 mr-4" />
          <div>
            <h2 className="text-xl font-semibold text-green-800">Notifications & Calendar</h2>
            <p className="text-gray-600 text-sm">
              Track important dates and add reminders to your calendar.
            </p>
          </div>
          <div className="absolute top-0 right-0 h-full w-full rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-600 opacity-10"></div>
        </div>

        <div
          className="relative p-6 bg-white shadow-xl rounded-lg cursor-pointer flex items-center hover:shadow-2xl transition-shadow hover:scale-105 transform duration-300"
          onClick={handleLearningResourcesClick}
        >
          <FaBookOpen className="text-4xl text-purple-600 mr-4" />
          <div>
            <h2 className="text-xl font-semibold text-green-800">Learning Resources</h2>
            <p className="text-gray-600 text-sm">
              Access tutorials on crops, soil, and pest control.
            </p>
          </div>
          <div className="absolute top-0 right-0 h-full w-full rounded-lg bg-gradient-to-r from-purple-400 to-purple-600 opacity-10"></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
