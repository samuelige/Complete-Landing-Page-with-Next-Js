import Link from "next/link";

export default function TeamCard({ src, altText, title, designation, social }) {
  return (
    <figure className="hover:bg-gray-50 hover:border  border-current hover:shadow-lg  py-5  space-y-4">
      <img className="w-32 h-32 rounded-full mx-auto" src={src} alt={altText} width="384" height="512"></img>

      <figcaption className="font-medium text-center">
        <div class="text-cyan-600">
          {title}
        </div>
        <div class="text-gray-500">
          {designation}
        </div>
      </figcaption>

      <div className='flex flex-row justify-center cursor-pointer space-x-2  '>
        {
          social && social.map(({id,path,icon}) => (
            <Link  key={id} href={path}>{icon}</Link>
          ))
        }
      </div>

    </figure>
  );
}

