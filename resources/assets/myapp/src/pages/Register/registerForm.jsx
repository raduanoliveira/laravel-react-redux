import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { Redirect } from 'react-router-dom'
import Input from '../../components/common/form/input'
import { required, email, minLength6, passwordsMustMatch } from '../../components/common/form/FieldLevelValidationForm'
import { Link } from 'react-router-dom'

class RegisterForm extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { handleSubmit, pristine, user, reset, submitting, erro } = this.props
        if (user) {
            return (
                <Redirect
                    to={{
                        pathname: "/home"
                    }}
                />
            );
        }
        return (
            <React.Fragment>
                <div className='register-page nimbus-is-editor'>
                    <div className='register-box'>
                        <div className='register-logo'>
                            <a href='/' onClick={(event) => { event.preventDefault() }}><b>Laravel</b>+React</a>
                        </div>
                        <div className='card'>
                            <div className='card-body register-card-body'>
                                <p className='login-box-msg'>Register a new membership</p>

                                <form onSubmit={handleSubmit} className="form-horizontal">

                                    <Field name='name' placeholder='Full name' property='mb-3' icon='user' validate={[required, minLength6]} readOnly={false} component={Input} type='text' />

                                    <Field name='email' placeholder='Email' readOnly={false} icon='envelope' property='mb-3' validate={[required, email]} component={Input} type='email' />

                                    <Field name='password' placeholder='Password' icon='lock' property='mb-3' validate={[required, minLength6, passwordsMustMatch]} readOnly={false} required component={Input} type='password' />

                                    <Field name='password_confirmation' placeholder='Retype password' icon='lock' property='mb-3' validate={[required, minLength6]} readOnly={false} required component={Input} type='password' />

                                    {erro && <div className='alert alert-danger' role='alert'> {erro} </div>}

                                    <div className="form-group">
                                        <button type="submit" className="btn btn-primary" disabled={pristine || submitting}>Register</button>{' '}
                                        <button type="button" className="btn btn-default" disabled={pristine || submitting} onClick={reset}>Clear</button>
                                    </div>

                                </form>
                                <p className="mb-0">
                                    <Link to='/' className='text-center'>
                                        I already have a membership
                                </Link>
                                </p>
                            </div>

                        </div>
                    </div>


                </div>
            </React.Fragment>
        )
    }
}

RegisterForm = reduxForm({
    form: 'registerForm'
})(RegisterForm)

export default RegisterForm