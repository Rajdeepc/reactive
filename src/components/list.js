import React from 'react';
import CustomDate from '../components/customDate';

const List = (props) => (
    <div>
        <div style={{ paddingTop: '20px', paddingBottom: '20px', background: 'white' }}>
            <h3 style={{ fontSize: '25.2px', marginBottom: 0, lineHeight: '30px', fontWeight: 900 }}><a target="_blank" rel="noopener noreferrer" href={props.item.html_url}>{props.item.name}</a></h3>
            <p style={{ fontSize: '18.96px', color: 'rgba(0, 0, 0, 0.54)', marginBottom: '10px', marginTop: '10px' }}>{props.item.description ? props.item.description : ''}</p>
            <div style={{ overflow: 'auto' }}>
                <span style={{ fontSize: '18.96px', color: 'rgba(0,0,0,0.8)', marginBottom: 0, float: 'left' }}>
                    Language: {props.item.language}</span>
                <span style={{ float: 'right' }}><i className="fa fa-star" aria-hidden="true"></i>&nbsp;
                    {props.item.stargazers_count} &nbsp;&nbsp;&nbsp;<i className="fa fa-code-fork" aria-hidden="true"></i>&nbsp;
                    {props.item.forks_count}</span>
            </div>
            <small style={{ color: 'rgba(0, 0, 0, 0.54)' }}>
                Last Created: {props.item.updated_at ? CustomDate(props.item.updated_at) : ''}</small>
        </div>

    </div>
)

export default List;
