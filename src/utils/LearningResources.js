import React from 'react';

// Use the expanded mock data here
const mockLearningResources = [
  {
    id: 1,
    title: 'Effective Pest Control Techniques for Australian Farmers',
    description:
      'Learn about organic and chemical methods to control pests prevalent in Australian crops. This resource covers everything from native insects to biological control options.',
    category: 'Pest Control',
    link: 'https://example.com/effective-pest-control-australia',
  },
  {
    id: 2,
    title: 'Maximizing Soil Health for Higher Yields in Australia',
    description:
      'A comprehensive guide to understanding Australian soil types and management techniques to improve crop yield, with a focus on regenerative agriculture practices.',
    category: 'Soil Management',
    link: 'https://example.com/maximizing-soil-health-australia',
  },
  {
    id: 3,
    title: 'Water Management Best Practices in Arid Regions',
    description:
      'This resource focuses on effective water management strategies for Australian farms, including irrigation techniques suitable for arid and semi-arid regions.',
    category: 'Water Management',
    link: 'https://example.com/water-management-australia',
  },
  {
    id: 4,
    title: 'Understanding Australian Crop Cycles',
    description:
      'An in-depth look at seasonal crop cycles in various regions of Australia, including tips for maximizing yields based on climate and soil conditions.',
    category: 'Crop Cultivation',
    link: 'https://example.com/australian-crop-cycles',
  },
  {
    id: 5,
    title: 'Sustainable Farming Practices in Australia',
    description:
      'Explore sustainable farming practices that help preserve Australian ecosystems while maintaining productivity. This guide includes insights on crop rotation, cover cropping, and organic farming.',
    category: 'Sustainable Practices',
    link: 'https://example.com/sustainable-farming-australia',
  },
  {
    id: 6,
    title: 'Market Trends and Prices for Australian Produce',
    description:
      'Stay informed with the latest trends in the Australian agricultural market, including price forecasts and tips for maximizing profit through market analysis.',
    category: 'Market Information',
    link: 'https://example.com/australian-market-trends',
  },
  {
    id: 7,
    title: 'Innovations in Australian Agriculture Technology',
    description:
      'Discover the latest technologies transforming Australian agriculture, including precision farming, drones, and data analytics for crop management.',
    category: 'Technology',
    link: 'https://example.com/agriculture-technology-australia',
  },
  {
    id: 8,
    title: 'Regenerative Agriculture Practices in Australia',
    description:
      'An overview of regenerative agriculture techniques being adopted across Australia, focusing on improving soil health and increasing biodiversity.',
    category: 'Regenerative Practices',
    link: 'https://example.com/regenerative-agriculture-australia',
  },
];

const LearningResources = () => {
  return (
    <div className="p-8 bg-gray-100">
      <h1 className="text-2xl font-bold mb-6 text-green-700">Learning Resources</h1>
      <div className="space-y-4">
        {mockLearningResources.map((resource) => (
          <div key={resource.id} className="p-4 border-2 border-green-500 rounded-lg shadow hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold text-green-700">{resource.title}</h2>
            <p className="text-gray-600">{resource.description}</p>
            <p className="text-sm text-gray-500 mt-2">Category: {resource.category}</p>
            <a
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:underline mt-2 block"
            >
              Access Resource
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearningResources;
