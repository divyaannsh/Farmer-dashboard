import React from 'react';

// Mock data for expert consultations
const mockConsultations = [
  {
    id: 1,
    expert: 'Dr. Emily Johnson',
    specialty: 'Crop Science',
    availability: 'Monday to Friday, 10 AM - 4 PM',
  },
  {
    id: 2,
    expert: 'Mr. Alan Smith',
    specialty: 'Soil Health',
    availability: 'Tuesday and Thursday, 1 PM - 5 PM',
  },
  {
    id: 3,
    expert: 'Dr. Maria Patel',
    specialty: 'Pest Management',
    availability: 'Wednesday, 9 AM - 12 PM',
  },
];

const ExpertConsultations = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Expert Consultations</h1>
      <div className="space-y-4">
        {mockConsultations.map((consult) => (
          <div key={consult.id} className="p-4 border rounded-lg shadow">
            <h2 className="text-xl font-semibold">{consult.expert}</h2>
            <p className="text-gray-600">Specialty: {consult.specialty}</p>
            <p className="text-gray-600">Availability: {consult.availability}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpertConsultations;
