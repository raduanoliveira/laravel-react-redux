import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getUser, logout } from '../../pages/Login/loginActions'
import Auth from '../common/router/auth'
import { Redirect} from 'react-router-dom'

import TopNav from '../common/topnav/topnav'
import Aside from '../common/aside'


class Layout extends Component {
    constructor(props) {
        super(props)
    }
    async componentDidMount() {
        if (!this.props.user && Auth.isAuthenticated) {
            this.props.getUser()
        }
    }
    render() {
        if(!Auth.getAccessToken()){
            return( <Redirect
            to={{
                pathname:'/',
            }}
            />)
        }
        const user = this.props.user
        return (
            <React.Fragment>
                {user &&
                    
                    <div>
                        <TopNav logout={this.props.logout}/>
                        <Aside user={user} />
                        {this.props.children}
                    </div>
                }
                
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    user: state.loginReducer.user
})

const mapDispatchToProps = (dispatch) =>
    bindActionCreators({ getUser, logout }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Layout)

