import React, { useState } from 'react';
import { FiMapPin, FiHome, FiCalendar } from 'react-icons/fi';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const mockCenters = [
  { id: 1, name: 'Extension Center Bhiwani', lat: 28.79, lng: 76.13, distance: '5 km' },
  { id: 2, name: 'Extension Center Jhajjar', lat: 28.60, lng: 76.65, distance: '10 km' },
];

const MobileAccess = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [homeVisitRequested, setHomeVisitRequested] = useState(false);
  const [isAdminView, setIsAdminView] = useState(false); // State to toggle between Admin and Expert view

  const handleHomeVisitRequest = () => {
    setHomeVisitRequested(true);
  };

  return (
    <div className="p-4 md:p-8 bg-green-50 min-h-screen">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-green-800">Find Extension Centers</h1>

      {/* Toggle Button for Admin/Expert View */}
      <div className="flex justify-center mb-6">
        <button
          className={`px-4 py-2 rounded-lg ${!isAdminView ? 'bg-green-600 text-white' : 'bg-gray-300 text-gray-700'}`}
          onClick={() => setIsAdminView(false)}
        >
          Expert View
        </button>
        <button
          className={`ml-4 px-4 py-2 rounded-lg ${isAdminView ? 'bg-green-600 text-white' : 'bg-gray-300 text-gray-700'}`}
          onClick={() => setIsAdminView(true)}
        >
          Admin View
        </button>
      </div>

      {/* Step 2: Map Section */}
      <div className="mb-8">
        <MapContainer
          center={[28.79, 76.13]} // Default map center
          zoom={10}
          style={{ height: '400px', width: '100%' }}
          className="rounded-lg shadow-md"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {mockCenters.map((center) => (
            <Marker key={center.id} position={[center.lat, center.lng]}>
              <Popup>
                <div>
                  <h3 className="font-semibold">{center.name}</h3>
                  <p>Distance: {center.distance}</p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      {/* Expert-specific features */}
      {!isAdminView ? (
        <div>
          {/* Step 3: Request a Home Visit */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-xl font-semibold mb-4">Request a Home Visit</h2>
            <button
              className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
              onClick={handleHomeVisitRequest}
            >
              <FiHome className="mr-2" />
              <span>Request Home Visit</span>
            </button>
            {homeVisitRequested && (
              <p className="text-green-600 mt-4">Home visit requested! Please schedule below.</p>
            )}
          </div>

          {/* Step 4: Schedule a Visit */}
          {homeVisitRequested && (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Schedule a Visit</h2>
              <div className="flex items-center space-x-4">
                <FiCalendar className="text-2xl text-green-600" />
                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  dateFormat="dd/MM/yyyy"
                  placeholderText="Select a date"
                  className="border-2 border-green-500 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              {selectedDate && (
                <p className="mt-4 text-green-600">Visit scheduled for: {selectedDate.toLocaleDateString()}</p>
              )}
            </div>
          )}
        </div>
      ) : (
        // Admin-specific features
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-semibold mb-4">Manage Extension Centers</h2>
          <p className="mb-4">Ensure all extension centers and their availability are updated.</p>
          {/* Add form or functionality to update centers */}
          <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            <FiMapPin className="mr-2" />
            <span>Update Centers</span>
          </button>
          <h2 className="text-xl font-semibold mt-6">Review Home Visit Requests</h2>
          {/* Logic to display and manage home visit requests can be implemented here */}
          <p className="mt-2">Check pending home visit requests in the admin portal.</p>
        </div>
      )}
    </div>
  );
};

export default MobileAccess;
