import React from 'react'
import '../components/index.css'
import Blog1 from '../components/Blog1'
import Layout from '../components/Layout'
import { Button } from '@material-ui/core'
import { navigate } from 'gatsby-link'
import { useSelector} from 'react-redux'


const Arabian = ({pageContext}) => {
// const [Signup, setSignup] = useState(false) ;
const loginStatus = useSelector((state) => state.loginSlice.login)

    return (
      <Layout active={pageContext.active}><div className="BackGround">
      <div className="AllBlogPost">
        <div className="AllBlogHeading">  
           <span style={{opacity:1}}> {pageContext.active === 'AllBlogs' ? "Fashion City !" : `${pageContext.active} Fashion !`}</span>
        </div>
        </div>
        </div>
        <div className="BlogAndAd" >
          <div>
        {loginStatus ?
        pageContext.data.map((data,i)=>{
          
          return(
        <Blog1 count={i} data={data}/>
        )})
        :
        pageContext.data.slice(0, 3).map((data,i)=>{
          
          return(
        <Blog1 count={i} data={data}/>
        )})
        }
        {
          loginStatus ?
          "":
          <Button variant="outlined" style={{marginTop:"3%"}} onClick={()=>{navigate('/Auth2');}} color="primary">Show more</Button>
        }  
        </div>
        
        
        {/* <div style={{width:'100%',fontFamily:'Pangolin',boxShadow:"4px 4px 4px grey"}}>
           <span style={{color:"blue",fontSize:"25px"}}> Advertisment </span><br/>

<img src={img2} alt="aka" width='350px'/>
<span style={{color:"rgb(4, 101, 114)",width:'100%',fontFamily:'Pangolin'}}>jhbjdh hbaba hba jmba sm svc hjavc n bvzdnbvc gncvb xgnabv ans bv angbv nagsbv asgnbv asngbv</span>
        </div> */}
        
        
        </div>
        </Layout>
    )
}

export default Arabian
