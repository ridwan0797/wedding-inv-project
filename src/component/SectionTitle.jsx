import ICON from '../assets/icon.png'

function SectionTitle({title}) {
  return(
    <div className='relative pt-7'>
      <div className="absolute top-9 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <img src={ICON} className='w-12 h-12' alt='logo' />
      </div>
      <div className='text-wedding text-5xl mt-2' style={{color: '#667b68'}}>
        {title}
      </div>
    </div>
  )
}

export default SectionTitle;