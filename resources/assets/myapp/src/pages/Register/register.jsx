import React, { Component } from "react";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reset} from 'redux-form'
import RegisterForm from './registerForm'
import {registerUser} from './registerActions'
import Auth from '../../components/common/router/auth'

class Register extends Component {
    constructor(props) {
        super(props)
        this.submit = this.submit.bind(this)
        this.state = { error: '' }

    }

    submit = (values) => {
      const response = this.props.registerUser(values)
      response.then(result => {
          if(result){
            this.setState({error: 'Register error'})
          }
      })
    }


    render() {
        const user = this.props.user
        return (
            <RegisterForm  erro={this.state.error} user={user} onSubmit={this.submit} />
        )
    }
}
const mapStateToProps = state => ({
    user: state.loginReducer.user
})

const mapDispatchToProps = (dispatch) =>
    bindActionCreators({ reset, registerUser }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Register)