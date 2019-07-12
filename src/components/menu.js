import React from 'react'
import Link from 'gatsby-link';

const MenuComponent = () => (
  <div style={{ paddingTop: '10px' }}>
    <ul className="list-group brdrbtm">
      <li className="list-group-item">
        <Link to='/' activeStyle={{color:'black',fontWeight:'bold'}}>About Me</Link>
      </li>
      <li className="list-group-item">
        <Link to='/blog' activeStyle={{color:'black',fontWeight:'bold'}}>My Blogs</Link>
      </li>
      <li className="list-group-item">
        <Link to='/fiddles' activeStyle={{color:'black',fontWeight:'bold'}}>My Fiddles</Link>
      </li>
      <li className="list-group-item">
        <Link to='/github' activeStyle={{color:'black',fontWeight:'bold'}}>GitHub Projects</Link>
      </li>
    </ul>
  </div>
)

export default MenuComponent;
