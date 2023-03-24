import React from "react";
import Radio from "./Radio";

const RadioGroup = (props) => {
  const { label, required, radioProps } = props;
  return (
    <div className='flex flex-col justify-start'>
      <div>
        <label className='block text-gray-700 text-sm font-bold mb-2'>
          {label}
          {required ? <span className='text-red-500'>*</span> : ""}
        </label>
      </div>
      <div className='flex flex-row justify-start item-start'>
        {radioProps && radioProps.map((prop) => <Radio key={prop.id} {...prop} />)}
      </div>
    </div>
  );
};

export default RadioGroup;
