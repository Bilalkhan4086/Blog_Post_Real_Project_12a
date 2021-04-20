import { Avatar, Button } from '@material-ui/core';
import { navigate } from 'gatsby-link';
import React from 'react'
import { useSelector } from 'react-redux';

const Profile = () => {
    const Data = useSelector((state) => state.loginSlice.data)
    return (
        <div>
            <Avatar style={{ color: "rgb(4, 101, 114)", fontWeight: "bolder", fontSize: "100px", margin: 'auto', marginBottom: '7%', width: "150px", height: "150px" }}>
                {Data.name.charAt(0)}
            </Avatar>

            <div style={{ textAlign: "center", margin: "0px 20%", color: "rgb(4, 101, 114)" }}>
                <div style={{ display: "flex", justifyContent: 'space-between' }}>
                    <h2>Name</h2>
                    <h2>{Data.name}</h2>
                </div>
                <div style={{ display: "flex", justifyContent: 'space-between' }}>
                    <h2>Country</h2>
                    <h2>{Data.country}</h2>
                </div>
                <div style={{ display: "flex", justifyContent: 'space-between' }}>
                    <h2>Email</h2>
                    <h2>{Data.email}</h2>
                </div>
                <div style={{ display: "flex", justifyContent: 'space-between' }}>
                    <h2>Password</h2>
                    <h2>{Data.password}</h2>
                </div>
            </div>
            <Button style={{left:"70%",marginTop:"7%"}} variant="contained" color='secondary' onClick={() => { navigate('/AllBlogs') }} >Back</Button>
        </div>
    )
}

export default Profile
