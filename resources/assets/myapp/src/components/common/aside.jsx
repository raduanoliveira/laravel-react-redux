import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Menu from '../template/menu/menu'
import consts from '../../consts'



class Aside extends Component {
    render() {


        const currentUser = this.props.user
        let adminLogo;
        let userPhoto;
        if (process.env.NODE_ENV == 'development') {
            //DEV IMPLEMENTATION
            adminLogo = require('path_images/default/adminlte.png').default
            userPhoto = require('path_images/' + currentUser.photo).default
        }else{
            adminLogo = consts.IMAGE + 'default/adminlte.png'
            userPhoto =  consts.IMAGE + currentUser.photo
        }

        return (
            <aside className='main-sidebar sidebar-dark-primary elevation-4'>

                <Link to='home' className='brand-link'>
                    <img src={adminLogo} alt="Logo" className="brand-image img-circle elevation-3" />
                    <span className='brand-text font-weight-light'><b>Laravel</b>+React</span>
                </Link>

                <div className="sidebar">
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="image">
                            <img src={userPhoto} alt="User" className='img-circle elevation-2' />
                        </div>
                        <div className="info">
                            <Link className="d-block" to="profile">
                                {currentUser.name}
                            </Link>
                        </div>
                    </div>

                    <Menu />
                </div>
            </aside>

        )
    }
}

export default Aside