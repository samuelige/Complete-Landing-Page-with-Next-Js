import React, { useState } from 'react';

import PriceCard from '../components/price-card';
import ButtonGroup from '../components/button-group';
import SectionHeader from '../components/section-header';

import { packages } from '../data/package.data';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    draggable: false,
  },
  tablet: {
    breakpoint: { max: 1023, min: 640 },
    items: 2,
    draggable: true,
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    draggable: true,
  },
};

export default function Package() {
  const { monthly, annual } = packages;
  const [state, setState] = useState({
    active: "monthly",
    pricingPlan: monthly
  })


  const handlePricingPlan = (plan) => {
    plan === 'annual' ? setState({
      active: "annual",
      pricingPlan: annual
    }) : setState({
      active: 'monthly', pricingPlan: monthly
    })
  }

  const {active, pricingPlan} = state


  const sliderParams = {
    additionalTransfrom: 0,
    arrows: false,
    autoPlaySpeed: 3000,
    centerMode: false,
    className: '',
    slidesToSlide: 1,
    items: 3,
    containerClass: 'carousel-container',
    customButtonGroup: <ButtonGroup />,
    dotListClass: '',
    focusOnSelect: false,
    infinite: false,
    keyBoardControl: false,
    itemClass: '',
    minimumTouchDrag: 80,
    renderButtonGroupOutside: true,
    renderDotsOutside: false,
    responsive: responsive,
    showDots: false,
    sliderClass: '',
  };

  return (
    <section className='py-10 md:py-14 md:space-x-10 space-y-6'>
      <div className='text-center'>
        <SectionHeader 
          slogan="Pricing Plan" 
          title='Choose your pricing plan' />
      </div>
      <section>
        <div className='flex flex-row space-x-4 justify-center'>
          <button 
            className={active === 'monthly' ? 'active shadow-md border-0 bg-white outline-none focus:outline-none items-center p-2' : ''}
            type='button'
            aria-label="Monthly"
            onClick={() => handlePricingPlan('monthly')}
          >
            Monthly Plan
          </button>
          <button 
            className={active === 'annual' ? 'active shadow-md bg-white border-0 focus:outline-none items-center p-2' : ''}
            type='button'
            aria-label="Annual"
            onClick={() => handlePricingPlan('annual')}
          >
            Annual Plan
          </button>
        </div>
      </section>

      <section >
        <Carousel {...sliderParams}>
          {
            pricingPlan && 
            pricingPlan.map((packageData) => (
              <div>
                <PriceCard data={packageData}/>
              </div>
            ))
          }
        </Carousel>
      </section>
    </section>
  );
}


