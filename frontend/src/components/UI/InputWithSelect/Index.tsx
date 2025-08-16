import Input from '../Input'
import type { InputProps } from '../Input/props'

type InputWithSelectProps = InputProps & {
  options?: string[];
  selectProps?: React.SelectHTMLAttributes<HTMLSelectElement>; 
};

function InputWithSelect({ options = ["Day", "Month", "Week"], selectProps, ...props }: InputWithSelectProps) {
  return (
    <Input
      {...props}
      
      rightIcon={
        <select {...selectProps} className='h-full outline-0 absolute right-0 max-w-13 text-gray-500 '>
          {options.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </select>
      }
    />
  );
}

export default InputWithSelect