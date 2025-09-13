import React from 'react';
import ReadOnlyRating from '../UI/ReadOnlyRating';
import { Play } from 'lucide-react';

interface Instructor{
    name: string;
    avatar: string;
}

interface CourseDetailHeaderProps {
    breadcrumbs?: string[];
    title?: string;
    description?: string;
    rating?: number;
    totalRatings?: number;
    instructors?: Instructor[];
    heroImage?: string;
    onPlayClick?: () => void;
    className?: string;
}

const CourseDetailHeader :React.FC<CourseDetailHeaderProps> = ({
    breadcrumbs=[],
    title="Complete Website Responsive Design: from Figma to Webflow to Website Design",
    description="3 in 1 Course: Learn to design websites with Figma, build with Webflow, and make a living freelancing.",
    rating=4.8,
    totalRatings=45144,
 instructors = [
    { name: "Dianne Russell", avatar: "../../assets/avatar.png" },
    { name: "Kristin Watson", avatar: "../../assets/avatar.png" }
  ],
      heroImage='../../assets/Image.png',
    onPlayClick=()=>{},
    className=''
}) => {
    const formatRating = (num: number):string => {
        if(num>=1000000){
            return(num/1000000).toFixed(1)+'M';
        }
        if(num>=1000){
            return(num/1000).toFixed(1)+'K';
        }
        return num.toString();
    }
    const handlePlayClick = () => {
        if(onPlayClick){
            onPlayClick();
        }
    }
    const handleKeyPress=(e:React.KeyboardEvent<HTMLDivElement>):void=>{
        if(e.key==='Enter'||e.key===' '){
            e.preventDefault()
            handlePlayClick();
        }
    }

    return (
    <div className={`w-full ${className}`}>
        {breadcrumbs.length>0 &&(
            <div className='px-6 py-4 border-b border-gray-100'>
                <nav className='flex items-center space-x-2 text-sm text-gray-500'>
                   {breadcrumbs.map((crumb: string, index: number) => (
                    <div key={index}>
                        <span className={`${
                            index === breadcrumbs.length - 1 ? 'text-gray-900' : 'text-gray-700 cursor-pointer'
                        }`}
                        role={index === breadcrumbs.length - 1 ? undefined : 'button'}
                        tabIndex={index === breadcrumbs.length - 1 ? undefined : 0}
                        >
                            {crumb}
                        </span>
                        {index < breadcrumbs.length - 1 && (
                            <span className="text-gray-300" aria-hidden="true">›</span>
                        )}
                    </div>
                   ))}
                </nav>

            </div>
        )}

        <div className='px-6 py-8'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight'>{title}</h2>
            <p className='text-lg text-gray-600 mb-6 max-w-4xl'>
                {description}
            </p>
            <div className="flex items-center justify-between space-x-3">
              
                <div className='flex'>
  <div className="flex -space-x-4">
    {instructors.map((instructor: Instructor, index: number) => (
      <img
        key={`${instructor.name}-${index}`}
        src={instructor.avatar}
        alt={`${instructor.name} profile img`}
        className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
      />
    ))}
  </div>

  <div className="flex  flex-col ">
              <p className='text-sm text-gray-500'> Created by</p>
<div className='flex items-center space-x-2'> 
     {instructors.map((instructor: Instructor, index: number) => (
        
      <span key={index} className="text-sm font-medium text-gray-700">
        
        {instructor.name}
          {index < instructors.length - 1 && (
          <span className="text-gray-400"> • </span>
        )}
      
      </span>
    ))}</div>
   
  </div>
                </div>


  <div className="flex items-center space-x-2">
    <ReadOnlyRating rating={rating} showText={false} />
    <span className="text-sm text-gray-900">{rating}</span>
    <span className="text-sm text-gray-500">
      ({formatRating(totalRatings)} Ratings)
    </span>
  </div>
</div>

           
        </div>
        <div className='relative  rounded-xl overflow-hidden shadow-lg group cursor-pointer '
        onClick={handlePlayClick}
        onKeyDown={handleKeyPress}
 
        role='button'

        >
            <img src={heroImage}
            alt='course img'
            className=' w-full md:w-90/100 md:ml-20  h-64 md:h-80  lg:h-96 object-cover transition-transform 
            duration-300  '
            loading='lazy'
            />
            <div className='absolute inset-0  bg-opacity-20 group-hover:bg-opacity-30 transition-transform duration-300'>
                <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white rounded-full p-4 shadow-lg transform transition-transform duration-200 group-hover:scale-110 ">
              <Play 
                className="w-8 h-8 text-gray-800 ml-1" 
                fill="currentColor"
            
              />
            </div>
          </div>

            </div>
        </div>

    </div>
)
}
export default CourseDetailHeader;
