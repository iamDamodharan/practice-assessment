import React from "react";
import Input from "./Input";

const TextInput = (props) => {
  const { id, label, required, error, autoFocus, focus } = props;
  
  return (
    <div className='mb-4'>
      <label
        className='block text-gray-700 text-sm font-bold mb-2'
        htmlFor={id || "input"}
      >
        {label}
        {required ? <span className='text-red'>*</span> : ""}
      </label>
      <Input {...props} />
      {id === focus && error && autoFocus && <p className='text-red text-xs italic'>{error}</p>}
    </div>
  );
};

export default TextInput;
