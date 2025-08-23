import { ChevronDown, ChevronUp, Clock10, Play } from 'lucide-react';
import React, { useState } from 'react';

interface SectionProps {
    id?: string;
    title?: string;
    children?: React.ReactNode;
    actions?: React.ReactNode;
    lectureCount?: number;
    className?: string;
    duration?: string;
    isExpandable?: boolean;
    defaultExpanded?: boolean;
}

const Section: React.FC<SectionProps> = ({
    id,
    title,
    children,
    actions,
    lectureCount,
    className = '',
    duration,
    isExpandable = true,
    defaultExpanded = false
}) => {
    const [isExpanded, setIsExpanded] = useState<boolean>(defaultExpanded);
    
    const toggleExpand = () => {
        if (isExpandable) {
            setIsExpanded(!isExpanded);
        }
    };

    return (
        <div id={id} className={`bg-[#E96969] border-l-4 border-red-500  ${className}`}>
            <div 
                className={`flex justify-between items-center p-4 ${isExpandable ? 'cursor-pointer ' : ''}`} 
                onClick={isExpandable ? toggleExpand : undefined}
            >
                <div className='flex items-center gap-2'>
                    {isExpandable && (
                        <div className='text-red-600'>
                            {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                        </div>
                    )}
                    <h3 className='text-red-600 font-medium'>{title}</h3>
                </div>
                <div className='flex items-center gap-2 text-xs text-gray-600'>
                    {lectureCount && (
                        <div className='flex items-center gap-1'>
                            <Play size={12} />
                            <span>{lectureCount} lectures</span>
                        </div>
                    )}
                    {duration && (
                        <div className='flex items-center gap-1'>
                         <Clock10 size={12} />   <span  > {duration}</span>
                        </div>
                    )}
                    {actions}
                </div>
            </div>
            {(!isExpandable || isExpanded) && (
                <div className='px-4 pb-4'>
                    {children}
                </div>
            )}
        </div>
    );
};

export default Section;
