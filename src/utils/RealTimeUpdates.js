import React, { useState } from 'react';
import { FiCloudRain, FiAlertTriangle, FiTrendingUp, FiDroplet, FiCalendar } from 'react-icons/fi';

// Mock data for agricultural alerts with location details
const mockAlerts = [
  {
    id: 1,
    title: 'Weather Alert: Heavy Rain Expected in Bhiwani',
    description: 'Expect heavy rainfall in the northern regions, including Bhiwani, which could affect the wheat and corn crops.',
    date: 'September 27, 2024',
    icon: FiCloudRain,
  },
  {
    id: 2,
    title: 'Pest Control Advisory for Jhajjar',
    description: 'Increased sightings of locusts in the western regions, particularly in Jhajjar. Farmers are advised to use appropriate pesticides.',
    date: 'September 25, 2024',
    icon: FiAlertTriangle,
  },
  {
    id: 3,
    title: 'Market Prices Update: Wheat in Kurukshetra',
    description: 'Wheat prices have increased by 15% due to global demand. Farmers in Kurukshetra may see higher profits this season.',
    date: 'September 23, 2024',
    icon: FiTrendingUp,
  },
  {
    id: 4,
    title: 'Soil Health Report: Yamunanagar',
    description: 'Recent soil health assessments in Yamunanagar show improved fertility. Farmers are encouraged to continue soil conservation efforts.',
    date: 'September 22, 2024',
    icon: FiDroplet,
  },
];

// Farmer View Component
const FarmerView = () => {
  return (
    <div className="p-8 bg-gradient-to-r from-green-50 to-blue-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-center text-green-800">Agricultural Alerts & Updates</h1>
      
      {/* Display real-time alerts */}
      <div className="space-y-6 max-w-4xl mx-auto">
        {mockAlerts.map((alert) => (
          <div
            key={alert.id}
            className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition duration-300 ease-in-out"
          >
            <div className="flex items-center mb-4">
              <alert.icon className="text-green-500 text-3xl mr-4" />
              <h2 className="text-xl font-semibold text-green-700">{alert.title}</h2>
            </div>
            <p className="text-gray-600">{alert.description}</p>
            <p className="text-sm text-gray-400 mt-4">{alert.date}</p>

            {/* Calendar reminder button */}
            <div className="mt-4">
              <button className="text-green-500 flex items-center space-x-2 hover:underline">
                <FiCalendar className="text-lg" />
                <span>Add to Calendar</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Admin/Expert View Component
const AdminView = () => {
  const [alerts, setAlerts] = useState(mockAlerts); // State to manage all alerts
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [icon, setIcon] = useState(FiCloudRain);

  // Function to handle adding a new alert
  const handleAddAlert = () => {
    const newAlert = {
      id: alerts.length + 1,
      title,
      description,
      date,
      icon,
    };
    setAlerts([newAlert, ...alerts]);
    setTitle('');
    setDescription('');
    setDate('');
  };

  // Function to send notifications (mock functionality)
  const sendNotification = (alert) => {
    console.log(`Notification sent for alert: ${alert.title}`);
    alert(`Notification sent for: ${alert.title}`);
  };

  return (
    <div className="p-8 bg-gradient-to-r from-green-50 to-blue-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-center text-green-800">Admin: Manage Agricultural Alerts & Updates</h1>

      {/* Form for inputting new alert */}
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-xl font-semibold text-green-700 mb-4">Add New Alert</h2>

        <div className="space-y-4">
          <input
            type="text"
            className="w-full p-2 border-2 border-green-500 rounded-lg"
            placeholder="Enter Alert Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            className="w-full p-2 border-2 border-green-500 rounded-lg"
            placeholder="Enter Alert Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <input
            type="date"
            className="w-full p-2 border-2 border-green-500 rounded-lg"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          {/* Select Icon for the alert */}
          <div className="space-y-2">
            <p className="text-green-700">Select Alert Type:</p>
            <div className="flex space-x-4">
              <button
                onClick={() => setIcon(FiCloudRain)}
                className={`p-2 rounded-lg ${icon === FiCloudRain ? 'bg-green-600 text-white' : 'bg-gray-200'}`}
              >
                <FiCloudRain className="inline mr-2" /> Weather
              </button>
              <button
                onClick={() => setIcon(FiAlertTriangle)}
                className={`p-2 rounded-lg ${icon === FiAlertTriangle ? 'bg-green-600 text-white' : 'bg-gray-200'}`}
              >
                <FiAlertTriangle className="inline mr-2" /> Pest
              </button>
              <button
                onClick={() => setIcon(FiTrendingUp)}
                className={`p-2 rounded-lg ${icon === FiTrendingUp ? 'bg-green-600 text-white' : 'bg-gray-200'}`}
              >
                <FiTrendingUp className="inline mr-2" /> Market
              </button>
              <button
                onClick={() => setIcon(FiDroplet)}
                className={`p-2 rounded-lg ${icon === FiDroplet ? 'bg-green-600 text-white' : 'bg-gray-200'}`}
              >
                <FiDroplet className="inline mr-2" /> Soil
              </button>
            </div>
          </div>

          <button
            onClick={handleAddAlert}
            className="w-full bg-green-600 text-white p-2 rounded-lg hover:bg-green-700"
          >
            Add Alert
          </button>
        </div>
      </div>

      {/* Display all alerts */}
      <div className="space-y-6 max-w-4xl mx-auto">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition duration-300 ease-in-out"
          >
            <div className="flex items-center mb-4">
              <alert.icon className="text-green-500 text-3xl mr-4" />
              <h2 className="text-xl font-semibold text-green-700">{alert.title}</h2>
            </div>
            <p className="text-gray-600">{alert.description}</p>
            <p className="text-sm text-gray-400 mt-4">{alert.date}</p>

            {/* Send Notification Button */}
            <div className="mt-4">
              <button
                onClick={() => sendNotification(alert)}
                className="text-green-500 flex items-center space-x-2 hover:underline"
              >
                <FiCalendar className="text-lg" />
                <span>Send Notification</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Main Component with Toggle Button
const RealTimeUpdates = () => {
  const [isFarmerView, setIsFarmerView] = useState(true); // State to toggle between Farmer and Admin view

  return (
    <div>
      {/* Toggle button */}
      <div className="flex justify-center mt-4">
        <button
          onClick={() => setIsFarmerView(!isFarmerView)}
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
        >
          Switch to {isFarmerView ? 'Admin/Expert View' : 'Farmer View'}
        </button>
      </div>

      {/* Render the appropriate view */}
      {isFarmerView ? <FarmerView /> : <AdminView />}
    </div>
  );
};

export default RealTimeUpdates;
