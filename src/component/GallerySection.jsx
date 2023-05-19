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
            <img className="h-auto max-w-full " src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full " src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full " src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full " src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full " src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full " src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg" alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full " src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg" alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full " src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GallerySection;
