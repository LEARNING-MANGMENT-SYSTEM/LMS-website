import { FileText,  Play } from 'lucide-react';
import React from 'react';

interface LessonProps {
    title: string;
    duration: string;
    type?:'video' | 'document' ;
    completed?: boolean;
}
const Lesson: React.FC<LessonProps> = ({
    title,
    duration,
    type = 'video',
    completed = false
}) => {
    const Icon=type ==='video' ? Play :FileText;
    return (
        <div className='flex items-center justify-between p-2  text-sm '>
            <div className='flex items-center gap-2'>
                <Icon size={16} className={'text-[#e43636]'} />
                <span className={` text-[#e63030] ${completed ? ' line-through' : ''}`}>
                    {title}
                </span>
            </div>
            <span className='text-gray-500 text-xs'>{duration}</span>
            
        </div>
    );
}

export default Lesson;
