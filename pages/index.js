import React from 'react';
import Head from 'next/head'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Banner from '../sections/banner';


export default function Home() {
  return (
    <div className="container mx-auto">
      <Layout>
        <SEO title="NextJS Landing Page"/>
        <Banner/>
      </Layout>
    </div>
  )
}
