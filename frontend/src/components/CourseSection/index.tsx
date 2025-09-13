import { ChevronDown, ChevronUp, Clock, Play } from "lucide-react";
import { useState } from "react";

interface CourseSectionProps {
    id?: string;
    title?: string;
    children?: React.ReactNode;
    lectureCount?: number;
    duration?: string;
    isExpandable?: boolean;
    defaultExpanded?: boolean;
    completed?: boolean;
    progress?: number;
}

const CourseSection: React.FC<CourseSectionProps> = ({
    id,
    title,
    children,
    lectureCount,
    duration,
    isExpandable = true,
    defaultExpanded = false,
    // completed = false,
    progress = 0
}) => {
    const [isExpanded, setIsExpanded] = useState<boolean>(defaultExpanded);
    
    const toggleExpand = () => {
        if (isExpandable) {
            setIsExpanded(!isExpanded);
        }
    };

    return (
        <div id={id} className='border-b border-gray-200'>
            <div 
                className={`flex justify-between items-center p-4 ${isExpandable ? 'cursor-pointer hover:bg-gray-50' : ''}`} 
                onClick={isExpandable ? toggleExpand : undefined}
            >
                <div className='flex items-center gap-3'>
                    {isExpandable && (
                        <div className='text-gray-400'>
                            {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                        </div>
                    )}
                    <h3 className='text-gray-800 font-medium text-sm'>{title}</h3>
                </div>
                
                <div className='flex items-center gap-4 text-xs text-gray-500'>
                    {lectureCount && (
                        <div className='flex items-center gap-1'>
                            <Play size={12} className='text-purple-500' />
                            <span>{lectureCount} lectures</span>
                        </div>
                    )}
                    {duration && (
                        <div className='flex items-center gap-1'>
                            <Clock size={12} className='text-orange-500' />
                            <span>{duration}</span>
                        </div>
                    )}
                    {progress > 0 && (
                        <div className='flex items-center gap-1'>
                            <span className='text-green-500'>{Math.round(progress)}% finish</span>
                        </div>
                    )}
                </div>
            </div>
            
            {(!isExpandable || isExpanded) && (
                <div className='bg-white'>
                    {children}
                </div>
            )}
        </div>
    );
};
export default CourseSection 