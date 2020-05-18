import React from 'react'
import Layout from '../components/layout'
import { StaticQuery, Link, graphql } from 'gatsby'

const getImageData = graphql`
{
    allFile {
      edges {
        node {
          relativePath
          size
          extension
        }
      }
    }
}
`


export default () => (
    <Layout>
        <h1>Página 3</h1>
        <h3>Info sobre imagens</h3>
        <StaticQuery
            query={getImageData}
            render={data => (
                <table>
                    <thead>
                        <tr>
                            <th>Relative Path</th>
                            <th>Size</th>
                            <th>Extension</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.allFile.edges.map((edge, index) => (
                            <tr key={index}>
                                <td>{edge.node.relativePath}</td>
                                <td>{edge.node.size}</td>
                                <td>{edge.node.extension}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            )}
        />


        <Link to="/page-2">Go to page 2</Link>
    </Layout>
)