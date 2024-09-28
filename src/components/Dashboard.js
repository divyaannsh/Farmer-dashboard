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
    <div className="p-8 bg-gray-100">
      <h1 className="text-2xl font-bold mb-6 text-green-700">Welcome to Your Dashboard</h1>
      <div className="grid grid-cols-2 gap-8">
        <div
          className="p-6 bg-white shadow-lg rounded-lg cursor-pointer flex items-center hover:shadow-xl transition-shadow"
          onClick={handleRealTimeUpdatesClick}
        >
          <FaLeaf className="text-3xl text-green-600 mr-4" />
          <div>
            <h2 className="text-xl font-semibold">Real-time Updates</h2>
            <p className="text-gray-600">
              Get the latest agricultural alerts, weather conditions, and market prices.
            </p>
          </div>
        </div>

        <div
          className="p-6 bg-white shadow-lg rounded-lg cursor-pointer flex items-center hover:shadow-xl transition-shadow"
          onClick={handleExpertConsultationsClick}
        >
          <FaComments className="text-3xl text-green-600 mr-4" />
          <div>
            <h2 className="text-xl font-semibold">Expert Consultations</h2>
            <p className="text-gray-600">
              Consult with experts via chat, voice, or video.
            </p>
          </div>
        </div>

        <div
          className="p-6 bg-white shadow-lg rounded-lg cursor-pointer flex items-center hover:shadow-xl transition-shadow"
          onClick={handleNotificationsClick}
        >
          <FaCalendarCheck className="text-3xl text-green-600 mr-4" />
          <div>
            <h2 className="text-xl font-semibold">Notifications & Calendar</h2>
            <p className="text-gray-600">
              Track important dates and add reminders to your calendar.
            </p>
          </div>
        </div>

        <div
          className="p-6 bg-white shadow-lg rounded-lg cursor-pointer flex items-center hover:shadow-xl transition-shadow"
          onClick={handleLearningResourcesClick}
        >
          <FaBookOpen className="text-3xl text-green-600 mr-4" />
          <div>
            <h2 className="text-xl font-semibold">Learning Resources</h2>
            <p className="text-gray-600">
              Access tutorials on crops, soil, and pest control.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
