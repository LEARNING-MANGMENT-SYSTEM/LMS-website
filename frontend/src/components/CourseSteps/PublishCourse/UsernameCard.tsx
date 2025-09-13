import { X } from 'lucide-react'
import avatar from '../../../assets/avatar.png'
interface props{
  name:string;
  track:string;
  onclick:(param:number)=>void;
  id:number
}
const UsernameCard = ({name,track, onclick,id}:props) => {
  return (
    <div className="bg-gray-200  p-5 flex   justify-between">
    <div className='flex gap-4'>
        <img src={avatar} className=' rounded-full w-15  bg-white'/>

      <div className='flex-col'>
        <div className='font-bold'>{name}</div>
        <div className='text-gray-600'>{track}</div>
      </div>
    </div>

    <X size={25} onClick={()=>onclick(id)}/>

    </div>
  )
}

export default UsernameCard