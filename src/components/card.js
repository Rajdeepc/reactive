import React from 'react'

const Card = (props) => (
    <div style={{ background: 'white', marginBottom: '10px' }}>
       {props.item.title}
    </div>
)

export default Card;
