import React from 'react'
import Link from 'gatsby-link';

const MenuComponent = () => (
  <div style={{ paddingTop: '10px' }}>
    <ul className="list-group brdrbtm">
      <li className="list-group-item">
        <Link to='/' activeStyle={{color:'black'}}>About Me</Link>
      </li>
      <li className="list-group-item">
        <Link to='/blog' activeStyle={{color:'black'}}>My Blogs</Link>
      </li>
      <li className="list-group-item">
        <Link to='/fiddles' activeStyle={{color:'black'}}>My JsFiddles</Link>
      </li>
      <li className="list-group-item">
        <Link to='/github' activeStyle={{color:'black'}}>GitHub Projects</Link>
      </li>
    </ul>
  </div>
)

export default MenuComponent;
