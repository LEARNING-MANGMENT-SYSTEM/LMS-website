import React from 'react';
import FileUploadForm from '../FileUploadForm/FileUploadForm';
interface NotesFormprops {
    notes: string;
    onNotesChange:(notes:string)=>void;
    placeholder?: string;
    maxLength?:number;
    rows?:number
}

const NotesForm :React.FC<NotesFormprops> = ({notes,onNotesChange,placeholder,maxLength=1000,rows=4}) => {

    // const fileInputRef=useRef<HTMLInputElement>(null);
    const handleNotesChange=(e:React.ChangeEvent<HTMLTextAreaElement>):void=>{
        const newNotes=e.target.value;
        if(newNotes.length<=maxLength){
            onNotesChange(newNotes)
        }
    };
// const handleFileUpload=(e:React.ChangeEvent<HTMLInputElement>):void=>{
//     const files = e.target.files;
//     if (files && files.length > 0) {
//         onFileUpload(files[0]);
//     }
// }
//  const handleBrowserClick=():void=>{
//     fileInputRef.current?.click();
//  }
 const remainingChars = maxLength - notes.length;


    return (
        <div className='space-y-4'>
            <div >
                <label htmlFor="notes-textarea" className='block text-sm font-medium text-gray-700'>
                    Notes
                </label>
                <textarea
                id='notes-textarea'
                    value={notes}
                    onChange={handleNotesChange}
                    placeholder={placeholder || 'Add your notes here...'}
                    maxLength={maxLength}
                    rows={rows}
          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-colors ${
            remainingChars < 50 ? 'border-orange-300' : 'border-gray-300'
          }`}                />
          <div className='flex justify-between items-center mt-2'>
            {/* <span className={`text-sm ${remainingChars < 50 ? 'text-orange-600' : 'text-gray-500'}`}>
                {remainingChars} characters remaining
            </span> */}
           
            </div>
           
            </div>
            <FileUploadForm onFileSelect={():void=>{}} />
        </div>
    );
}

export default NotesForm;
