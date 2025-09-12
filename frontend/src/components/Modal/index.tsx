import { X } from 'lucide-react'
import React from 'react'
import Button from '../UI/Button'
interface props{
  children:React.ReactNode,
  buttonName:string,
  buttonClick:()=>void,
  headerName:string,
  onclose:()=>void;
  isDisabled:boolean
}
const Modal = ({children, buttonName, buttonClick, headerName,onclose, isDisabled}:props) => {
  return (
    <div className='bg-black/60  flex items-center justify-center fixed top-0 right-0 left-0 z-50 max-h-full h-[calc(100%)] '>
    <div className='bg-white relative max-h-full overflow-y-auto  w-160 max-w-full '>
      <header className=' border-b-2 border-gray-200 flex justify-between p-4 font-bold'>
        {headerName}
        <X onClick={onclose}/>
      </header>

      <main className='p-4 flex-1 '>
    
        {children}
      </main>

      <footer className='   px-7 py-3 flex justify-between'>
            <Button variant='text' onclick={()=>{}} >
              Cancel
            </Button>

              <Button  onclick={buttonClick} isDisabled={isDisabled} >
              {buttonName}
            </Button>
      </footer>

    </div>
    
    </div>
  )
}

export default Modal