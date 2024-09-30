import React, { useState } from 'react';
import {
  FiBookOpen,
  FiGlobe,
  FiCamera,
  FiSpeaker,
  FiBook,
  FiUploadCloud,
  FiClipboard,
} from 'react-icons/fi';

const mockLearningResources = [
  // Your mock data goes here
];

const LearningResources = () => {
  const [selectedState, setSelectedState] = useState('All');
  const [language, setLanguage] = useState('');
  const [step, setStep] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isExpert, setIsExpert] = useState(false); // Track if user is an expert

  const filteredResources =
    selectedState === 'All'
      ? mockLearningResources
      : mockLearningResources.filter((resource) => resource.state === selectedState);

  const handleLanguageSelection = (lang) => {
    setLanguage(lang);
    setStep(3); // Move to category selection
  };

  const handleCategorySelection = (category) => {
    setSelectedCategory(category);
    setStep(4); // Move to format selection step
  };

  const handleFormatSelection = (format) => {
    console.log(`Selected Format: ${format}`);
    setStep(5); // Move to the learning step
  };

  const handleUploadContent = () => {
    console.log('Upload content functionality to be implemented');
    // Implement upload logic here
  };

  const handleCreateQuiz = () => {
    console.log('Create quiz functionality to be implemented');
    // Implement quiz creation logic here
  };

  return (
    <div className="p-8 bg-green-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-center text-green-700">Learning Resources</h1>

      {/* User Type Selection */}
      <div className="mb-6 text-center">
        <button
          onClick={() => setIsExpert(false)}
          className={`px-4 py-2 rounded-lg ${!isExpert ? 'bg-green-600 text-white' : 'bg-gray-200'}`}
        >
          Farmer
        </button>
        <button
          onClick={() => setIsExpert(true)}
          className={`px-4 py-2 rounded-lg ${isExpert ? 'bg-green-600 text-white' : 'bg-gray-200'}`}
        >
          Expert
        </button>
      </div>

      {/* Step-by-Step Process */}
      {isExpert ? (
        // Expert Flow
        <>
          {step === 1 && (
            <>
              <h2 className="text-xl font-semibold mb-4">Step 1: Upload Learning Content</h2>
              <button
                onClick={handleUploadContent}
                className="p-4 bg-green-600 text-white rounded-md mb-4 mr-4" // Added mr-4 for spacing
              >
                <FiUploadCloud className="inline mr-2" /> Upload Content
              </button>
              <button
                onClick={() => setStep(2)}
                className="p-4 bg-green-600 text-white rounded-md"
              >
                Next: Create Quiz
              </button>
            </>
          )}

          {step === 2 && (
            <>
              <h2 className="text-xl font-semibold mb-4">Step 2: Create Interactive Quiz</h2>
              <button
                onClick={handleCreateQuiz}
                className="p-4 bg-green-600 text-white rounded-md"
              >
                <FiClipboard className="inline mr-2" /> Create Quiz
              </button>
              <button
                onClick={() => setStep(1)}
                className="p-4 bg-green-600 text-white rounded-md mt-4"
              >
                Restart Process
              </button>
            </>
          )}
        </>
      ) : (
        // Farmer Flow
        <>
          {step === 1 && (
            <>
              <h2 className="text-xl font-semibold mb-4">Step 1: Select Your Region</h2>
              <div className="flex justify-between items-center mb-6">
                <select
                  className="border-2 border-green-500 rounded-md p-2 text-green-700"
                  value={selectedState}
                  onChange={(e) => setSelectedState(e.target.value)}
                >
                  <option value="All">All Regions</option>
                  <option value="Bhiwani">Bhiwani</option>
                  <option value="Jhajjar">Jhajjar</option>
                  <option value="Kurukshetra">Kurukshetra</option>
                  <option value="Yamunanagar">Yamunanagar</option>
                </select>
              </div>
              <button onClick={() => setStep(2)} className="bg-green-600 text-white p-2 rounded">
                Next: Select Language
              </button>
            </>
          )}

          {step === 2 && (
            <>
              <h2 className="text-xl font-semibold mb-4">Step 2: Select Language</h2>
              <div className="flex space-x-4">
                <button onClick={() => handleLanguageSelection('English')} className="p-4 bg-green-600 text-white rounded-md">
                  <FiGlobe className="inline mr-2" /> English
                </button>
                <button onClick={() => handleLanguageSelection('Hindi')} className="p-4 bg-green-600 text-white rounded-md">
                  <FiGlobe className="inline mr-2" /> Hindi
                </button>
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <h2 className="text-xl font-semibold mb-4">Step 3: Choose Learning Module</h2>
              <div className="flex space-x-4">
                <button onClick={() => handleCategorySelection('Crops')} className="p-4 bg-green-600 text-white rounded-md">
                  Crops
                </button>
                <button onClick={() => handleCategorySelection('Soil Management')} className="p-4 bg-green-600 text-white rounded-md">
                  Soil Management
                </button>
                <button onClick={() => handleCategorySelection('Pest Control')} className="p-4 bg-green-600 text-white rounded-md">
                  Pest Control
                </button>
              </div>
            </>
          )}

          {step === 4 && (
            <>
              <h2 className="text-xl font-semibold mb-4">Step 4: Select Multimedia Format</h2>
              <div className="flex space-x-4">
                <button onClick={() => handleFormatSelection('Video')} className="p-4 bg-green-600 text-white rounded-md">
                  <FiCamera className="inline mr-2" /> Video
                </button>
                <button onClick={() => handleFormatSelection('Audio')} className="p-4 bg-green-600 text-white rounded-md">
                  <FiSpeaker className="inline mr-2" /> Audio
                </button>
                <button onClick={() => handleFormatSelection('Text')} className="p-4 bg-green-600 text-white rounded-md">
                  <FiBook className="inline mr-2" /> Text
                </button>
              </div>
            </>
          )}

          {step === 5 && (
            <>
              <h2 className="text-xl font-semibold mb-4">Step 5: Watch Tutorials and Take Quizzes</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredResources.length > 0 ? (
                  filteredResources.map((resource) => (
                    <div
                      key={resource.id}
                      className="p-6 border-2 border-green-500 rounded-lg bg-white shadow hover:shadow-lg transition-shadow hover:bg-green-50"
                    >
                      <h2 className="text-xl font-semibold text-green-700 flex items-center">
                        <FiBookOpen className="mr-2" /> {resource.title}
                      </h2>
                      <p className="text-gray-600 mt-2">{resource.description}</p>
                      <p className="text-sm text-gray-500 mt-2">Category: {resource.category}</p>
                      <p className="text-sm text-gray-500">Location: {resource.state}</p>
                      <a
                        href={resource.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-500 hover:underline mt-2 block"
                      >
                        Access Resource
                      </a>
                    </div>
                  ))
                ) : (
                  <p className="text-center text-gray-600">No resources available for the selected region.</p>
                )}
              </div>
              <button onClick={() => setStep(1)} className="bg-green-600 text-white p-2 rounded mt-6">
                Restart Process
              </button>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default LearningResources;
