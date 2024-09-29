import React, { useState } from 'react';
import { FiBookOpen, FiFilter } from 'react-icons/fi'; // Icons for resources and filter

// Expanded mock data with state-specific tags
const mockLearningResources = [
  {
    id: 1,
    title: 'Effective Pest Control Techniques for Australian Farmers',
    description:
      'Learn about organic and chemical methods to control pests prevalent in Australian crops. This resource covers everything from native insects to biological control options.',
    category: 'Pest Control',
    state: 'Bhiwani',
    link: 'https://example.com/effective-pest-control-australia',
  },
  {
    id: 2,
    title: 'Maximizing Soil Health for Higher Yields in Australia',
    description:
      'A comprehensive guide to understanding Australian soil types and management techniques to improve crop yield, with a focus on regenerative agriculture practices.',
    category: 'Soil Management',
    state: 'Jhajjar',
    link: 'https://example.com/maximizing-soil-health-australia',
  },
  {
    id: 3,
    title: 'Water Management Best Practices in Arid Regions',
    description:
      'This resource focuses on effective water management strategies for Australian farms, including irrigation techniques suitable for arid and semi-arid regions.',
    category: 'Water Management',
    state: 'Kurukshetra',
    link: 'https://example.com/water-management-australia',
  },
  {
    id: 4,
    title: 'Understanding Australian Crop Cycles',
    description:
      'An in-depth look at seasonal crop cycles in various regions of Australia, including tips for maximizing yields based on climate and soil conditions.',
    category: 'Crop Cultivation',
    state: 'Yamunanagar',
    link: 'https://example.com/australian-crop-cycles',
  },
  // Add more resources as needed
];

const LearningResources = () => {
  const [selectedState, setSelectedState] = useState('All'); // State for filtering resources by location

  // Filter resources based on the selected state
  const filteredResources =
    selectedState === 'All'
      ? mockLearningResources
      : mockLearningResources.filter(resource => resource.state === selectedState);

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-center text-green-700">Learning Resources</h1>

      {/* Filter Section */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl text-gray-800 font-semibold flex items-center">
          <FiFilter className="mr-2 text-green-500" />
          Filter by Region:
        </h2>
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

      {/* Resource Cards */}
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
    </div>
  );
};

export default LearningResources;
