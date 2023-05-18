import CoupleSection from "../component/CoupleSection";
import FirstSection from "../component/FirstSection";
import MessageSection from "../component/MessageSection";
import '../index.css';


function MainContent() {

  return (
    <div className="overflow-x-hidden flex flex-col">
      <div className="mx-0 lg:mx-14">
        <FirstSection />
      </div>

      <div>
        <MessageSection />
      </div>

      <div>
        <CoupleSection />
      </div>
    </div>
  );
}

export default MainContent;
