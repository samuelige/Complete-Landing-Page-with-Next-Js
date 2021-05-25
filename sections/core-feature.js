import business from '../assets/business.jpg'
import CoreFeaturComponent from '../components/core.feature';
import SectionHeader from '../components/section-header';

const data = {
  subTitle: 'Core features',
  title: 'Smart Jackpots that you may love this anytime & anywhere',
  description:
    'Get your tests delivered at let home collect sample from the victory of the managements that supplies best design system guidelines ever.',
  btnName: 'Get Started',
  btnURL: '#',
};

export default function CoreFeature() {
  const {subTitle, title, description, btnName, btnURL} = data
  return (
   <section className='space-y-12 px-5 py-5 md:px-16 md:py-11'>
     <div className='text-center'>
      <SectionHeader
      title={title}
      slogan={subTitle}
      />
     </div>
    <div className='space-y-10 flex flex-col md:space-x-0 md:grid grid-cols-2 md:gap-4 items-center justify-center'>
      <div className='text-midnightblue'>
        <CoreFeaturComponent 
          description={description}
          btnName={btnName}
          btnURL={btnURL}
        />
      </div>
      <div>
        <img className='rounded-3xl' src={business} alt="Thumbnail" />
      </div>
    </div>
   </section>
  );
}
