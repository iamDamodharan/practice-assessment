import React from "react";

const OverlayPopup = (props) => {
  const { show, onClose } = props;

  if (!show) return;

  return (
    <div className='fixed z-10 inset-0 overflow-y-auto'>
      <div className='flex items-center justify-center min-h-screen'>
        <div className='fixed inset-0 transition-opacity'>
          <div
            className='absolute inset-0 bg-[#F5F5F5] opacity-90'
            onClick={() => onClose()}
          ></div>
        </div>
        <div className='bg-white border border-black-300 rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full'>
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default OverlayPopup;
