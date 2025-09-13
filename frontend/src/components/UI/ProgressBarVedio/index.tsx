import React from 'react';

interface ProgressBarVedioProps {
    currentTime: number;
    duration: number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ProgressBarVedio:React.FC<ProgressBarVedioProps> = ({
    currentTime,
    duration,
    onChange
}) => {
    const progress=duration ?(currentTime/duration)*100 :0;
    return (
        <div className='absolute bottom-12 left-0 right-0 px-4'>
            <div className='relative w-full h-1 bg-gray-600 rounded'>
                <div
                className='h-1 bg-orange-500 rounded-full transition-all duration-150'
                style={{width:`${progress}%`}}
                />
            </div>
            <input type='range' max={duration||0} min={0} value={currentTime} onChange={onChange} 
            className='absolute top-0 left-0 w-full h-1 opacity-0 cursor-pointer'
            />
            
        </div>
    );
}

export default ProgressBarVedio;
