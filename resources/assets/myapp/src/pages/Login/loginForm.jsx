import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { Redirect } from "react-router-dom";
import { Link } from 'react-router-dom'

class LoginForm extends Component {
    constructor(props) {
        super(props)
    }


    render() {


        const { handleSubmit, handleChecked, token, isChecked, pristine, reset, submitting, erro } = this.props
        if (token) {
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
                <div className='login-page'>
                    <div className='login-box'>
                        <div className='login-logo'>
                            <a href='/' onClick={(event) => { event.preventDefault() }}><b>Laravel</b>+React</a>
                        </div>
                        <div className='card'>
                            <div className='card-body login-card-body'>
                                <p className='login-box-msg'>Sign in to start your session</p>
                                <form onSubmit={handleSubmit} className="form-horizontal">

                                    <div className="input-group mb-3">
                                        <Field name='email' placeholder='Email' className="form-control" required component='input' type='email' />
                                        <div className="input-group-append">
                                            <div className="input-group-text">
                                                <span className="fa fa-envelope"></span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="input-group mb-3">
                                        <Field name='password' placeholder='Password' className="form-control" required component='input' type='password' />
                                        <div className="input-group-append">
                                            <div className="input-group-text">
                                                <span className="fa fa-lock"></span>
                                            </div>
                                        </div>
                                    </div>


                                    {erro && <div className='alert alert-danger' role='alert'> {erro} </div>}

                                    <div className="row">
                                        <div className="col-8">
                                            <div className="icheck-primary">
                                                <input type="checkbox" name="remember" id="remember" onChange={() => handleChecked()} checked={isChecked} />
                                                <label onClick={() => handleChecked()} id="remember-label">Remember Me</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <button type="submit" className="btn btn-primary" disabled={pristine || submitting}>Send</button>{' '}
                                        <button type="button" className="btn btn-default" disabled={pristine || submitting} onClick={reset}>Clear</button>
                                    </div>

                                </form>

                                <p className="mb-0">
                                    <Link to='register' className='text-center'>
                                        <i className={`fa fa-user-plus`}></i> Register a new membership
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

LoginForm = reduxForm({
    form: 'loginForm'
})(LoginForm)

export default LoginForm