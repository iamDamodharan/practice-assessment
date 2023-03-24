import React from "react";
import Input from "./Input";

const RangeInput = (props) => {
  const { label, required, minProps, maxProps } = props;
  const error =
    (minProps.id === minProps.focus && minProps.error && minProps.autoFocus) ||
    (maxProps.id === maxProps.focus && maxProps.error && maxProps.autoFocus);
  return (
    <div className='mb-6'>
      <label className='block text-sm font-medium mb-1'>
        {label}
        {required ? <span className='text-red'>*</span> : ""}
      </label>
      <div className='flex flex-column item-start justify-start'>
        <div className='w-full mr-4'>
          <Input {...minProps} />
        </div>
        <div className='w-full'>
          <Input {...maxProps} />
        </div>
      </div>
      {error && (
        <p className='text-red text-xs italic'>
          {minProps.error || maxProps.error}
        </p>
      )}
    </div>
  );
};

export default RangeInput;
