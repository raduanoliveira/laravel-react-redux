import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import Input from '../../components/common/form/input'
import File from '../../components/common/form/file'
import {updatePassword} from './profileActions'
import { required, email, minLength6, passwordsMustMatch, validateImageWeight2M } from '../../components/common/form/FieldLevelValidationForm'
import Row from '../../components/template/layout/row'
import Grid from '../../components/template/layout/grid'
import PasswordChange from './passwordChange'
import Modal from '../../components/common/modal'
import PasswordForm from './passwordForm'
import {toastr} from 'react-redux-toastr'

class RegisterForm extends Component {
    constructor(props) {
        super(props)
        this.handlePassword = this.handlePassword.bind(this)
        this.handleSubmitPassword = this.handleSubmitPassword.bind(this)
        this.state = { showModal: false }
    }
    handlePassword() {
        this.setState({ showModal: !this.state.showModal })

    }

    handleSubmitPassword(values){
        const response = updatePassword(values)
        response.then(result => {
            if(result){
                toastr.success("Success",'Password changed successfully')
            }
        }).catch((error) => {
            toastr.error("Error",error)
        })
        this.setState({ showModal: !this.state.showModal })
    }

    render() {
        const { handleSubmit, pristine, initialValues, submitting, erro } = this.props
        const showModal = this.state.showModal
        return (
            <React.Fragment>
                <Row property='ml-0'>

                    <Grid cols='12 6'>

                        <div className='card'>
                            <div className='card-header'>
                                <h3 className="card-title">Edit profile</h3>
                            </div>
                            <div className='card-body'>

                                <form onSubmit={handleSubmit} className="form-horizontal">

                                    <Field name='name' placeholder='Full name' property='mb-3' icon='user' validate={[required, minLength6]} readOnly={false} component={Input} type='text' />

                                    <Field name='email' placeholder='Email' readOnly={false} icon='envelope' property='mb-3' validate={[required, email]} component={Input} type='email' />

                                    <Field name='file' placeholder='Choose file' readOnly={false} icon='file'
                                        property='mb-3' validate={validateImageWeight2M} accept='.jpg, .png, .jpeg' component={File} />

                                    {erro && <div className='alert alert-danger' role='alert'> {erro} </div>}

                                    <div className="form-group">
                                        <button type="submit" className="btn btn-primary" disabled={pristine || submitting}>Edit</button>{' '}
                                    </div>
                                </form>
                            </div>
                            <Modal
                                title='Change password'
                                visibility={showModal}
                                size='sm'
                                onClose={this.handlePassword}>
                              <PasswordForm  initialValues={initialValues} onSubmit={this.handleSubmitPassword}/>
                            </Modal>
                        </div>

                    </Grid>
                    <PasswordChange handlePassword={this.handlePassword} />
                </Row>

            </React.Fragment>
        )
    }
}

RegisterForm = reduxForm({
    form: 'registerForm',
    multipartForm: true
})(RegisterForm)

export default RegisterForm