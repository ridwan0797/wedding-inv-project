import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

const Dialog = ({ backgroundImage,  onClose }) => {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();
  const parsed = queryString.parse(location.search);
  const to = parsed.to;

  const dialogStyle = {
    width: '100%',
    height: '100%',
    background: `url(${backgroundImage || 'https://images.pexels.com/photos/1721943/pexels-photo-1721943.jpeg'})`,
    backgroundRepeatX: 'no-repeat',
    backgroundRepeatY: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    position: 'fixed',
    bottom: isOpen ? '0' : '100%',
    left: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'bottom 0.9s ease',
  };

  const overlayStyle = {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  };

  const contentStyle = {
    textAlign: 'center',
    color: 'white',
    zIndex: 1,
  };

  const handleButtonClick = () => {
    setIsOpen(false)
    setTimeout(() => {
      onClose();
    }, 1000);
  };

  return (
    <div style={dialogStyle} className='z-40'>
      <div style={overlayStyle} />
      <div style={contentStyle}>
        <h1 className='font-serif text-xs md:text-sm lg:text-lg tracking-[5px] lg:tracking-[9px]'>Wedding Invitation</h1>
        <h1 className='text-wedding text-[65px] md:text-[75px] lg:text-[100px] my-10'>Bayu & Wulan</h1>
        <h1 className='text-lg font-serif italic'>Dear, {to || 'Invited Guests'}</h1>
        
        <div>
          <button className='buttonWelcome mt-5' onClick={handleButtonClick}>
            Click Here To Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
