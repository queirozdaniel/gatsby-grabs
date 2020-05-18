import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'

export default () => (
    <Layout>
        <h1>Ola mundo</h1>
        <Link to="/page-2">Go to page 2</Link>
    </Layout>
)