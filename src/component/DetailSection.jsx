import BG from '../assets/bg.jpg'
import SectionTitle from './SectionTitle';

function DetailSection({backgroundImage}) {

  const bgCaw = {
    
    background: `url(${BG || 'https://wpocean.com/html/tf/nozze/assets/images/event/1.jpg'})`,
    backgroundColor: 'white',
    backgroundRepeatX: 'no-repeat',
    backgroundRepeatY: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }
  
  return (
    <div>
      <div className="w-full h-[700px] lg:h-[700px] justify-center items-center mt-16 md:mt-16 lg:mt-0 hidden md:flex lg:flex" style={{backgroundColor: '#a3888c69'}}>
        <div className='m-32 w-full h-[500px] bg-red-300 flex justify-end' style={bgCaw}>
          <div className='m-5 w-[400px] bg-white flex items-center justify-center'>
            <div>
              <SectionTitle title={'Reception'} />

              <div className='mt-5 font-serif text-gray-500'>
                <div>Saturday, 27 Mei 2023</div>
                <div>10.00 - 15.00</div>

                <div className='mt-4'>4517 Washington Ave.</div>
                <div>Manchester, Kentucky 39876.</div>
              </div>

              <div className='font-serif underline mt-5 cursor-pointer' style={{color: '#A3888C'}}>
                See Location
              </div>
            </div>
          </div>
        
        </div> 
      </div>

      <div className="w-full h-[800px] mt-16 justify-center items-center flex md:hidden lg:hidden" style={{backgroundColor: '#a3888c69'}}>
        <div className='bg-white w-[90%] h-[500px] flex flex-col'>
          <div className='flex-none h-[35%] bg-orange-300' style={bgCaw}>

          </div>

          <div className='flex-grow'>
            <div>
              <SectionTitle title={'Reception'} />

              <div className='mt-5 font-serif text-gray-500'>
                <div>Saturday, 27 Mei 2023</div>
                <div>10.00 - 15.00</div>

                <div className='mt-4'>4517 Washington Ave.</div>
                <div>Manchester, Kentucky 39876.</div>
              </div>

              <div className='font-serif underline mt-5 cursor-pointer' style={{color: '#A3888C'}}>
                See Location
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailSection;
