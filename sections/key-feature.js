import { CgPerformance } from "react-icons/cg";
import { MdSubscriptions } from "react-icons/md";
import { HiSupport } from "react-icons/hi";
import { BsUnion } from "react-icons/bs"
import SectionHeader from "../components/section-header";
import FeatureCard from "../components/feature-card";



const data = [
  {
    id: 1,
    imgSrc: <CgPerformance className='text-3xl text-midnightblue '/>,
    title: 'Fast Performance',
    text:
      'Get your blood tests delivered at home collect a sample from the your blood tests.',
  },
  {
    id: 2,
    imgSrc: <BsUnion className='text-3xl text-midnightblue'/>,
    title: 'Partnership deal',
    text:
      'Get your blood tests delivered at home collect a sample from the your blood tests.',
  },
  {
    id: 3,
    imgSrc: <MdSubscriptions className='text-3xl text-midnightblue'/>,
    title: 'Pro Subscription',
    text:
      'Get your blood tests delivered at home collect a sample from the your blood tests.',
  },
  {
    id: 4,
    imgSrc: <HiSupport className='text-3xl text-midnightblue'/>,
    title: 'Customer Support',
    text:
      'Get your blood tests delivered at home collect a sample from the your blood tests.',
  },
];

export default function KeyFeature() {
  return (
   <section id='feature ' className="w-full  px-4 md:px-3 lg:px-24 space-y-14 mt-10 md:mt-9">
     <div className='text-center '>
      <SectionHeader
        slogan="What's the function"
        title="Meet the feature of our products" 
      />
     </div>

     <div className='w-ful space-y-8 md:space-y-0 md:grid md:grid-cols-2 md:gap-y-5 md:gap-x-2 lg:gap-x-20 lg:gap-y-12 relative'>
      {
        data && data.map(({id,imgSrc,title,text}) => {
          return (
            <FeatureCard key={id} imgSrc={imgSrc} title={title} text={text} />
          )
        })
      }
     </div>
   </section>
  );
}

