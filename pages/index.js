import React from 'react';
import Head from 'next/head'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Banner from '../sections/banner';
import KeyFeature from '../sections/key-feature';


export default function Home() {
  return (
    <div className="container mx-auto">
      <Layout>
        <SEO title="NextJS Landing Page"/>
        <Banner/>
        <KeyFeature />
      </Layout>
    </div>
  )
}
