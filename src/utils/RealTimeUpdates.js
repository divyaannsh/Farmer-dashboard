import React from 'react';

// Mock data for real-time updates
const mockUpdates = [
  {
    id: 1,
    type: 'Weather Alert',
    description: 'Heavy rains expected in the northern region this weekend.',
    date: 'September 27, 2024',
  },
  {
    id: 2,
    type: 'Market Price',
    description: 'Wheat prices have increased by 5% due to recent demand spikes.',
    date: 'September 26, 2024',
  },
  {
    id: 3,
    type: 'Agricultural Alert',
    description: 'Pest infestation reported in the southern fields, take necessary precautions.',
    date: 'September 25, 2024',
  },
];

const RealTimeUpdates = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Real-time Updates</h1>
      <div className="space-y-4">
        {mockUpdates.map((update) => (
          <div key={update.id} className="p-4 border rounded-lg shadow">
            <h2 className="text-xl font-semibold">{update.type}</h2>
            <p className="text-gray-600">{update.description}</p>
            <p className="text-sm text-gray-500 mt-2">{update.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RealTimeUpdates;
