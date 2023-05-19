import SectionTitle from "./SectionTitle";

function GallerySection({backgroundImage}) {
  
  return (
    <div className="bg-white h-max w-full mt-12">
      <div>
        <div className="my-12 mt-24">
          <SectionTitle className='mt-6' title={'Gallery'} />  
        </div>

        <div className="grid grid-cols-3 md:grid-cols-4 gap-2 mx-4">
          <div>
            <img className="h-auto max-w-full " src="https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full " src="https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full " src="https://images.pexels.com/photos/219776/pexels-photo-219776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full " src="https://images.pexels.com/photos/8459434/pexels-photo-8459434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full " src="https://images.pexels.com/photos/931796/pexels-photo-931796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full " src="https://images.pexels.com/photos/13150681/pexels-photo-13150681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full " src="https://images.pexels.com/photos/265856/pexels-photo-265856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full " src="https://images.pexels.com/photos/16561194/pexels-photo-16561194/free-photo-of-mision-lago-estate-wedding.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GallerySection;
