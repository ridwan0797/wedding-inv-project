import SectionTitle from "./SectionTitle";
import BORDER from '../assets/border.png'

function CoupleSection() {
  
  return (
    <div className="w-full h-max lg:h-[1060px] flex justify-center items-center">
      <div className="w-[85%] h-[80%] shadow-2xl relative">
        <div className="absolute top-3 lg:top-0 w-auto"><img src={BORDER} alt='border' /></div>
        <div className="absolute bottom-1 lg:bottom-0 w-auto"><img src={BORDER} alt='border' /></div>

        <div className="w-full h-auto flex mt-2 lg:mt-2">
          <div className="m-3 border w-full h-max lg:h-auto flex" style={{borderColor: '#D9CED0'}}>
            <div className="m-3 w-full h-auto flex">
              <div className="flex w-full justify-center">
                <div className="flex flex-col">
                  <div>
                    <div>
                      <SectionTitle title={'Bride & Groom'} />
                    </div>
                    <div className="font-serif text-xs md:text-sm lg:text-xl mt-5 text-gray-500">
                      <div>Assalamu’alaikum Warahmatullahi Wabarakatuh</div>
                      <div className="mt-7">Dengan memohon Rahmat & Ridho Allah SWT, kami bermaksud mengundang Bapak/Ibu/Saudara/i</div>
                      <div>untuk menghadiri acara pernikahan kami:</div>
                    </div>
                  </div>

                  <div className="w-full flex flex-col md:flex-col lg:flex-row gap-10 lg:gap-3  mt-6 lg:mt-16">
                    <div className="flex-grow flex justify-center h-max">
                      <div className="flex flex-col w-full">
                        <div className="w-full h-[400px] flex flex-row justify-center">
                          <img className="w-[250px] h-full" src='https://images.pexels.com/photos/1578877/pexels-photo-1578877.jpeg' alt='bride' />
                        </div>
                      
                        <div className="text-wedding text-5xl mt-5"  style={{color: '#A3888C'}}>Siti Wulandari</div>
                        <div className="font-serif  text-xs lg:text-sm mt-5"  style={{color: '#A3888C'}}>Putri Bapak Badru dan Ibu Hermawati</div>
                        <div className="font-serif  text-xs lg:text-sm"  style={{color: '#A3888C'}}>dan Bapak Apud dan Ibu Cucu</div>
                      </div>
                    </div>

                    <div className="flex-grow flex justify-center h-max">
                      <div className="flex flex-col w-full">
                        <div className="w-full h-[400px] flex flex-row justify-center">
                          <img className="w-[250px] h-full" src='https://i.pinimg.com/564x/f2/90/dc/f290dc4fef4de92bd62e9c7ed14951c5.jpg' alt='bride' />
                        </div>

                        <div className="text-wedding text-5xl mt-5"  style={{color: '#A3888C'}}>Bayu Firmansyah</div>
                        <div className="font-serif  text-xs lg:text-sm mt-5"  style={{color: '#A3888C'}}>Putra Bapak Ujang Mulyana</div>
                        <div className="font-serif  text-xs lg:text-sm"  style={{color: '#A3888C'}}>dan Ibu Heti Suyatdi</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoupleSection;
