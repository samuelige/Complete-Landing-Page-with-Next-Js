import React from 'react';


export default function SectionHeader({ title, slogan, isWhite }) {
  return (
    <section className='space-y-2'>
      <p className={isWhite ? "text-white uppercase" : "text-red-300 uppercase"}>{slogan}</p>
      <h2 className={isWhite ? "text-white capitalize" : "text-red-800 capitalize"}>{title}</h2>
    </section>
  );
}
