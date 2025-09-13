import { ArrowLeft, Clock10, FolderOpen, Youtube } from 'lucide-react';
import React from 'react';

interface CourseHeaderProps{
    title?: string;
    sections:number;
    lectures:number;
    totalTime:string;
    onBackClick?:()=>void;
     onWriteReview?: () => void;
  onNextLecture?: () => void;

}
const CourseHeader:React.FC<CourseHeaderProps> = ({
    title,
    sections,
    lectures,
    totalTime,
    onBackClick,
    onWriteReview,
    onNextLecture
}) => {
    return (
        <div className='bg-blue-200 shadow-sm  h-18 flex items-center justify-between'>
            <div className='flex items-start space-x-4'>
                <button onClick={onBackClick}  className='text-gray-700 items-center ml-3 p-2  bg-white rounded-full'>
                    <ArrowLeft className='w-7 h-7 ' />
                </button>
                <div className='flex flex-col '>
                    <h1 className='text-xl'>{title}</h1>
                    <div className='flex items-center space-x-4 text-sm text-gray-500'>
                        <div className='flex items-center space-x-1'>
                            <FolderOpen  className='w-4 h-4 text-[#FF6636]' />
                            <span>{sections} Sections </span>
                        </div>
                        <div className='flex items-center space-x-1'>
                            <Youtube className='w-4 h-4 text-[#FF6636]' />

                            <span>{lectures} Lectures </span>
                            </div>
                        <div className='flex items-center space-x-1'>
                            <Clock10 className='w-4 h-4 text-[#FF6636]' />
                            <span>{totalTime}</span>
                            </div>
                    </div>
                </div>
            </div>
            <div className='flex items-center space-x-3'>
                <button onClick={onWriteReview} className='bg-white text-sm px-4 py-2  text-[#FF6636]'>Write A Review</button>
                <button onClick={onNextLecture} className='bg-[#FF6636] text-sm px-4 py-2 me-1  text-white'>Next Lecture</button>

            </div>


        </div>
    );
}

export default CourseHeader;
