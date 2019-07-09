import React from 'react'
import  Link from 'gatsby-link';

const Menu = () => (
    <div style={{ background: 'lighgrey', paddingTop: '10px' }}>
        <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'space-evenly' }}>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/blog'>Blogs</Link>
            </li>
            <li>
                <Link to='/fiddles'>Fiddles</Link>
            </li>
            <li>
                <Link to='/gitworks'>GitWorks</Link>
            </li>
        </ul>
    </div>
)

export default Menu;
