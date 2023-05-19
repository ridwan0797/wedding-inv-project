import SectionTitle from "./SectionTitle";
import BORDER from '../assets/border.png'

function CoupleSection() {
  
  return (
    <div className="w-full h-max lg:h-[875px] flex justify-center items-center">
      <div className="w-[85%] h-[80%] shadow-2xl relative">
        <div className="absolute top-3 lg:top-2 w-auto"><img src={BORDER} alt='border' /></div>
        <div className="absolute bottom-1 lg:bottom-3 w-auto"><img src={BORDER} alt='border' /></div>

        <div className="w-full h-auto flex  mt-2 lg:mt-2">
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
                        <div className="w-full h-max flex flex-row justify-center">
                          <div className="rounded-border">
                            <div className="image-container">
                              <img className="rounded-image" src='https://images.pexels.com/photos/1578877/pexels-photo-1578877.jpeg' alt='bride' />
                            </div>
                          </div>
                        </div>
                      
                        <div className="text-wedding text-5xl mt-5"  style={{color: '#A3888C'}}>Siti Wulandari</div>
                        <div className="font-serif  text-xs lg:text-sm mt-5"  style={{color: '#A3888C'}}>Putri Bapak Badru dan Ibu Hermawati</div>
                        <div className="font-serif  text-xs lg:text-sm"  style={{color: '#A3888C'}}>dan Bapak Apud dan Ibu Cucu</div>
                      </div>
                    </div>

                    <div className="flex-grow flex justify-center h-max mb-5">
                      <div className="flex flex-col w-full">
                        <div className="w-full flex flex-row justify-center">
                          <div className="rounded-border">
                            <div className="image-container">
                              <img className="rounded-image" src='https://images.pexels.com/photos/962356/pexels-photo-962356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='bride' />
                            </div>
                          </div>
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
