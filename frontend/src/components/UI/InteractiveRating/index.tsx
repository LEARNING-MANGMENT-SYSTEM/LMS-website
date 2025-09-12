import { Star } from "lucide-react";
import React, { useState } from "react";

interface InteractiveRatingProps {
  rating?: number;
  maxRating?: number;
  onRateChange?: (rating: number) => void;
  showText?: boolean;
}

const InteractiveRating: React.FC<InteractiveRatingProps> = ({
  rating = 3,
  maxRating = 5,
  onRateChange,
  showText = true,
}) => {
  const [hoveredRating, setHoveredRating] = useState<number>(0);

  const handleStarClick = (starIndex: number) => {
    if (onRateChange) {
      onRateChange(starIndex + 1);
    }
  };

  const handleEnterClick = (starIndex: number) => {
    setHoveredRating(starIndex + 1);
  };

  const handleLeaveClick = () => {
    setHoveredRating(0);
  };

  const displayRating = hoveredRating || rating;

  return (
    <div className="flex items-center space-x-2">
      <div className="flex items-center space-x-1">
        {Array.from({ length: maxRating }, (_, index) => {
          const starIndex = index;
          const isFilled = starIndex < displayRating;
          return (
            <button
              key={index}
              onClick={() => handleStarClick(starIndex)}
              onMouseEnter={() => handleEnterClick(starIndex)}
              onMouseLeave={handleLeaveClick}
              className={`w-5 h-5 cursor-pointer hover:scale-110 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-300 flex items-center justify-center ${
                isFilled ? "text-yellow-500" : "text-gray-400"
              }`}
              aria-label={`Rate ${starIndex + 1} star${
                starIndex + 1 > 1 ? "s" : ""
              }`}
            >
              <Star
  className={`w-5 h-5 ${
    isFilled ? "fill-[#FD8E1F] text-[#FD8E1F]" : "text-gray-400"
  }`}
/>

            </button>
          );
        })}
      </div>
      {showText && (
        <span className="font-medium text-gray-600">
            {displayRating} Star{displayRating > 1 ? "s" : ""} Rating
            </span>
      )}
    </div>
  );
};

export default InteractiveRating;
