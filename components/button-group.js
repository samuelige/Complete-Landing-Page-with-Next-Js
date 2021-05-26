import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io';

export default function ButtonGroup({ next, previous }) {
  return (
    <section className="text-center">
      <button onClick={previous}>
        <IoIosArrowRoundBack className='text-2xl' />
      </button>
      <button classNam='' onClick={next}>
        <IoIosArrowRoundForward className='text-2xl' />
      </button>
    </section>
    
  );
}
