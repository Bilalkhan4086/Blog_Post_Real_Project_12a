const {fetch} = require('cross-fetch')

exports.createPages = async function ({actions,graphql}){
    const query = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            blogTitle
            description {
              raw
            }
            image {
              file {
                url
              }
            }
            pubishDate
            type
          }
        }
      }
    }
  `);
const pages = ['Arabian','Asian','British','AllBlogs'];

 pages.map((page)=>{
    let Statedata = [];    
query.data.allContentfulBlogPost.edges.map((data)=>{
    if(data.node.type === page){
Statedata.push(data)
    }
    if(page === "AllBlogs"){
        Statedata.push(data)
    }
})  
    return(   actions.createPage(
    {
        path: page,
        component: require.resolve(`./src/template/BlogPage.tsx`),
        context: { 
            // Data passed to context is available
            // in pageContext props of the template component
            data: Statedata,
            active:page
         },
    }
 ))  

}
 )
}

