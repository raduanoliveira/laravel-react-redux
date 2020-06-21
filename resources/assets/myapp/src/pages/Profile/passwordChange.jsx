import React from 'react'

export default props => (
    <div>
        <button className="btn btn-primary" onClick={() => props.handlePassword()}>
            Change <i className='fa fa-lock'></i>
            <br />Password</button>

    </div>
)
