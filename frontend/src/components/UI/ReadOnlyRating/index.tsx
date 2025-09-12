import { Star } from 'lucide-react';
import React from 'react';

 interface ReadOnlyRatingProps {
        rating: number;
        maxRating?: number;
        showText?: boolean;
    }
const ReadOnlyRating :React.FC<ReadOnlyRatingProps>= ({rating,maxRating=5,showText=true}) => {

    return (
        <div className={`flex items-center space-x-2 ${showText ? 'min-w-60':''}`}>
            <div className="flex items-center space-x-1">
                {Array.from({ length: maxRating }, (_, index) => {
                    const starIndex = index+1;
                    const isFilled = starIndex <= rating;
                    const fillPrecentage = rating - index  >= 0 && rating - index <= 1?Math.ceil((rating - index) *100):0;
                    console.log(fillPrecentage,rating)
                    return (
                        <button
                            key={index}
                            className={`w-5 h-5 ${isFilled ? "text-[#FD8E1F]" :fillPrecentage?`bg-gradient-to-r from-[#FD8E1F] from-[50%] to-transparent to-[50%] clippedStar`: "text-gray-400"}`}
                            disabled
                        >         
                            <Star className={`w-5 h-5 ${isFilled ? "fill-[#FD8E1F] text-[#FD8E1F]" : "text-gray-400"}`} color='#FD8E1F' />
                        </button>
                    );
                })}
                {showText && (
                    <span className="font-medium text-gray-500">
                        {rating} Star{rating > 1 ? 's' : ''} Rating
                    </span>
                )}
            </div>
            
        </div>
    );
}

export default ReadOnlyRating;
