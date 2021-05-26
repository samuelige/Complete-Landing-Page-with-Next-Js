import React from 'react';
import Button from './button';
import List from './list'

export default function PriceCard({
  data: {
    header,
    name,
    description,
    priceWithUnit,
    buttonText = 'Start Free Trial',
    anotherOption,
    points,
  },
}) {
  return (
    <div className= " w-full p-6 ml-1 relative rounded-xl ">
      <div className={header ? "active absolute -mt-5 ml-4 bg-yellow-300 p-3 center border  rounded-xl" : " "}>
      {header && 
        <h1 className='text-red-900'>{header}</h1>
      }
      </div>

      <section className='bg-gray-100 rounded-lg pt-10 pl-6 h-96 space-y-5' >
        <div className="">
          <h1 className="text-midnightblue text-lg">{name}</h1>
          <h4 className="text-red-900 text-sm">{description}</h4>
        </div>
        
       <List items={points} />
        <footer className=' w-full text-sm space-y-2'>
          <div>
            <h1>{priceWithUnit}
              <span>/Monthly</span>
            </h1>
          </div>
          <div className='space-y-2' >
            <div >
              <Button Children={buttonText}/>
            </div>
            
            {
              anotherOption && (
                <button>{anotherOption}</button>
              )
            }
          </div>
        </footer>
      </section>
    </div>
  );
}

