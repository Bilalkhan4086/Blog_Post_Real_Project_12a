import React, { useState } from 'react';
import './Index.css';
import i from '../images/list.svg';
import {Link, navigate} from 'gatsby';
import { Avatar, ClickAwayListener, Grow, MenuItem, MenuList, Paper, Popper } from '@material-ui/core';
import { useSelector,useDispatch } from 'react-redux';
import { signout } from './statemanagement/Statemanagement'

const Header = ({activeNow}) => {
  const [trigger, settrigger] = useState(false);
  const Data = useSelector((state) => state.loginSlice.data)
  console.log("from header data id => ",Data)
const dispatch = useDispatch()
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  console.log("activeNow = ",activeNow)
  return (
    <nav className={trigger ? "nav zindex" : "nav"}>
     <div className="content"> 
     <span className="TM">
     <span className='title'>Fashion City</span>
     <img className="menu" onKeyPress={()=>{settrigger(!trigger);}} role="presentation" onClick={()=>{settrigger(!trigger);}} src={i} alt="Humburger" 
     ></img>
     </span>
      <ul className={trigger ? 'UL':'NUL'}>
        <li style={{marginTop:"-20px"}}> <span >{Data.name ? <Avatar ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle} style={trigger ? {color:"rgb(4, 101, 114)",fontWeight:"bolder",fontSize:"50px",marginLeft:`${35}%`,width:"100px",height:"100px"} : {color:"rgb(4, 101, 114)",fontWeight:"bolder",fontSize:"28px",marginLeft:`${35}%`}}>{Data.name.charAt(0)}</Avatar>:<Avatar style={trigger ? {color:"rgb(4, 101, 114)",fontWeight:"bolder",fontSize:"50px",marginLeft:`${35}%`,width:"100px",height:"100px"} : {color:"rgb(4, 101, 114)",fontWeight:"bolder",fontSize:"28px",marginLeft:`${10}%`}} onClick={()=>{navigate('/Auth2')}}></Avatar>}
      
      <span style={trigger?{color:"rgb(4, 101, 114)",fontSize:'30px'}:{color:"rgb(4, 101, 114)"}}>{Data.name ? Data.name : 'Profile'}</span>

      <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    <MenuItem onClick={(e)=>{handleClose(e);navigate('/Profile')}}>Profile</MenuItem>
                    <MenuItem onClick={(e)=>{handleClose(e);dispatch(signout());alert('Are You Sure to Logout?');window.location.reload();}}>Logout</MenuItem>
                    <MenuItem onClick={handleClose}>Close</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>

      </span></li>
      <li><Link style={{textDecoration:"none"}} activeClassName='activeLink' to ="/">Home</Link></li>
      <li><Link style={{textDecoration:"none"}} activeClassName='activeLink' to="/AllBlogs" >All Blogs</Link></li>
      <li><Link style={{textDecoration:"none"}} activeClassName='activeLink' to="/Asian">Asian Blogs</Link></li>
        <li><Link style={{textDecoration:"none"}} activeClassName= 'activeLink' to="/British">British Blogs</Link></li>
        <li><Link style={{textDecoration:"none"}} activeClassName='activeLink' to="/Arabian">Arabian Blogs</Link></li> 
        </ul>
       
      </div>

      </nav>
  )
}
export default Header;
