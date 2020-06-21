import React from 'react'

export default props => (

    <div className='card-header l-flex p-0'>
        <ul className="nav nav-pills ml-auto p-2">
            {props.children}
        </ul>
    </div>

)