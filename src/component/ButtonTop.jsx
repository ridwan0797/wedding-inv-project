import React, { useState } from 'react';
import { MdKeyboardArrowUp } from "react-icons/md"
 
const ButtonTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const yOffset = window.pageYOffset;
    if (yOffset > 0) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100); // Penundaan selama 100 milidetik (1 detik)
  };

  // Tambahkan event listener pada mount komponen
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {isVisible && (<div className="round-button shadow-md scroll-to-top-button show text-red-500" onClick={scrollToTop}>
      <MdKeyboardArrowUp color='#6B7280' size={'30px'} />

    </div>

      )}
    </div>
  );
};

export default ButtonTop;
