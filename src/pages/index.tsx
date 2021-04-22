import { Button } from "@material-ui/core";
import { navigate } from "gatsby-link";
import * as React from "react"
import "../components/style.css";
import Layout from "../components/Layout";

const IndexPage:React.FC = () => {


   return (
      <Layout active="home">
         <div className="indexBackGround">
            <div className="AllBlogPost">
               <div className="indexHeading">
                  <span style={{ opacity: 1 }}> All Fashions are here, you JUST need to explore ONLY</span><br />
                  <Button variant="contained" color="secondary" onClick={() => { navigate("/AllBlogs") }}>Explore</Button>
               </div>
            </div>
         </div>

         <div style={{ display: "flex", justifyContent: "center" }}>

         </div>

      </Layout>
   )
}

export default IndexPage
