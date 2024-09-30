import React, { useState } from 'react';
import { FiThumbsUp, FiMessageSquare, FiPlusCircle, FiSend } from 'react-icons/fi';

const mockDiscussions = [
  {
    id: 1,
    topic: 'Best practices for crop rotation',
    description: 'What are the best practices for crop rotation to maintain soil fertility?',
    replies: 3,
    upvotes: 10,
    repliesList: [],
  },
  {
    id: 2,
    topic: 'Managing pests in organic farming',
    description: 'How can I manage pests effectively without using chemical pesticides?',
    replies: 5,
    upvotes: 8,
    repliesList: [],
  },
];

const CommunityForum = () => {
  const [newPost, setNewPost] = useState('');
  const [feedback, setFeedback] = useState('');
  const [discussions, setDiscussions] = useState(mockDiscussions);
  const [isFarmerView, setIsFarmerView] = useState(true);

  const handleNewPost = () => {
    if (newPost.trim()) {
      const newDiscussion = {
        id: discussions.length + 1,
        topic: newPost,
        description: 'Description for the new topic...',
        replies: 0,
        upvotes: 0,
        repliesList: [],
      };
      setDiscussions([...discussions, newDiscussion]);
      setNewPost('');
    }
  };

  const handleFeedbackSubmit = () => {
    if (feedback.trim()) {
      console.log('Feedback:', feedback);
      setFeedback('');
    }
  };

  return (
    <div className="p-4 md:p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-green-800">Community Forum & Feedback</h1>

      {/* Toggle Button for Farmer/Expert View */}
      <div className="flex justify-center mb-6">
        <button
          className={`px-4 py-2 rounded-lg ${isFarmerView ? 'bg-green-600 text-white' : 'bg-gray-300 text-gray-700'}`}
          onClick={() => setIsFarmerView(true)}
        >
          Farmer View
        </button>
        <button
          className={`ml-4 px-4 py-2 rounded-lg ${!isFarmerView ? 'bg-green-600 text-white' : 'bg-gray-300 text-gray-700'}`}
          onClick={() => setIsFarmerView(false)}
        >
          Expert View
        </button>
      </div>

      {/* Farmer View */}
      {isFarmerView ? (
        <div>
          {/* New Post Section */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-xl font-semibold mb-4">Start a New Discussion</h2>
            <textarea
              className="w-full p-3 border-2 border-green-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 mb-4"
              rows="4"
              placeholder="Post a new question or topic..."
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
            ></textarea>
            <button
              className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
              onClick={handleNewPost}
            >
              <FiPlusCircle className="mr-2" />
              <span>Post Discussion</span>
            </button>
          </div>

          {/* Discussions Section */}
          <div className="space-y-6 mb-8">
            {discussions.map((discussion) => (
              <div
                key={discussion.id}
                className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row justify-between"
              >
                <div className="md:w-3/4">
                  <h3 className="text-xl font-semibold text-green-700">{discussion.topic}</h3>
                  <p className="text-gray-600 mt-2">{discussion.description}</p>
                  <p className="text-sm text-gray-500 mt-2">{discussion.replies} Replies</p>
                  <div className="mt-4">
                    <textarea
                      className="w-full p-3 border-2 border-blue-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
                      rows="2"
                      placeholder="Reply..."
                    />
                    <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                      <FiSend className="mr-2" />
                      <span>Reply</span>
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-end mt-4 md:mt-0 space-x-4">
                  <button className="flex items-center text-green-600 hover:text-green-700 transition">
                    <FiThumbsUp className="mr-1" />
                    <span>{discussion.upvotes} Upvotes</span>
                  </button>
                  <button className="flex items-center text-blue-600 hover:text-blue-700 transition">
                    <FiMessageSquare className="mr-1" />
                    <span>Reply</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Feedback Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Submit Feedback</h2>
            <textarea
              className="w-full p-3 border-2 border-green-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 mb-4"
              rows="4"
              placeholder="Share your feedback..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            ></textarea>
            <button
              className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              onClick={handleFeedbackSubmit}
            >
              <FiSend className="mr-2" />
              <span>Submit Feedback</span>
            </button>
          </div>
        </div>
      ) : (
        // Expert View
        <div>
          <h2 className="text-xl font-semibold mb-4">Expert Discussion Panel</h2>
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h3 className="text-lg font-semibold mb-4">Moderate Discussions</h3>
            {discussions.map((discussion) => (
              <div key={discussion.id} className="border-b border-gray-300 py-2">
                <h4 className="font-semibold text-green-700">{discussion.topic}</h4>
                <p className="text-gray-600">{discussion.description}</p>
                <div className="flex items-center space-x-4">
                  <button className="flex items-center text-green-600 hover:text-green-700 transition">
                    <FiThumbsUp className="mr-1" />
                    <span>{discussion.upvotes} Upvotes</span>
                  </button>
                  <button className="flex items-center text-blue-600 hover:text-blue-700 transition">
                    <FiMessageSquare className="mr-1" />
                    <span>Reply</span>
                  </button>
                </div>
                <button className="mt-2 text-green-600 underline" onClick={() => console.log('Mark Verified')}>
                  Mark as Verified
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CommunityForum;
