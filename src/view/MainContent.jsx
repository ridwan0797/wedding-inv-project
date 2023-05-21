import CoupleSection from "../component/CoupleSection";
import DetailSection from "../component/DetailSection";
import FirstSection from "../component/FirstSection";
import GallerySection from "../component/GallerySection";
import LastSection from "../component/LastSection";
import MessageSection from "../component/MessageSection";
import '../index.css';


function MainContent() {

  return (
    <div className="flex flex-col">
      <div className="mx-0 lg:mx-14">
        <FirstSection />
      </div>

      <div>
        <MessageSection />
      </div>

      <div>
        <CoupleSection />
      </div>

      <div>
        <DetailSection />
      </div>

      <div>
        <GallerySection />
      </div>

      <div>
        <LastSection />
      </div>
    </div>
  );
}

export default MainContent;
