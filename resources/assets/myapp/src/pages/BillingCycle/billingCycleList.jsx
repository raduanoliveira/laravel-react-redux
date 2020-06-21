import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {getList, showUpdate, showDelete} from './billingCycleActions'

class BillingCycleList extends Component{
    constructor(props) {
        super(props)
        this.props.getList()
    }

    // componentWillMount(){
    //     this.props.getList()
    // }

    renderRows(){
        const list = this.props.list || []
        return list.map(bc => (
            <tr className="d-flex" key={bc.id}>
                <td className="col-3 col-sm-4">{bc.name}</td>
                <td className="col-3 col-sm-2">{bc.month}</td>
                <td className="col-3 col-sm-3">{bc.year}</td>
                <td className="col-3 col-sm-3">
                    <button className='btn btn-warning ml-1 mt-1' onClick={()=> this.props.showUpdate(bc)}>
                        <i className='fa fa-pencil'></i>
                    </button>
                    <button className='btn btn-danger ml-1 mt-1' onClick={()=> this.props.showDelete(bc)}>
                        <i className='fa fa-trash-o'></i>
                    </button>
                </td>
            </tr>
        ))
    }
    render(){
        return(
            <div className='table-responsive'>
                <table className="table">
                    <thead>
                        <tr className="d-flex">
                            <th className="col-3 col-sm-4">Name</th>
                            <th  className="col-3 col-sm-2">Month</th>
                            <th  className="col-3 col-sm-3">Year</th>
                            <th  className="col-3 col-sm-3">Action</th>
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

const mapStateToProps = state => ({list: state.billingCycle.list})
const mapDispatchToProps = dispatch => bindActionCreators({getList,showUpdate, showDelete}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleList)