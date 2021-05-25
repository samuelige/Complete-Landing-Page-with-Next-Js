import Link from "next/link";
import Button from "./button";


export default function CoreFeaturComponent({
    description,
    btnName,
  }) {
    return (
      <section className='space-y-5 '>
        <p>{description}</p>
        <Button Children={btnName}/>
      </section>
    );
  }