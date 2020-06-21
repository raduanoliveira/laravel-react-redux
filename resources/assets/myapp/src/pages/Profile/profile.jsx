import React, { Component } from "react";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateUser } from './profileActions'
import Content from '../../components/common/content'
import ProfileForm from './profileForm'
import { toastr } from 'react-redux-toastr'



class Profile extends Component {
    constructor(props) {
        super(props)
        this.submit = this.submit.bind(this)

    }

    submit = (values) => {
        const response = this.props.updateUser(values)
        response.then(result => {
            if (result) {
                toastr.error("Error", result.message)
            }
        })
    }

    render() {

        const user = this.props.user
        return (
            <Content title="Profile">
                <ProfileForm initialValues={user} onSubmit={this.submit} />
            </Content>


        )
    }
}

const mapStateToProps = state => ({
    user: state.loginReducer.user
})

const mapDispatchToProps = (dispatch) =>
    bindActionCreators({ updateUser }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Profile)
