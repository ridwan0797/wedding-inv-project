import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

import SectionTitle from "./SectionTitle";
import BORDER from '../assets/border.png';
import GROOM from '../assets/groom.jpg';
import BRIDE from '../assets/bride.jpg';

function CoupleSection() {

  useEffect(() => {
    AOS.init()
  }, [])

  
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
                      <SectionTitle title={'Pengantin'} />
                    </div>
                    <div className="font-serif text-xs md:text-sm lg:text-xl mt-5 text-gray-500">
                      <div>Assalamu’alaikum Warahmatullahi Wabarakatuh</div>
                      <div className="mt-7">Dengan memohon Rahmat & Ridho Allah SWT, kami bermaksud mengundang Bapak/Ibu/Saudara/i</div>
                      <div>untuk menghadiri acara pernikahan kami:</div>
                    </div>
                  </div>

                  <div className="w-full flex flex-col md:flex-col lg:flex-row gap-10 lg:gap-3  mt-6 lg:mt-16">
                    <div 
                      className="flex-grow flex justify-center h-max" 
                      data-aos="fade-right"
                      data-aos-offset="200"
                      data-aos-delay="100"
                      data-aos-duration="1000"
                      data-aos-easing="ease-in-out"
                    >
                      <div className="flex flex-col w-full">
                        <div className="w-full h-max flex flex-row justify-center">
                          <div className="rounded-border">
                            <div className="image-container">
                              <img className="rounded-image" src={BRIDE || 'https://images.pexels.com/photos/1578877/pexels-photo-1578877.jpeg'} alt='bride' />
                            </div>
                          </div>
                        </div>
                      
                        <div className="text-wedding text-5xl mt-5"  style={{color: '#667b68'}}>Siti Wulandari</div>
                        <div className="font-serif  text-xs lg:text-sm mt-5"  style={{color: '#667b68'}}>Putri Bapak Badru dan Ibu Hermawati</div>
                        <div className="font-serif  text-xs lg:text-sm"  style={{color: '#667b68'}}>dan Bapak Apud dan Ibu Cucu</div>
                      </div>
                    </div>

                    <div 
                      className="flex-grow flex justify-center h-max mb-5"
                      data-aos="fade-left"
                      data-aos-offset="200"
                      data-aos-delay="300"
                      data-aos-duration="1000"
                      data-aos-easing="ease-in-out"
                    >
                      <div className="flex flex-col w-full">
                        <div className="w-full flex flex-row justify-center">
                          <div className="rounded-border">
                            <div className="image-container">
                              <img className="rounded-image" src={GROOM || 'https://images.pexels.com/photos/962356/pexels-photo-962356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} alt='bride' />
                            </div>
                          </div>
                        </div>

                        <div className="text-wedding text-5xl mt-5"  style={{color: '#667b68'}}>Bayu Firmansyah</div>
                        <div className="font-serif  text-xs lg:text-sm mt-5"  style={{color: '#667b68'}}>Putra Bapak Ujang Mulyana</div>
                        <div className="font-serif  text-xs lg:text-sm"  style={{color: '#667b68'}}>dan Ibu Heti Suyatdi</div>
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
