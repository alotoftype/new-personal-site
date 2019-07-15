import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import CardList from '../components/CardList'
import Card from '../components/Card'
import Helmet from 'react-helmet'
import Container from '../components/Container'
import Pagination from '../components/Pagination'
import SEO from '../components/SEO'
import config from '../utils/siteConfig'

const Portfolio = ({ pageContext }) => {
  return (
    <Layout>
      <SEO />
      <Helmet>
        <title>{`${config.siteTitle} - Page ${currentPage}`}</title>
      </Helmet>
      <Container>
        <h1>Portfolio</h1>
      </Container>
    </Layout>
  )
}

export default Portfolio
