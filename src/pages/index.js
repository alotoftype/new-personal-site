import React from 'react'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Layout from '../components/Layout'
import Container from '../components/Container'
import Intro from '../components/Intro'
import PageTitle from '../components/PageTitle'
import SEO from '../components/SEO'

export default function index() {
  const postNode = {
    title: `Home - ${config.siteTitle}`,
  }
  return (
    <Layout>
      <Helmet>
        <title>{`Contact - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="home" customTitle />

      <Container>
        <PageTitle>Welcome</PageTitle>
        <Intro />
      </Container>
    </Layout>
  )
}
