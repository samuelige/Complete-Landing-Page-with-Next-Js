import React from 'react';
import Head from 'next/head'
import Layout from '../components/layout'
import SEO from '../components/seo'


export default function Home() {
  return (
    <div className="container mx-auto">
      <Layout>
        <SEO title="NextJS Landing Page"/>
      </Layout>
    </div>
  )
}
