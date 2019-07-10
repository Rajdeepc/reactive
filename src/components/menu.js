import React from 'react'
import  Link from 'gatsby-link';

const Menu = () => (
    <div style={{ background: 'lighgrey', paddingTop: '10px' }}>
        <ul style={{ listStyle: 'none', display: 'flex',borderBottom:'1px solid rgba(0, 0, 0, 0.1)',marginBottom:0 }}>
            {/* <li>
                <Link to='/'>Home</Link>
            </li> */}
            <li style={{marginRight: '10px'}}>
                <Link style={{textDecoration:'none',fontSize:'15.8px'}}  activeStyle={{ color: "rgba(0, 0, 0, 0.84)" }} to='/blog'>Blogs</Link>
            </li>
            <li style={{marginRight: '10px'}}>
                <Link style={{textDecoration:'none',fontSize:'15.8px'}} activeStyle={{ color: "rgba(0, 0, 0, 0.84)" }} to='/fiddles'>Fiddles</Link>
            </li>
            <li style={{marginRight: '10px'}}>
                <Link style={{textDecoration:'none',fontSize:'15.8px'}} activeStyle={{ color: "rgba(0, 0, 0, 0.84)" }} to='/github'>GitHub Projects</Link>
            </li>
        </ul>
    </div>
)

export default Menu;
