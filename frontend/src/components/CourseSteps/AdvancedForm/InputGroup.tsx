import Button from "../../UI/Button";
import Input from "../../UI/Input";

interface props{
  title:string;
  placeholder:string;
  inputs:string[]
  setInputs:(param:string[])=>void
}
const InputGroup = ({title,placeholder, inputs,setInputs}:props) => {
  
  const addNewInput=()=>{
    setInputs([...inputs,""])
  }

  return (
    <div className="border-b-2 border-b-gray-200 py-10">
    <div className="font-bold flex justify-between items-center ">
      {title}
      <Button variant="text" onclick={addNewInput}>+ Add new</Button>
      </div>
    {
      inputs.map((value:string, index:number)=>(
        <div key={index}>
          <Input placeholder={placeholder}
          label={`0${index+1}`}
          value={value}
          onChange={(e)=>{
            const updatedInputs=[...inputs];
            updatedInputs[index]=e.target.value
            setInputs(updatedInputs)
          }}
          />
        </div>
      ))
    }

    </div>
  )
}

export default InputGroup