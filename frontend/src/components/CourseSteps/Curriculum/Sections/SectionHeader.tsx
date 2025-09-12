
import { Edit3Icon, List, Plus, Trash2Icon } from "lucide-react";
import { useState } from "react";
import Modal from "../../../Modal";
import Input from "../../../UI/Input";
interface props{
  number:number
}
const SectionHeader = ({number}:props) => {
  const [sectionName, setSectionName]=useState("section name")
  const [inputValue,setInputValue]=useState("")
  const [isOpen,setIsOpen]=useState(false)
  const handleClick=()=>{
    setSectionName(inputValue)
    toggleModal()
  }
  const toggleModal=()=>{
    setIsOpen((prev)=>!prev)
  }
  return (
    <>
        <header className="flex justify-between p-3">
        
        <div className="flex items-center gap-2">
          <List size={20} />
          <p className="  font-bold">Sections 0{number}:</p>
          <p>{sectionName}</p>
        </div>

        <div className="flex gap-3 text-gray-500 ">
          <Plus size={20} />
          <Edit3Icon size={20} onClick={toggleModal} />
          <Trash2Icon size={20} />
        </div>

      </header>
    {
      isOpen&&(
          <Modal onclose={toggleModal} headerName="Edit Section Name" buttonName="SaveChanges" buttonClick={handleClick} isDisabled={false} >

        <Input label="section" placeholder=" write your section name here ..." value={inputValue} onChange={(e)=> setInputValue(e.target.value)}/>
      </Modal>
      )
    }


    </>

  )
}

export default SectionHeader