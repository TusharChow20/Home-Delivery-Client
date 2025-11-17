import React from "react";

const ReviewCard = ({ review }) => {
  const { userName, review: reviewText, ratings, user_photoURL } = review;

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 max-w-md">
      <div className="border-t-2 border-dotted border-teal-400 mb-6"></div>
      <div className="text-teal-500 text-5xl font-serif mb-4">"</div>
      <p className="text-gray-700 text-sm leading-relaxed mb-6">{reviewText}</p>
      <div className="border-t-2 border-dotted border-gray-300 mb-6"></div>

      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-full bg-teal-800 flex-shrink-0 overflow-hidden">
          {user_photoURL ? (
            <img
              src={user_photoURL}
              alt={userName}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-white text-xl font-semibold">
              {userName?.charAt(0)}
            </div>
          )}
        </div>
        <div>
          <h3 className="text-gray-900 font-semibold text-base">{userName}</h3>
          <p className="text-gray-500 text-sm">Senior Product Designer</p>
          <div className="flex items-center gap-1 mt-1">
            <span className="text-yellow-500">★</span>
            <span className="text-gray-600 text-xs">{ratings}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
