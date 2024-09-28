// // src/components/ConsultationModal.js
// import React from 'react';
// import { FaPhone, FaVideo, FaComment } from 'react-icons/fa';

// const ConsultationModal = ({ closeModal }) => {
//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//       <div className="bg-white p-6 rounded-lg text-center space-y-4">
//         <h2 className="text-2xl font-bold text-earth-brown">Choose Consultation Method</h2>
//         <div className="flex justify-around">
//           <ConsultOption Icon={FaComment} label="Chat" />
//           <ConsultOption Icon={FaPhone} label="Voice" />
//           <ConsultOption Icon={FaVideo} label="Video" />
//         </div>
//         <button onClick={closeModal} className="mt-4 text-earth-green">Close</button>
//       </div>
//     </div>
//   );
// };

// // Generic Consultation Option
// const ConsultOption = ({ Icon, label }) => (
//   <button className="p-4 bg-earth-green text-white rounded-full hover:bg-green-700 transition">
//     <Icon className="text-3xl" />
//     <p>{label}</p>
//   </button>
// );

// export default ConsultationModal;
