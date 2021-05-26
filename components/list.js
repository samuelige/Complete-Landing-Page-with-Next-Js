import React from 'react';


export default function List({ items = []}) {
  return (
    <div className='space-y-4'>
      {
        items && items.map((item, i) => (
          <div key={i} className={item.isAvailable ? 'open' : 'close'}>
            <figure  className='flex flex-row space-x-3 items-center'>
              <div className='text-midnightblue'>{item.icon}</div>
              
              <h1>{item.text}</h1>
            </figure>


          </div>
        ))
      }
    </div>

  );
}


