import React from 'react';

// Mock data for notifications
const mockNotifications = [
  {
    id: 1,
    message: 'Fertilizer prices are expected to rise by 10% next month.',
    date: 'September 27, 2024',
  },
  {
    id: 2,
    message: 'New pest-resistant seeds are available in the market.',
    date: 'September 25, 2024',
  },
  {
    id: 3,
    message: 'Agricultural workshop scheduled for October 5, 2024.',
    date: 'September 23, 2024',
  },
];

const Notifications = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Notifications & Calendar</h1>
      <div className="space-y-4">
        {mockNotifications.map((notification) => (
          <div key={notification.id} className="p-4 border rounded-lg shadow">
            <p className="text-gray-600">{notification.message}</p>
            <p className="text-sm text-gray-500 mt-2">{notification.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
