import React from 'react'

export default props =>(
    <div className={`row ${props.property ? props.property: ''}`}>{props.children}</div>
)