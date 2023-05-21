import React, { useEffect, useState } from 'react';

const Countdown = ({ targetDate }) => {
  const [countdown, setCountdown] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setCountdown({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [targetDate]);

  return (
    <div className='text-gray-500 font-serif text-3xl md:text-4xl lg:text-7xl flex flex-row justify-center lg:justify-start mt-4 lg:mt-12 gap-4 lg:gap-16'>
      <div className='flex flex-col gap-3'>
        <div>{countdown.days}</div> 
        <div className='font-sans text-sm lg:text-2xl'>Hari</div>
      </div>

      <div className='flex flex-col gap-3'>
        <div>{countdown.hours}</div> 
        <div className='font-sans text-sm lg:text-2xl'>Jam</div>
      </div>

      <div className='flex flex-col gap-3'>
        <div>{countdown.minutes}</div> 
        <div className='font-sans text-sm lg:text-2xl'>Menit</div>
      </div>
      
      <div className='flex flex-col gap-3'>
        <div>{countdown.seconds}</div> 
        <div className='font-sans text-sm lg:text-2xl'>Detik</div>
      </div>
    </div>
  );
};

export default Countdown;
