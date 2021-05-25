import React from "react";
import SectionHeader from "../components/section-header";

const data = [
  {
    id: 1,
    title: 'Set disbursement Instructions',
    text:
      'Get your blood tests delivered at home collect a sample from the your blood tests.',
  },
  {
    id: 2,
    title: 'Assembly retrieves funds from your account',
    text:
      'Get your blood tests delivered at home collect a sample from the your blood tests.',
  },
  {
    id: 3,
    title: 'Assembly initiates disbursement',
    text:
      'Get your blood tests delivered at home collect a sample from the your blood tests.',
  },
  {
    id: 4,
    title: 'Customer receives funds payment',
    text:
      'Get your blood tests delivered at home collect a sample from the your blood tests.',
  },
];

export default function WorkFlow() {
  return (
    <section className='py-10 md:py-20 bg-heroPattern space-y-10 md:space-y-20 bg-DarkRed px-16'>
      <div className='text-center'>
        <SectionHeader 
          slogan="WHAT'S THE FUNCTION"
          title="Meet the feature of our product"
          isWhite={true}
        />
      </div>

      <div className='md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-x-6'>
        {
          data && 
          data.map(({id, title, text}) => {
            return (
              <div className='flex flex-col text-white space-y-6 pb-9 md:pb-0 '>
                <div className='border rounded-3xl w-16 h-16 cursor-pointer'>
                  <h1  className='mt-4 text-center text-2xl'>0{id}</h1>
                </div>

                <div>
                  <h1>{title}</h1>
                  <h4>{text}</h4>
                </div>
              </div>
            )
          })
        }
      </div>

    </section>
  );
}

