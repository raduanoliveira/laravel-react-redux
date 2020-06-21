import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Field, arrayInsert, arrayRemove } from 'redux-form'
import Grid from '../../components/template/layout/grid'
import Row from '../../components/template/layout/row'
import Input from '../../components/common/form/input'
import If from '../../components/template/operators/if'
import { positive } from '../../components/common/form/FieldLevelValidationForm'

class ItemList extends Component {
    add(index, item = {}) {

        let elementName = document.getElementsByName(`${this.props.field +`[`+ (index - 1) + `]`}.name`)
        let elementValue = document.getElementsByName(`${this.props.field +`[`+ (index - 1) + `]`}.value`)
       
        if (!this.props.readOnly && elementName[0].value && elementValue[0].value) {
            this.props.arrayInsert('billingCycleForm', this.props.field, index, item)
        }
    }
    remove(index) {
        if (!this.props.readOnly && this.props.list.length > 1) {
            this.props.arrayRemove('billingCycleForm', this.props.field, index)
        }
    }
    renderRows() {
        const list = this.props.list.length ? this.props.list : [{}]
        return list.map((item, index) => (


            <Row key={index} property='mt-3'>
                <div className='form-row'>
                    <Grid cols='7 5'>
                        <Field type='text' name={`${this.props.field}[${index}].name`} component={Input} placeholder='Name' readOnly={this.props.readOnly} />
                    </Grid>
                    <Grid cols='5 3'>
                        <Field type='number' min='0' step="any" validate={positive} name={`${this.props.field}[${index}].value`} component={Input} placeholder='Value' readOnly={this.props.readOnly} />
                    </Grid>

                    <If test={this.props.showStatus}>
                        <Field type='text' name={`${this.props.field}[${index}].status`} component={Input} placeholder='Status' readOnly={this.props.readOnly} />
                    </If>

                    <Grid cols='12 4'>
                        <button type='button' className='btn btn-success' onClick={() => this.add(index + 1)}>
                            <i className='fa fa-plus'></i>
                        </button>
                        <button type='button' className='btn btn-warning ml-1' onClick={() => this.add(index + 1, item)}>
                            <i className='fa fa-clone'></i>
                        </button>
                        <button type='button' className='btn btn-danger ml-1' onClick={() => this.remove(index)}>
                            <i className='fa fa-trash-o'></i>
                        </button>
                    </Grid>
                </div>
            </Row>


        ))
    }
    render() {
        return (
            <Grid cols={this.props.cols} position={this.props.position}>
                <legend>{this.props.legend}</legend>
                <div>
                    {this.renderRows()}
                </div>
            </Grid>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ arrayInsert, arrayRemove }, dispatch)
export default connect(null, mapDispatchToProps)(ItemList)