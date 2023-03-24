import React from "react";

const Button = (props) => {
  const { variant } = props;

  if (variant === "text") {
    return (
      <button
        className='inline-flex justify-center px-4 py-2 font-medium text-base bg-white text-primary border border-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
        {...props}
      />
    );
  } else if (variant === "outlined") {
    return (
      <button
        className='inline-flex justify-center px-4 py-2 font-medium	text-base bg-white text-primary border border-primary rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
        {...props}
      />
    );
  } else if (variant === "contained") {
    return (
      <button
        className='inline-flex justify-center px-4 py-2 font-medium	text-base bg-primary text-white border border-primary rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
        {...props}
      />
    );
  }
  return (
    <button
      className='inline-flex justify-center px-4 py-2 font-medium	text-base bg-primary text-white border border-primary rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
      {...props}
    />
  );
};

export default Button;
