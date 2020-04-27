import React from 'react';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import {  Link } from 'react-router-dom';
import Time from './clock.js'

function MyNavBar(target){

  const navStyle = {
    color: 'black'
  };

    return (
      <div className='navStyle'>
        <div>
          LC Sick Time
        </div>
        <UncontrolledDropdown>
          <DropdownToggle caret>
            Options
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header><Link style={navStyle} to='/'>Home</Link></DropdownItem>
            <DropdownItem><Link style={navStyle} to='/request'>Request</Link></DropdownItem>
            <DropdownItem><Link style={navStyle} to='/check'>Check</Link></DropdownItem>
            <DropdownItem><Link style={navStyle} to='/stats'>Stats</Link></DropdownItem>
            <DropdownItem><Time /></DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
      // <nav>
      //     <ul className='nav-Link'>
      //       <Link style={navStyle} to='/'>
      //         <li >LC Sick Time</li>
      //       </Link>
      //       <Link style={navStyle} to='/request'>
      //         <li>Request</li>
      //       </Link>
      //       <Link style={navStyle} to='/check'>
      //         <li>Check</li>
      //       </Link>
      //       <Link style={navStyle} to='/stats'>
      //         <li>stats</li>
      //       </Link>
      //       <li style={navStyle}><Time /></li>
      //     </ul>
      // </nav>
    );
  }
  
  export default MyNavBar;