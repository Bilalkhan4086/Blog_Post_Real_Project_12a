import { Button, TextField } from '@material-ui/core';
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { navigate } from 'gatsby-link';
import React, { useState } from 'react'
import * as Yup from 'yup';
import './Index.css';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const Signup:React.FC = () => {
const [showPassword, setshowPassword] = useState(true);
const [DisplayError, setDisplayError] = useState(true);

    return (
        <Formik
            initialValues={{
                name:"",
                country:"",
                email:"",
                password:""

            }}
            validationSchema={Yup.object({
                name: Yup.string().required()
                    .max(20, 'Not moe than 20 Alphabets')
                    .min(3, 'Name shoud be less than 3 Alphabets'),
                country: Yup.string().required(),
                email: Yup.string().email().required(),
                password: Yup.string().required()
                .min(5, "Password shoud not be less than 5 charaters")
            })}
            onSubmit={(values) => {
                console.log(values);
                fetch(`/.netlify/functions/signup`,
                {
                  method:"POST",
                  body:JSON.stringify(values)
                })
                .then((res)=>{res.json()})
                .then((data)=>{console.log(data);})
                .catch((err)=>{setDisplayError(false);
            console.log(err);
            })  
                if(DisplayError){
                    navigate('/Auth2')
                }
            }}><div className="signUpMain">
                <h2 className="signUpHeader">SIGN UP</h2>
                <h3 style={{color:"red"}}>{DisplayError?"":"Already Registered with this email"}</h3>
            <Form style={{padding:"10%",justifyContent:"center",textAlign:"center"}}>
                <div style={{display:"flex",justifyContent:"center"}}>
                <Field name="name" as={TextField} label="Name" variant="standard" type="text"/><br />
                </div>
                <ErrorMessage name="name" >{msg => (<span style={{ color: "red", fontSize: "13px" }}>{msg}</span>)}</ErrorMessage><br />
                
                <div style={{display:"flex",justifyContent:"center"}}>
                <Field name="country" as={TextField} label="Country" variant="standard" type="text" /><br />
                </div>
                <ErrorMessage name="country" >{msg => (<span style={{ color: "red", fontSize: "13px" }}>{msg}</span>)}</ErrorMessage><br />
                
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
                }
                </div><br />
                </div>
                <ErrorMessage name="password" >{msg => (<span style={{ color: "red", fontSize: "13px" }}>{msg}</span>)}</ErrorMessage><br />
                
                <br /><br /><br />
         <Button style={{left:"0%"}} type="submit" variant="contained" color="primary"> Next</Button>
            </Form></div>
        </Formik>
    )
}

export default Signup;