import React from 'react'
import  Link from 'gatsby-link';

const Menu = () => (
    <div style={{ background: 'lighgrey', paddingTop: '10px' }}>
        <ul style={{ listStyle: 'none', display: 'flex' }}>
            {/* <li>
                <Link to='/'>Home</Link>
            </li> */}
            <li style={{marginRight: '10px'}}>
                <Link style={{textDecoration:'none'}}  activeStyle={{ color: "red" }} to='/blog'>Blogs</Link>
            </li>
            <li style={{marginRight: '10px'}}>
                <Link style={{textDecoration:'none'}} activeStyle={{ color: "red" }} to='/fiddles'>Fiddles</Link>
            </li>
            <li style={{marginRight: '10px'}}>
                <Link style={{textDecoration:'none'}} activeStyle={{ color: "red" }} to='/github'>GitHub Projects</Link>
            </li>
        </ul>
    </div>
)

export default Menu;
