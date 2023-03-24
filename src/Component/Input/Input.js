import React from "react";

const Input = (props) => {
  const { error, autoFocus } = props;

  return (
    <input
      className={`${
        error && autoFocus ? "border-red" : ""
      } shadow appearance-none border rounded w-full py-2 px-3 border border-black-300 text-sm text-black-600 leading-tight focus:outline-none focus:shadow-outline`}
      id='input'
      type='text'
      placeholder='Enter text here'
      {...props}
    />
  );
};

export default Input;
