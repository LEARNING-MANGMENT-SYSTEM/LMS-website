import { Award, BookOpen, Check, Clock, Copy, Facebook, Globe, Mail, Monitor, Smartphone, Twitter, Users } from "lucide-react";
import React from "react";

interface CoursePaymentProps {
  price: number;
  originalPrice?: number;
  discount?: number;
  duration: string;
  level: string;
  studentsEnrolled: string;
  language: string;
  subtitles: string;
  courseIncludes: {
    onDemandVideo: string;
    moneyBackGuarantee: string;
    downloadableResources: string;
    certificate: string;
    mobileAccess: boolean;
    englishCaptions: boolean;
    fullLifetime: boolean;
    onlineAccess: boolean;
  };
  onAddToCart?: () => void;
  onBuyNow?: () => void;
  onAddToWishlist?: () => void;
  onGiftCourse?: () => void;
  onShare?: (platform: string) => void;
}

const CourseSidebar:React.FC<CoursePaymentProps> = ({
   price,
  originalPrice,
  discount,
  duration,
  level,
  studentsEnrolled,
  language,
  subtitles,
  courseIncludes,
  onAddToCart,
  onBuyNow,
  onAddToWishlist,
  onGiftCourse,
  onShare
}) => {

// const [selectedOption,setSelectedOption]=useState<string>('')

  return <>
   <div className="border border-gray-200 rounded-lg shadow-sm p-6 w-80 ml-auto">
    <div className="mb-6">
      <div className="flex items-center gap-3 mb-2">
        <span className="text-3xl font-bold text-gray-900">${price.toFixed(2)}
        </span>
        {originalPrice&&(
          <span className="text-lg text-gray-500 line-through">
            ${originalPrice.toFixed(2)}
          </span>
        )}
        {discount&&(
          <span className="text-orange-500 bg-orange-100 ml-auto px-4 py-1 text-sm font-semibold" >{discount}% off</span>
        )}
      </div>
      <p className="text-red-600 text-sm flex "> 
                    <Clock size={12} className="w-4 h-4 mr-1 mt-.5 text-red-600" />

        2 days left at this price</p>
    </div>
    {/* //// */}
    <div className="space-y-3 mb-6">
      <div className="flex items-center justify-between">
 <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-600">Course Duration</span>
          </div>
           <span className="text-sm font-medium  text-gray-400">{duration}</span>
      </div>  
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-600">Course Level</span>
          </div>
          <span className="text-sm font-medium  text-gray-400">{level}</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-600">Students Enrolled</span>
          </div>
          <span className="text-sm font-medium  text-gray-400">{studentsEnrolled}</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-600">Language</span>
          </div>
          <span className="text-sm font-medium  text-gray-400">{language}</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Monitor className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-600">Subtitle Language</span>
          </div>
          <span className="text-sm font-medium  text-gray-400">{subtitles}</span>
        </div>
      </div>
      {/* //// */}
       <div className="space-y-3 mb-6">
        <button
          onClick={onAddToCart}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
        >
          Add To Cart
        </button>
        
        <button
          onClick={onBuyNow}
          className="w-full border border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold py-3 px-4 rounded-lg transition-colors"
        >
          Buy Now
        </button>
      </div>
      {/* // */}
       <div className="flex justify-between text-sm text-gray-600 mb-6">
        <button onClick={onAddToWishlist} className="hover:text-gray-800  border-gray-200 border-1 py-1 px-6">
          Add To Wishlist
        </button>
        <button onClick={onGiftCourse} className="hover:text-gray-800 border-gray-200 border-1 py-1 px-6">
          Gift Course
        </button>
      </div>
       <p className="text-xs text-gray-500 mb-6 border-gray-200 border-1 py-1 px-2">
        Note: All course have 30-day money-back guarantee
      </p>

      {/* // */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">This course includes:</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <Monitor className="w-4 h-4 text-orange-500" />
            <span className="text-sm text-gray-700">{courseIncludes.onDemandVideo}</span>
          </div>
          
          <div className="flex items-center gap-3">
            <Award className="w-4 h-4 text-orange-500" />
            <span className="text-sm text-gray-700">{courseIncludes.moneyBackGuarantee}</span>
          </div>
          
          <div className="flex items-center gap-3">
            <BookOpen className="w-4 h-4 text-orange-500" />
            <span className="text-sm text-gray-700">{courseIncludes.downloadableResources}</span>
          </div>
          
          <div className="flex items-center gap-3">
            <Award className="w-4 h-4 text-orange-500" />
            <span className="text-sm text-gray-700">{courseIncludes.certificate}</span>
          </div>

          {courseIncludes.mobileAccess && (
            <div className="flex items-center gap-3">
              <Smartphone className="w-4 h-4 text-orange-500" />
              <span className="text-sm text-gray-700">Access on mobile, tablet and TV</span>
            </div>
          )}

          {courseIncludes.englishCaptions && (
            <div className="flex items-center gap-3">
              <Globe className="w-4 h-4 text-orange-500" />
              <span className="text-sm text-gray-700">English captions</span>
            </div>
          )}

          {courseIncludes.fullLifetime && (
            <div className="flex items-center gap-3">
              <Check className="w-4 h-4 text-orange-500" />
              <span className="text-sm text-gray-700">100% online course</span>
            </div>
          )}
        </div>
      </div>

      {/* /// */}
        <div>
        <h4 className="text-sm font-semibold text-gray-900 mb-3">Share this course:</h4>
        <div className="flex gap-3">
          <button
            onClick={() => onShare?.('copy')}
            className="p-2 flex border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
            title="Copy Link"
          >
            <Copy  size={14}/>
            <span className="text-xs ml-1 ">Copy Link</span>
          </button>
          <button
            onClick={() => onShare?.('facebook')}
            className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
            title="Share on Facebook"
          >
<Facebook  size={14}/>
          </button>
          <button
            onClick={() => onShare?.('twitter')}
            className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
            title="Share on Twitter"
          >
            <Twitter size={14} />
          </button>
          <button
            onClick={() => onShare?.('email')}
            className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
            title="Share via Email"
          >
<Mail  size={14}/>
          </button>
          {/* <button
            onClick={() => onShare?.('whatsapp')}
            className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            title="Share on WhatsApp"
          >
            <WhatsApp/>
          </button> */}
        </div>
      </div>
  </div>
  </>
 
};

export default CourseSidebar;
