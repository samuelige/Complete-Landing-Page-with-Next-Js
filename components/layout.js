import React, { useState } from 'react';
import Sticky from 'react-stickynode';
import Header from './header/header';
import Footer from './footer/Footer';


 const Layout = ({ children })=>{
  const [isSticky, setIsSticky] = useState(false);

  const handleStateChange = (status) => {
    if (status.status === Sticky.STATUS_FIXED) {
      setIsSticky(true);
    } else if (status.status === Sticky.STATUS_ORIGINAL) {
      setIsSticky(false);
    }
  };
  
  return (
    <React.Fragment>
      <img loading="lazy" src="https://cdn.tuk.dev/assets/templates/foodies/bg-strip.png" className="absolute right-0 z-0 h-full hero-img-yellow-width lg:block hidden" />
      <img loading="lazy" src="https://cdn.tuk.dev/assets/templates/foodies/bg-strip.png" className="absolute right-0 z-0 lg:h-96 lg:hidden block" />
      <Sticky innerZ={1001} top={0} onStateChange={handleStateChange}>
        <Header className={`${isSticky ? 'sticky' : 'unSticky'}`} />
      </Sticky>
      <main id="content" sx={{ variant: 'layout.main', }} >
        {children}
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default Layout