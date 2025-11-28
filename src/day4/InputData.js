import { useState } from "react"

const InputData = ({title}) => {
    const [text,setText] = useState('');
    const handleChange = (e)=>{
        setText(e.target.value);
    }
  return (
    <div className="input-data">
        <input 
            type={type}
            placeholder=" "
            value={value}
            onChange={onChange}
            onBlur={onBlur}
        />
        <label>{title}</label>
    </div>
  )
}

export default InputData