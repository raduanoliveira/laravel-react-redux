import React from 'react'

export default props =>(
    <div className={`box box-${props.type} ${props.property}`}>
        {props.children}
    </div>
)