import React from 'react';

interface ProgressBarProps {
    progress: number; 
    maxValue?: number;
    showPercentage?: boolean;
}
const ProgressBar:React.FC<ProgressBarProps> = ({progress,maxValue=100,showPercentage=true}) => {
 
    const percentage = Math.min(Math.max(progress, 0), maxValue) / maxValue * 100;

    return (
        <div className="w-full">
            <div className='flex items-center gap-3'>
                <div className='flex-1  bg-orange-100 rounded-full overflow-hidden h-3'>
                    <div className='h-full bg-orange-500 transition-all duration-300 ease-out' style={{width:`${percentage}%`}} />
                </div>
                {showPercentage && (
                    <span className='text-sm font-semibold text-right text-gray-600'>
                        {Math.round(percentage)}%
                    </span>
                )}
            </div>
        </div>
    );
}

export default ProgressBar;
