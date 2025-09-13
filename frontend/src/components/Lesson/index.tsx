import {  CheckSquare, FileText,  Play } from 'lucide-react';
import React from 'react';

interface LessonProps {
    title: string;
    duration: string;
    type?:'video' | 'document' ;
    completed?: boolean;
     isPlaying?: boolean;
    progress?: number;
}
const Lesson: React.FC<LessonProps> = ({
    title,
    duration,
    type = 'video',
    completed = false,
        isPlaying = false,
    // progress = 0
}) => {
    const Icon=type ==='video' ? Play :FileText;
    return (
  
                <div className={`flex items-center justify-between p-3  cursor-pointer transition-colors ${isPlaying ? 'bg-orange-50 border-l-2 border-orange-500' : ''}`}>
            <div className='flex items-center gap-3'>
                <div className='flex items-center gap-2'>
                    {completed ? (
                        <CheckSquare size={16} className='text-green-500' />
                    ) : (
                        <span className='w-4 h-4 border border-gray-300 rounded-sm'></span>
                    )}
                    <span className='text-sm font-medium text-gray-700'>{title}</span>
                </div>
            </div>
            <div className='flex items-center gap-2'>
                <Icon size={14} className='text-gray-400' />
                <span className='text-gray-500 text-sm'>{duration}</span>
            </div>
        </div>
    );
}

export default Lesson;
