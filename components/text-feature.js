export default function TextFeature({
  title,
  text,
  number,
}) {
  return (
    <section className='flex flex-row items-center space-x-5 '>
      <div className='border rounded-2xl w-32 bg-yellow-600 text-midnightblue hover:bg-red-700 hover:text-white cursor-pointer h-12 pt-3 text-center'>
        {number}
      </div>
      <div className="space-y-1 ">
        <h1 className='text-midnightblue text-base font-semibold'>
          {title}
        </h1>
          <p>
            {text}
          </p>
      </div>
    </section>
  );
}

