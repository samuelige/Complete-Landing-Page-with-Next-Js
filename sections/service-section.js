import React, { useState } from 'react';

import ReactPlayer from 'react-player/lazy'
import { IoIosPlay } from 'react-icons/io';
import serviceImage from '../assets/downtown.jpg'
import TextFeature from '../components/text-feature';
import Modal from '../components/custom.modal';


const data = {
  subTitle: `What's different about Manage?`,
  title: ` Our software is tailor-made for modern digital product teams`,
  features: [
    {
      id: 1,
      number: "01",
      title: 'Track company-wide progress',
      text:
        `See how your day-t0-today tasks fit into the wider vision.
        Go from tracking progress at the milestone level all the
        way done to the smallest of the details. Never lose sight of 
        the bigger picture again`,
    },
    {
      id: 2,
      number: "02",
      title: 'Advanced built-in reports',
      text:
        `Set internal delivery estimates and track progress toward
        company goals. Our customisable dashboard helps you
        build out the reports you need to keep key stakeholders
        informed`,
    }
  ],
};

export default function ServiceSection() {

  const {subTitle, title} = data
  const [isOpen, setOpen] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const handleModalOpen = () => {
    setShowModal(true)
  }

  const handleModalClose = () => {
      setShowModal(false)
  }

  const handleClick = (e) => {
    e.preventDefault();

    setOpen(true);
  }

  return (
    <section className='w-full space-y-5 items-center lg:space-y-0 px-8 md:px-16 pt-20 lg:grid lg:grid-cols-2 lg:gap-8 lg:pt-14' >
      <div className='w-full relative'>
        <img 
          className="rounded-2xl  w-full object-cover object-center "
          src={serviceImage}
          alt="Service image"
          
        />
          
        {/* <Popup  trigger={
          <div className='border absolute top-28 left-48 sm:top-36 sm:left-64 md:top-40 md:left-72 lg:top-32 lg:left-56  rounded-full w-20 h-20 pt-6 pl-6 border-black '>
            <IoIosPlay className=' cursor-pointer animate-ping  text-4xl' />
          </div>
        } position="right center">
          <ReactPlayer controls={true} url='https://youtu.be/MFuwkrseXVE' />
        </Popup> */}

        <div onClick={ handleModalOpen} className='border absolute top-28 left-48 sm:top-36 sm:left-64 md:top-40 md:left-72 lg:top-32 lg:left-56  rounded-full w-20 h-20 pt-6 pl-6 border-black '>
          <IoIosPlay  className=' cursor-pointer animate-ping  text-4xl' />
        </div>

          {
              showModal ? (
                <Modal close={handleModalClose}>
                  <ReactPlayer controls={true} url='https://youtu.be/MFuwkrseXVE' />
                </Modal>
              ) : null
          }

        



      </div>

      <section className='space-y-5'>
        <div className='space-y-5'>
          <p className='text-xl text-red-400'>{subTitle}</p>
          <h1 className="text-4xl font-semibold text-midnightblue lg:mr-40 ">{title}</h1>
        </div>
        {
          data.features && data.features.map(({id, number, title, text}) => {
            return (
              <TextFeature key={id} number={number} title={title} text={text} />
            )
          })
        }
      </section>
   
      
    </section>
  );
}


