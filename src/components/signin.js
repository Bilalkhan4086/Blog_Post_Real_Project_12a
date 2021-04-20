import { Button, TextField } from '@material-ui/core';
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { navigate } from 'gatsby-link';
import React, {  useState } from 'react'
import * as Yup from 'yup';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { useSelector} from 'react-redux'
import {  useDispatch } from 'react-redux'
import { signin,conveyData } from './statemanagement/Statemanagement'

const Signin = () => {
    const [showPassword, setshowPassword] = useState(false);
    const [Data, setData] = useState({});

    const loginStatus = useSelector((state) => state.loginSlice.login)
  const dispatch = useDispatch()

    const fetchData = async(values) => {
        const res = await fetch(`/.netlify/functions/signup/${123456}`,{
        method:"POST",
        body:JSON.stringify(values)
    });
    const {data} = await res.json();
setData(data);
dispatch(signin());
console.log(data);
};
    return (
        <Formik
            initialValues={{
                email:"",
                password:""

            }}
            validationSchema={Yup.object({
                email: Yup.string().email().required(),
                password: Yup.string().required()
                .min(5, "Password shoud not be less than 5 charaters")
            })}
            onSubmit={(values) => {
                console.log(values);

fetchData(values);

if(loginStatus){
navigate('/AllBlogs');
dispatch(conveyData(Data));
}


}}>
                <div className="signUpMain">
                <h2 className="signUpHeader">SIGN IN</h2>
            <Form  style={{padding:"10%",justifyContent:"center",textAlign:"center"}}>
               <div style={{display:"flex",justifyContent:"center"}}>
                <Field name="email" as={TextField} label="Email" variant="standard" type="text" /><br />
                </div>
                <ErrorMessage name="email" >{msg => (<span style={{ color: "red", fontSize: "13px" }}>{msg}</span>)}</ErrorMessage><br />
                
                <div style={{display:"flex",justifyContent:"center"}}>
                <div>
                <Field name="password" as={TextField} style={{width:"180px"}} label="Password" variant="standard" type={showPassword ? "password":"text"} />
                {showPassword ?
                 <Visibility style={{marginTop:"30px"}} value={showPassword} onClick={()=>{setshowPassword(!showPassword)}}/>
                 :<VisibilityOff style={{marginTop:"30px"}} value={showPassword} onClick={()=>{setshowPassword(!showPassword)}}/>
                } </div><br />
                </div>
                <ErrorMessage name="password" >{msg => (<span style={{ color: "red", fontSize: "13px" }}>{msg}</span>)}</ErrorMessage><br />
                
                <br /><br /><br /><br /><br />
         <Button type="submit" variant="contained" color="primary"> {loginStatus ? `Proceed` : 'Next'}</Button><br /><br />
         <Button color="secondary" variant="contained" onClick={()=>{navigate("/Auth")}}>Resgister Now</Button>
         
            </Form></div>
        </Formik>
    )
}

export default Signin;