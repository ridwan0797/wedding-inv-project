import React from 'react';
import BOTTOM from '../assets/bottom.png'

const LastSection = () => {
  return (
    
    <div className='mt-[90px]'>
      <div className="w-full h-[700px] md:h-[700px] lg:h-[500px] flex justify-center items-center mt-16 " style={{backgroundColor: '#a3888c69'}}>
        <div className='font-serif text-[16px] md:text-lg lg:text-xl text-white font-medium'>
          <div className='text-wedding text-7xl'>
            Terima Kasih
          </div>
          
          <div className='mt-5 '>
            <p className="invitation-message">
              Merupakan suatu kehormatan dan kebahagiaan bagi kami <br />
              apabila Anda, <br />
              berkenan hadir dan memberikan do'a restunya <br />
              untuk keberkahan pernikahan kami.
            </p>
            <p className="mt-5">
              Atas do'a dan restunya, <br />
              kami ucapkan terima kasih yang sebesar-besarnya.
            </p>
          </div>

          <div className='text-wedding text-6xl mt-12'>
            Bayu & Wulan
          </div>

          <div className='ml-12'>
            <img src={BOTTOM} className='w-[60%] ml-12' alt='ico' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastSection;
