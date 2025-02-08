exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions
  
    createTypes(`
      type MarkdownRemarkFrontmatter {
        title: String!
        date: Date @dateformat
        description: String
      }
  
      type MarkdownRemark implements Node {
        frontmatter: MarkdownRemarkFrontmatter
      }
    `)
  }