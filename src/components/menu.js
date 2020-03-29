import React from 'react'
import Link from 'gatsby-link';
import './layout.css';

const MenuComponent = () => (
  <div style={{ paddingTop: '10px' }}>
    <ul class="nav nav-tabs">
      <li className="nav-item">
        <Link to='/' isCurrent className="nav-link" activeClassName="active">My Blogs</Link>
      </li>
      {/* <li className="list-group-item">
        <Link to='/fiddles' activeClassName="active">My Fiddles</Link>
      </li> */}
      <li className="nav-item">
        <Link to='/github' className="nav-link " activeClassName="active">GitHub Projects</Link>
      </li>
  </ul>
  </div>
)

export default MenuComponent;
