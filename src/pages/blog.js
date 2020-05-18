import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'

import Layout from '../components/layout'

const getMarkdownPosts = graphql`
{
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            date
          }
          fields{
            slug
          }
          excerpt
        }
      }
      totalCount
    }
  }
`

export default () => (
  <Layout>
    <div>
      <h1 style={{ display: 'inlineBlock', borderBottom: '1px solid' }}> Gatsby Grabs</h1>
    </div>
    <StaticQuery
      query={getMarkdownPosts}
      render={data => (
        <>
          <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.id}>
              <h3> <Link to={`/posts${node.fields.slug}`}>{node.frontmatter.title} </Link>
                <span style={{ color: '#bbb' }}>-{node.frontmatter.date}</span>
              </h3>
              <p>{node.excerpt}</p>
            </div>
          ))}
        </>
      )}
    />
  </Layout>
)
