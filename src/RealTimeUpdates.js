import React from 'react';

// Mock data for agricultural alerts with location details
const mockAlerts = [
  {
    id: 1,
    title: 'Weather Alert: Heavy Rain Expected in Bhiwani',
    description: 'Expect heavy rainfall in the northern regions, including Bhiwani, which could affect the wheat and corn crops.',
    date: 'September 27, 2024',
  },
  {
    id: 2,
    title: 'Pest Control Advisory for Jhajjar',
    description: 'Increased sightings of locusts in the western regions, particularly in Jhajjar. Farmers are advised to use appropriate pesticides.',
    date: 'September 25, 2024',
  },
  {
    id: 3,
    title: 'Market Prices Update: Wheat in Kurukshetra',
    description: 'Wheat prices have increased by 15% due to global demand. Farmers in Kurukshetra may see higher profits this season.',
    date: 'September 23, 2024',
  },
  {
    id: 4,
    title: 'Soil Health Report: Yamunanagar',
    description: 'Recent soil health assessments in Yamunanagar show improved fertility. Farmers are encouraged to continue soil conservation efforts.',
    date: 'September 22, 2024',
  },
];

const RealTimeUpdates = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Agricultural Alerts & Updates</h1>
      <div className="space-y-4">
        {mockAlerts.map((alert) => (
          <div key={alert.id} className="p-4 border rounded-lg shadow">
            <h2 className="text-xl font-semibold">{alert.title}</h2>
            <p className="text-gray-600">{alert.description}</p>
            <p className="text-sm text-gray-500 mt-2">{alert.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RealTimeUpdates;
