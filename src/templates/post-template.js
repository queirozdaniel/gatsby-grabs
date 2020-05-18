import React from 'react'

import Layout from '../components/layout'
import { graphql } from 'gatsby'


const PostTemplate = ({ data: post }) => (
    <Layout>
        <div>
            <h1>{post.markdownRemark.frontmatter.title}</h1>
            <h4>Leia em {post.markdownRemark.timeToRead} {post.markdownRemark.timeToRead > 1 ? 'minutos' : 'minuto'}</h4>
            <div dangerouslySetInnerHTML={{ __html: post.markdownRemark.html }} />
        </div>
    </Layout>
)

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields:{
            slug: {eq: $slug}
        }) {
            html
            timeToRead
            frontmatter {
                title
            }
        }
    }
`
export default PostTemplate