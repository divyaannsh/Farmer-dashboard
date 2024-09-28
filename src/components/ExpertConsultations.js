import React from 'react';

const ExpertConsultations = () => {
  return (
    <div className="p-8 bg-gray-100">
      <h1 className="text-2xl font-bold mb-6 text-green-700">Expert Consultations</h1>
      <p className="mb-4 text-gray-600">
        Choose your preferred method of consultation with our agricultural experts.
      </p>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {/* Chat Option */}
        <div className="p-6 bg-white shadow rounded-lg cursor-pointer hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold text-green-700">Chat with Experts</h2>
          <p className="text-gray-600">
            Engage in real-time chat with our experts for quick advice and insights.
          </p>
          <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
            Start Chat
          </button>
        </div>

        {/* Voice Call Option */}
        <div className="p-6 bg-white shadow rounded-lg cursor-pointer hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold text-green-700">Voice Call</h2>
          <p className="text-gray-600">
            Schedule a voice call for detailed consultations and discussions.
          </p>
          <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
            Start Voice Call
          </button>
        </div>

        {/* Video Call Option */}
        <div className="p-6 bg-white shadow rounded-lg cursor-pointer hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold text-green-700">Video Call</h2>
          <p className="text-gray-600">
            Connect face-to-face with our experts via video call for a more personalized experience.
          </p>
          <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
            Start Video Call
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExpertConsultations;
