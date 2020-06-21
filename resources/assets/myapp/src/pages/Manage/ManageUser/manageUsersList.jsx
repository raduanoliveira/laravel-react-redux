import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getList, showUpdate, showDelete } from './manageUsersActions'
import Box from '../../../components/template/layout/box'

class ManageUsersList extends Component {
    constructor(props) {
        super(props)
        this.props.getList()
    }
    renderRows() {
        const list = this.props.list || []
        return list.map(mu => (
            <tr className="d-flex" key={mu.id}>
                <td className="col-3 col-sm-3">{mu.name}</td>
                <td className="col-3 col-sm-3">{mu.email}</td>
                <td className="col-2 col-sm-3">{mu.roles.map(e=>{return <Box key={e.id} property='ml-1 mt-1' type={e.name}>{e.name}</Box>  })}</td>
                <td className="col-4 col-sm-3">
                    <button className='btn btn-warning ml-1 mt-1' onClick={() => this.props.showUpdate(mu)}>
                        <i className='fa fa-edit'></i>
                    </button>
                    <button className='btn btn-danger ml-1 mt-1' onClick={() => this.props.showDelete(mu)}>
                        <i className='fa fa-trash-o'></i>
                    </button>
                </td>
            </tr>
        ))
    }
    render() {
        return (
            <div className='table-responsive'>
                <table className="table">
                    <thead>
                        <tr className="d-flex">
                            <th className="col-3 col-sm-3">Name</th>
                            <th className="col-3 col-sm-3">E-mail</th>
                            <th className="col-2 col-sm-3">Roles</th>
                            <th className="col-4 col-sm-3">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => ({ list: state.manageUsers.list })
const mapDispatchToProps = dispatch => bindActionCreators({ getList, showUpdate, showDelete }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(ManageUsersList)