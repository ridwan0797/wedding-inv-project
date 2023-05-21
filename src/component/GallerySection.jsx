import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

import SectionTitle from "./SectionTitle";
import Gallery1 from '../assets/gallery-1.jpg'
import Gallery2 from '../assets/gallery-2.jpg'
import Gallery3 from '../assets/gallery-3.jpg'
import Gallery4 from '../assets/gallery-5.jpg'


function GallerySection({backgroundImage}) {
  useEffect(() => {
    AOS.init()
  }, [])
  
  return (
    <div className="bg-white h-max w-full mt-12">
      <div>
        <div className="my-12 mt-24">
          <SectionTitle className='mt-6' title={'Galeri'} />  
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mx-4">
          <div
            data-aos="fade"
            data-aos-offset="200"
            data-aos-delay="100"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <img className="h-auto max-w-full " src={Gallery4 || "https://images.pexels.com/photos/8459434/pexels-photo-8459434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} alt="" />
          </div>
          <div
            data-aos="fade"
            data-aos-offset="200"
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <img className="h-full w-full bg-cover" src={Gallery1 || "https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} alt="" />
          </div>
          <div
            data-aos="fade"
            data-aos-offset="200"
            data-aos-delay="300"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <img className="h-auto max-w-full "src={Gallery2 || "https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} alt="" />
          </div>
          <div
            data-aos="fade"
            data-aos-offset="200"
            data-aos-delay="400"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <img className="h-auto max-w-full " src={Gallery3 || "https://images.pexels.com/photos/219776/pexels-photo-219776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GallerySection;
