import React from 'react';
import { FiUser, FiCalendar, FiMapPin } from 'react-icons/fi'; // Import some icons

// Mock data for expert consultations with location details
const mockConsultations = [
  {
    id: 1,
    expert: 'Dr. Emily Johnson',
    specialty: 'Crop Science',
    availability: 'Monday to Friday, 10 AM - 4 PM',
    location: 'Bhiwani', // Add location details
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
      <h1 className="text-3xl font-bold mb-8 text-center text-blue-800">Expert Consultations</h1>
      <div className="space-y-6 max-w-4xl mx-auto">
        {mockConsultations.map((consult) => (
          <div 
            key={consult.id} 
            className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition duration-300 ease-in-out"
          >
            <div className="flex items-center mb-4">
              <FiUser className="text-blue-500 text-3xl mr-4" /> {/* Expert icon */}
              <h2 className="text-2xl font-semibold text-blue-700">{consult.expert}</h2>
            </div>
            <div className="ml-10 space-y-2">
              <p className="text-lg text-gray-600 flex items-center">
                <FiMapPin className="mr-2" /> Location: {consult.location}
              </p>
              <p className="text-lg text-gray-600 flex items-center">
                <FiCalendar className="mr-2" /> Specialty: {consult.specialty}
              </p>
              <p className="text-lg text-gray-600 flex items-center">
                <FiCalendar className="mr-2" /> Availability: {consult.availability}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpertConsultations;
