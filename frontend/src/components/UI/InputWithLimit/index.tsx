import { useCallback, useState } from 'react'
import type { InputProps } from '../Input/props';
import Input from '../Input';

type InputWithLimitProps = InputProps & {
  limit: number; 
};
function InputWithLimit({ limit, onChange, ...props }: InputWithLimitProps) {
 const [charCount,setCharCount] = useState(0)
  const updateChar = useCallback((e:React.ChangeEvent<HTMLInputElement>)=>{
    setCharCount(e.target.value.length);
    if(onChange)
        onChange(e)
  },[])

  return (
    <Input
      {...props}
      onChange={updateChar} 
      rightIcon={
        <span className='text-gray-500 px-1 min-w-15 text-sm absolute right-0'>{charCount} / {limit}</span>
      }
    />
  )
}

export default InputWithLimit