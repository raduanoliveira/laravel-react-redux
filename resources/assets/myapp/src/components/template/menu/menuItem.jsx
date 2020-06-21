import React from 'react'
import { Link, Redirect } from 'react-router-dom'



export default props => (
    <li className="nav-item active">
        <Link to={props.path} className='nav-link'>
            <i className={`fa fa-${props.icon}`}></i> <p>{props.label}</p>
        </Link>
    </li>
)
