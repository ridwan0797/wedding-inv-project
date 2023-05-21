import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

import BGDIALOG from '../assets/bg-dialog.jpeg'

const Dialog = ({ onClose }) => {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();
  const parsed = queryString.parse(location.search);
  const to = parsed.to;

  const dialogStyle = {
    width: '100%',
    height: '100%',
    background: `url(${BGDIALOG || 'https://images.pexels.com/photos/1094995/pexels-photo-1094995.jpeg?auto=compress&cs=tinysrgb&w=1600'})`,
    backgroundColor: 'white',
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
        <h1 className='font-serif text-xs md:text-sm lg:text-lg tracking-[5px] lg:tracking-[9px]'>Undangan Pernikahan</h1>
        <h1 className='text-wedding text-[65px] md:text-[75px] lg:text-[100px] my-10'>Bayu & Wulan</h1>
        <h1 className='text-lg font-serif italic'>Dear, {to || 'Tamu Undangan'}</h1>
        
        <div>
          <button className='buttonWelcome mt-5' onClick={handleButtonClick}>
            Buka Undangan di sini
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
