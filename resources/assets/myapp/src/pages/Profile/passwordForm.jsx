import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import Input from '../../components/common/form/input'
import { required, minLength6, passwordsMustMatch } from '../../components/common/form/FieldLevelValidationForm'


class PasswordForm extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        const { handleSubmit, pristine, submitting, initialValues } = this.props
        return (
            <React.Fragment>

                <form onSubmit={handleSubmit} className="form-horizontal">
                    <Field name='password' placeholder='Password' icon='lock' property='mb-3' validate={[required, minLength6, passwordsMustMatch]} readOnly={false} required component={Input} type='password' />

                    <Field name='password_confirmation' placeholder='Retype password' icon='lock' property='mb-3' validate={[required, minLength6]} readOnly={false} required component={Input} type='password' />

                    <div className="form-group">
                        <button type="submit" className="btn btn-primary" disabled={pristine || submitting}>Change</button>{' '}
                    </div>
                </form>


            </React.Fragment>
        )
    }
}

PasswordForm = reduxForm({
    form: 'passwordForm'
})(PasswordForm)

export default PasswordForm