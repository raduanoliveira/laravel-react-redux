import React, { Component } from "react";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reset} from 'redux-form'
import LoginForm from './loginForm'
import { sendLogin, changeChecked } from './loginActions'
import Auth from '../../components/common/router/auth'

class Login extends Component {
    constructor(props) {
        super(props)
        this.checked = this.checked.bind(this)
        this.submit = this.submit.bind(this)
        this.state = { error: '' }

    }

    submit = (values) => {
        const response = this.props.sendLogin(values, this.props.checked)
        response.then(result => {
            if(result){
                this.setState({error: 'Login error'})
            }
        })
    }


    checked() {
        this.props.changeChecked(this.props.checked)
    }

    render() {
        const token = Auth.getAccessToken()
        return (
            <LoginForm handleChecked={this.checked} erro={this.state.error} isChecked={this.props.checked} token={token} onSubmit={this.submit} />
        )
    }
}
const mapStateToProps = state => ({
    checked: state.loginReducer.checked,
    user: state.loginReducer.user
})

const mapDispatchToProps = (dispatch) =>
    bindActionCreators({ sendLogin, changeChecked, reset }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Login)