import React from 'react';

interface CourseContentsProps {
    title?: string;
    overallProgress?: number;
    children?: React.ReactNode;
}

const CourseContents: React.FC<CourseContentsProps> = ({
    title = 'Course Contents',
    overallProgress = 0,
    children
}) => {
    return (
        <div className='mx-auto bg-white rounded-lg shadow-sm border border-gray-200'>
            <div className='p-4 border-b border-gray-200 flex justify-between items-center'>
                <h2 className='text-lg font-bold text-gray-800'>{title}</h2>
                <div className='text-sm font-medium text-green-500'>
                    {overallProgress}% Completed
                </div>
            </div>
            
            <div>
                {children}
            </div>
        </div>
    );
};
export default CourseContents