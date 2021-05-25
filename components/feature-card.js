// import Image from 'next/image'

export default function FeatureCard({
  imgSrc,
  altText,
  title,
  text,
}) {
  return (
    <div className='md:flex space-x-4'>
      <div className='inline-flex items-center ml-20 md:ml-0' >{imgSrc}</div>
     
      <div className="">
       <h1 className='pb-1 text-1xl text-midnightblue font-medium '>{title}</h1>
       <p className="lg:pr-10">{text}</p>
      </div>
    </div>
  );
}


