import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import { required, minLength, email } from '../../../components/common/form/FieldLevelValidationForm'
import { init } from './manageUsersActions'
import Modal from '../../../components/common/modal'
import PasswordForm from '../../Profile/passwordForm'
import PasswordChange from '../../Profile/passwordChange'
import { updatePassword } from '../../Profile/profileActions'
import { toastr } from 'react-redux-toastr'
import Grid from '../../../components/template/layout/grid'
import Row from '../../../components/template/layout/row'

import LabelAndInput from '../../../components/common/form/labelAndInput'
import labelAndSelect from '../../../components/common/form/labelAndSelect'

class ManageUsersForm extends Component {
    constructor(props) {
        super(props)
        this.handlePassword = this.handlePassword.bind(this)
        this.handleSubmitPassword = this.handleSubmitPassword.bind(this)
        this.renderOptions = this.renderOptions.bind(this)
        this.state = { showModal: false }
    }

    handlePassword() {
        this.setState({ showModal: !this.state.showModal })

    }

    handleSubmitPassword(values) {
        const response = updatePassword(values)
        response.then(result => {
            if (result) {
                toastr.success("Success", 'Password changed successfully')
            }
        }).catch((error) => {
            toastr.error("Error", error)
        })
        this.setState({ showModal: !this.state.showModal })
    }

    renderOptions(roles) {
        return roles.map((role, index) => (
            <option key={index} value={role}>{role}</option>
        ))
    }

    render() {
        const { handleSubmit, readOnly, deleting, pristine, submitting } = this.props
        const showModal = this.state.showModal
        let disabling = pristine || submitting
        if (deleting) {
            disabling = false
        }

        return (
            <React.Fragment>
                <Row property='ml-0'>

                    <Grid cols='12 8'>
                        <div className='card'>
                            <div className='card-header'>
                                <h3 className="card-title">Edit user</h3>
                            </div>

                            <form role='form' onSubmit={handleSubmit}>

                                <div className='card-body'>
                                    <Field name='name' validate={[required, minLength(3)]} type='text' component={LabelAndInput} position='float-left' readOnly={readOnly} label='Name' placeholder='Name' />
                                    <Field name='email' type='email' validate={[required, email]} component={LabelAndInput} position='float-left' readOnly={readOnly} label='Email' placeholder='E-mail' />
                                    <Field name='roles_update' validate={required} component={labelAndSelect} position='float-left' multiple={true} label='Roles'>
                                        {this.renderOptions(this.props.roles)}
                                    </Field>

                                </div>
                                <div className="card-footer">
                                    <button type="submit" className={`btn btn-${this.props.submitClass}`} disabled={disabling} >{this.props.submitLabel}</button>
                                    <button type="button" className='btn btn-default' onClick={this.props.init}>Cancel</button>
                                </div>

                            </form>
                        </div>
                    </Grid>
                    <Grid cols='12 4'>
                        <PasswordChange handlePassword={this.handlePassword} />
                    </Grid>
                    <Modal
                        title='Change password'
                        visibility={showModal}
                        size='sm'
                        onClose={this.handlePassword}>
                        <PasswordForm initialValues={this.props.user} onSubmit={this.handleSubmitPassword} />
                    </Modal>
                </Row>
            </React.Fragment>
        )
    }
}

ManageUsersForm = reduxForm({ form: 'manageUsersForm', destroyOnUnmount: false })(ManageUsersForm)
const selector = formValueSelector('manageUsersForm')
const mapStateToProps = state => ({
    roles: state.manageUsers.roles,
    user: selector(state, 'id', 'name', 'email'),
})
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(ManageUsersForm)
