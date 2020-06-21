import React, { Component } from 'react'

class Signout extends Component {
    constructor(props){
        super(props)
    }

    
    render() {
        return (
            <div className='navbar-nav ml-auto'>
                <button className='btn btn-danger' onClick={()=>{this.props.function()}}  >Sign out</button>
            </div>
        )
    }
}

export default Signout

