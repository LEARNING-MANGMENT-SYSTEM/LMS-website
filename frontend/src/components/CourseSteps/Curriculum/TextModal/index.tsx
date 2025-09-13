
import Modal from '../../../Modal'
interface TextModalProps {
  title: string;
  value: string;
  onChange: (val: string) => void;
  onClose: () => void;
  onSubmit: () => void;
  placeholder: string;
  buttonLabel: string;
  id: string;
  isDisabled:boolean
}
function TextModal( {title, value, onChange, onClose, onSubmit, placeholder, buttonLabel, id, isDisabled}:TextModalProps) {
  return (
      <Modal
          headerName={title}
          buttonName={buttonLabel}
          buttonClick={onSubmit}
          onclose={onClose}
          isDisabled={isDisabled}
        >
          <label htmlFor={id} className="font-bold">
            {title}
          </label>
          <textarea
            value={value}
            onChange={(e)=>onChange(e.target.value)}
            className="resize-none w-full border-2 mt-2 border-gray-300 p-2"
            placeholder={placeholder}
            rows={5}
            id={id}
          />
        </Modal>
  )
}

export default TextModal