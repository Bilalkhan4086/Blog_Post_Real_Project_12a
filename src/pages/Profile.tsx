import { Avatar, Button } from '@material-ui/core';
import { navigate } from 'gatsby-link';
import React from 'react'
import ProfileComp from '../components/profile'; 

const Profile:React.FC = () => {
    return (
        <div>
   <ProfileComp/>
        </div>
    )
}

export default Profile
