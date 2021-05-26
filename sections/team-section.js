// import SectionHeader from 'components/section-header';
// import TeamCard from 'components/team-card';
import SectionHeader from '../components/section-header';
import TeamCard from '../components/team-card';
import { data } from '../data/team.data';

// mx-auto
export default function TeamSection() {
  return (
    <section className='py-10 md:py-14 md:px-10 space-y-6'>
      <div className="text-center">
        <SectionHeader 
          slogan="OUR TEAM"
          title="The most qualified and talented individuals" 
        />
      </div>
      
      <div className="grid grid-flow-col grid-cols-1 grid-rows-6 sm:grid-cols-2 sm:grid-rows-3 md:grid-cols-3 md:grid-rows-2 md:gap-4 ">
      {
        data && data.map(({id, imgSrc, altText, title, designation, socialProfile}) => (
          <TeamCard 
          key={id}
          src={imgSrc}
          altText={altText}
          title={title}
          designation={designation}
          social={socialProfile} />
        ))
      }
      </div>
    </section>
  );
}


