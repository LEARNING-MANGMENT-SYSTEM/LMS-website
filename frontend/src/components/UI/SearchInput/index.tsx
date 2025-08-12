import Input from '../Input'
import MagnifyingGlass from '../../../assets/MagnifyingGlass.png'
import type { InputProps } from '../Input/props'
function SearchInput(props:InputProps) {
  return (
    <Input leftIcon={<img src={MagnifyingGlass}/>} placeholder='Search' {...props} />
  )
}

export default SearchInput