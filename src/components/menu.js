import React from 'react'
import Link from 'gatsby-link';
import './layout.css';

const MenuComponent = () => (
  <div style={{ paddingTop: '10px' }}>
    <ul className="list-group brdrbtm">
      <li className="list-group-item">
        <Link to='/' activeClassName="active">About Me</Link>
      </li>
      <li className="list-group-item">
        <Link to='/blog' activeClassName="active">My Blogs</Link>
      </li>
      {/* <li className="list-group-item">
        <Link to='/fiddles' activeClassName="active">My Fiddles</Link>
      </li> */}
      <li className="list-group-item">
        <Link to='/github' activeClassName="active">GitHub Projects</Link>
      </li>
    </ul>
  </div>
)

export default MenuComponent;
