import React from 'react';
import { FiUser, FiCalendar, FiMapPin, FiPhone, FiVideo, FiMessageSquare } from 'react-icons/fi'; // Icons for consultation methods

// Mock data for expert consultations with location details
const mockConsultations = [
  {
    id: 1,
    expert: 'Dr. Emily Johnson',
    specialty: 'Crop Science',
    availability: 'Monday to Friday, 10 AM - 4 PM',
    location: 'Bhiwani',
  },
  {
    id: 2,
    expert: 'Mr. Alan Smith',
    specialty: 'Soil Health',
    availability: 'Tuesday and Thursday, 1 PM - 5 PM',
    location: 'Jhajjar',
  },
  {
    id: 3,
    expert: 'Dr. Maria Patel',
    specialty: 'Pest Management',
    availability: 'Wednesday, 9 AM - 12 PM',
    location: 'Kurukshetra',
  },
  {
    id: 4,
    expert: 'Dr. Rahul Verma',
    specialty: 'Water Management',
    availability: 'Friday, 2 PM - 6 PM',
    location: 'Yamunanagar',
  },
];

const ExpertConsultations = () => {
  return (
    <div className="p-8 bg-gradient-to-r from-blue-50 to-green-50 min-h-screen">
      <h1 className="text-4xl font-bold mb-12 text-center text-blue-900">Expert Consultations</h1>
      <div className="space-y-8 max-w-4xl mx-auto">
        {mockConsultations.map((consult) => (
          <div 
            key={consult.id} 
            className="p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition duration-300 ease-in-out"
          >
            {/* Expert Info */}
            <div className="flex items-center mb-6">
              <FiUser className="text-blue-600 text-4xl mr-4" /> {/* Expert icon */}
              <div>
                <h2 className="text-2xl font-semibold text-blue-800">{consult.expert}</h2>
                <p className="text-lg text-gray-500">{consult.specialty}</p>
              </div>
            </div>

            {/* Location and Availability Info */}
            <div className="ml-12 space-y-4">
              <p className="text-lg text-gray-600 flex items-center">
                <FiMapPin className="mr-2" /> Location: {consult.location}
              </p>
              <p className="text-lg text-gray-600 flex items-center">
                <FiCalendar className="mr-2" /> Availability: {consult.availability}
              </p>
            </div>

            {/* Consultation Methods */}
            <div className="mt-8 flex justify-end space-x-4">
              <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-5 py-3 rounded-lg flex items-center space-x-2 hover:bg-blue-700 transition">
                <FiMessageSquare className="text-lg" />
                <span>Chat Now</span>
              </button>
              <button className="bg-gradient-to-r from-green-500 to-green-700 text-white px-5 py-3 rounded-lg flex items-center space-x-2 hover:bg-green-700 transition">
                <FiPhone className="text-lg" />
                <span>Voice Call Now</span>
              </button>
              <button className="bg-gradient-to-r from-purple-500 to-purple-700 text-white px-5 py-3 rounded-lg flex items-center space-x-2 hover:bg-purple-700 transition">
                <FiVideo className="text-lg" />
                <span>Video Call Now</span>
              </button>
            </div>

            {/* Schedule a session */}
            <div className="mt-4 text-right">
              <button className="text-blue-600 flex items-center space-x-2 hover:underline">
                <FiCalendar className="text-lg" />
                <span>Schedule a Session</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpertConsultations;
