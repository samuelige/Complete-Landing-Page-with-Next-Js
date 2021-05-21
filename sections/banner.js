import Image from 'next/image'
import Button from '../components/button'
import illustration from '../assets/illustration-intro.svg'

export default function Banner() {
  return (
    <section className='px-12'>
      <div className='container grid grid-cols-2 '>
        <div className='space-y-10'>
          <h1 className='text-4xl lg:text-5xl font-sans  font-bold pr-14'>Bring everyone together to build better products.</h1>
          <p className='pr-56'>
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
