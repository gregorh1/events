import React from 'react'

const Header = (props) => {
  return (
    <nav>
      <div className='nav-wrapper'>
        <span className='brand-logo left'>&ensp; Events</span>
        <ul className='right'>
          <li onClick={props.openAddEvent}><a>Dodaj wydarzenie</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Header