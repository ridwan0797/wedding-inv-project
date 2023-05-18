import TOP from '../assets/top.png'
import BOTTOM from '../assets/bottom.png'
import MAIN from '../assets/flower-main.png'
import SECOND from '../assets/flower-secondary.png'
import Countdown from './CountdownTime';

function FirstSection() {
  const targetDate = new Date('2023-05-27T00:00:00').getTime(); // Tanggal target (YYYY-MM-DDTHH:mm:ss)

  return (
    <div className="w-full h-full md:h-max lg:h-max">
      <div className="mx-2 lg:mx-12 mt-6 lg:mt-0 h-full flex flex-col md:flex-col lg:flex-row gap-2 lg:gap-12">
        <div className="flex-grow lg:flex-none w-full md:w-[100%] lg:w-[60%] ">
          <div className="flex flex-col justify-center my-6 lg:my-28 gap-0 ml-0 lg:ml-32">
            <div className='flex justify-center lg:justify-start'>
              <img src={TOP} alt={'icon'} />
            </div>

            <div className='my-7 md:my-16 lg:my-24'>
              <div className='text-5xl md:text-7xl lg:text-[100px] text-center lg:text-left text-wedding color-core' style={{color: '#A3888C'}}>
                Bayu & Wulan
              </div>

              <div className='mt-2 lg:mt-2 text-center lg:text-left text-xl lg:text-xl font-sans text-gray-500'>
                WE ARE GETTING MARRIED ON SATURDAY 27 MEI 2023
              </div>

              <div>
                <Countdown targetDate={targetDate} />
              </div>
            </div>

            <div className='flex justify-center lg:justify-start'>
              <img src={BOTTOM} alt={'icon'} />
            </div>
          </div>
        </div>

        <div className="lg:flex-grow my-2 lg:my-12 flex justify-center">
          <div className=' w-[70%] md:w-full lg:w-full h-full relative' style={{maxWidth: '480px'}} >
            <div className='absolute bottom-0'>
              <img src={MAIN} alt='icon' />
            </div>

            <div className='absolute top-0 right-7' >
              <img src={SECOND} alt='icon' />
            </div>

            <div className='w-auto h-full flex justify-center align-middle'>
              <div className='flex mx-6 lg:mx-0 my-14 lg:my-14 shadow-xl bg-white z-10'>
                <img className='m-1 lg:m-6' style={{minWidth: '300px'}} src='https://images.pexels.com/photos/1587042/pexels-photo-1587042.jpeg' alt='wedding' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstSection;
