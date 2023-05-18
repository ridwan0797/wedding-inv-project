import ICON from '../assets/flower-main.png'

function MessageSection() {

  return (
    <div className="w-full h-[500px] lg:h-[500px] flex justify-center items-center lg:mt-0" style={{backgroundColor: '#a3888c69'}}>
      <div className="w-[90%] lg:w-[50%] text-2xl font-medium text-justify text-white font-serif">
        <div className='flex justify-center'><img src={ICON} className='w-32 h-32' alt='ico' /></div>
        <div className='mt-12 text-lg lg:text-2xl'>“Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang.”</div>
        <div className="text-center text-lg lg:text-2xl mt-4">(QS Ar-Rum : 21)</div>
      </div>
    </div>
  );
}

export default MessageSection;
