import React from 'react'

export default props =>(
    <div className={`alert alert-${props.type}`}>
        {props.children}
    </div>
)