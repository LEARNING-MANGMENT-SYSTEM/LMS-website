import React from 'react'
interface props{
  setFiles:React.Dispatch<React.SetStateAction<File[]>>,
  title:string
}
function DroporChooseFile({setFiles,title}:props) {
    const handleDrop=(e: React.DragEvent<HTMLDivElement>)=>{
    let file: File | null = null;
    e.preventDefault()
    if(e.dataTransfer.items){
      const item = [... e.dataTransfer.items]
      .find(
        (item)=> item.kind=="file"
      )
      if(item){
        file = item.getAsFile()
      }

    
    }
    else{
      file =e.dataTransfer.files[0]
    }
    if(file){
      setFiles((prev) => [...prev, file]);
    }

  }

    const handleDrag=(e:React.DragEvent<HTMLDivElement>)=>{
    e.preventDefault()

  }

  const handleBrowseFile=(e:React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
          setFiles((prev) => [...prev, file]);
        }
      }
  return (
      <div onDragOver={handleDrag} onDrop={handleDrop} className=" flex flex-col items-center border-1 border-gray-200  p-4">
            <div className="font-bold ">{title}</div>
            <div className="flex gap-1">
              <div className="text-gray-500"> drag and drop a file or </div>
              <label htmlFor="attachFile" className="text-gray-700">browse file</label>
              <input type="file" id="attachFile" accept="image/*" className=" hidden" 
              onChange={handleBrowseFile}/>
            </div>
          </div>
  )
}

export default DroporChooseFile