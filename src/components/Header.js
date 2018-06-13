import React from 'react';
import { Navbar } from 'react-materialize'
import NavItem from 'react-materialize/lib/NavItem';


const Header = (props) => {
  return (
    <div>
      <div className='navbar-fixed'>
        <Navbar brand='&ensp; Events' right>
          <NavItem onClick={props.openAddModal} >
            Dodaj wydarzenie</NavItem>
        </Navbar>
      </div>
    </div>
  )
}

export default Header;