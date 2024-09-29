import React from 'react';
import { FiCloudRain, FiAlertTriangle, FiTrendingUp, FiDroplet, FiCalendar } from 'react-icons/fi'; // Added FiCalendar for the reminder feature

// Mock data for agricultural alerts with location details
const mockAlerts = [
  {
    id: 1,
    title: 'Weather Alert: Heavy Rain Expected in Bhiwani',
    description: 'Expect heavy rainfall in the northern regions, including Bhiwani, which could affect the wheat and corn crops.',
    date: 'September 27, 2024',
    icon: FiCloudRain, // Assign icons to each alert
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
    icon: FiDroplet, // Use FiDroplet instead of FiLeaf
  },
];

const RealTimeUpdates = () => {
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
              <alert.icon className="text-green-500 text-3xl mr-4" /> {/* Dynamically display icons */}
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

export default RealTimeUpdates;
