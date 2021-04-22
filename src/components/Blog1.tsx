import React from 'react'
import './style.css'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BlogsTypes } from '../types/Types'
import moment from 'moment';

const Blog1:React.FC<BlogsTypes> = ({count,data}) => {
// const blog = Data.allContentfulBlogPost.edges.node;
console.log("Imade =",count)
const blogcontent = documentToReactComponents(JSON.parse(data.node.description.raw));
    return (
        <div style={{textAlign:"left"}}>
            <h2 className="Blog1Header">  {data.node.blogTitle}</h2>
            <div className="Blog1Desc">
                
                {blogcontent}
        
            </div><br/>
            <img src={data.node.image.file.url} alt="akaa" className="BlogImage" />
            <br/><div style={{fontFamily:'Pangolin'}}>Publish date : {Date(data.node.pubishDate)}</div>

   </div>
    )
}
export default Blog1
