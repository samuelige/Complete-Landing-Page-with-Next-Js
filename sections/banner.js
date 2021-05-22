import Image from 'next/image'
import Button from '../components/button'
import illustration from '../assets/illustration-intro.svg'

export default function Banner() {
  return (
    <section className='px-3 mt-28  md:px-8 lg:px-12 md:mt-40 lg:mt-7 relative'  id='home'>
      <div className=' flex flex-col-reverse md:grid md:grid-cols-2 '>
        <div className=' md:mt-12 lg:mt-20 space-y-10'>
          <h1 className='text-3xl text-midnightblue pr-5 tracking-wider sm:text-4xl md: lg:text-5xl font-sans font-bold lg:pr-14'>
            Bring everyone together to build better products.
          </h1>
          <p className=' text-gray-600  md:pr-30 lg:pr-56'>
            manage makes it simple it simple for software templates
            to plan day-to-day tasks while keeping the
            larger team goals in view.
          </p>
          <footer>
            <Button Children = 'Get Started'/>
          </footer>
          
        </div>
        <div>
          <Image
            src={illustration}
            alt="Picture of the author"
            width={500}
            height={500} 
          />
        </div>
        
        
      </div>
    </section>
  );
}
