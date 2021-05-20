import { CustomLink } from './link';

export default function Logo({ src, ...rest }) {
  return (
  
    <CustomLink path='/' {...rest}>
      <img className='h-6' src={src}/>
    </CustomLink>
  );
}
