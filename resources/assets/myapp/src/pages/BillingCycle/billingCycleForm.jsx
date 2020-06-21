import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import { required, month, minLength, year } from '../../components/common/form/FieldLevelValidationForm'

import { init } from './billingCycleActions'
import LabelAndInput from '../../components/common/form/labelAndInput'
import ItemList from './itemList'
import Summary from './summary'

class BillingCycleForm extends Component {
    calculateSummary() {
        let credits = [{}]
        let debts = [{}]
        if(Array.isArray(this.props.credits) && this.props.credits.length){
            credits = this.props.credits
        }

        if(Array.isArray(this.props.debts) && this.props.debts.length){
            debts = this.props.debts
        }
        
        const sum = (t, v) => t + v
        return {
            sumOfCredits: credits.map(c => +c.value || 0).reduce(sum),
            sumOfDebts: debts.map(d => +d.value || 0).reduce(sum)
        }
    }
    render() {
        const { handleSubmit, readOnly, credits, debts, deleting, pristine, submitting} = this.props
        const { sumOfCredits, sumOfDebts } = this.calculateSummary()
        let disabling = pristine || submitting
        if(deleting){
            disabling = false
        }
      
        return (
            <form role='form' onSubmit={handleSubmit}>

                <div className='card-body'>
                    <Field name='name' validate={[required,minLength(3)]} type='text'  component={LabelAndInput} position='float-left' readOnly={readOnly} label='Name' cols='12 4' placeholder='Name' />
                    <Field name='month' type='number' validate={[required,month]} component={LabelAndInput} position='float-left' readOnly={readOnly} label='Month' cols='12 4' placeholder='Month' />
                    <Field name='year' type='number'  validate={[required,year]} component={LabelAndInput} position='float-left' readOnly={readOnly} label='Year' cols='12 4' placeholder='Year' />
                    <Summary position='float-left' credit={sumOfCredits} debt={sumOfDebts} />
                    <ItemList position='float-left' cols='12 6' list={credits} readOnly={readOnly} field='credits' legend='Credits' />
                    <ItemList position='float-left' cols='12 6' list={debts} readOnly={readOnly} field='debts' legend='Debts' />
                </div>
                <div className="card-footer">
                    <button type="submit" className={`btn btn-${this.props.submitClass}`}  disabled={disabling} >{this.props.submitLabel}</button>
                    <button type="button" className='btn btn-default' onClick={this.props.init}>Cancel</button>
                </div>

            </form>
        )
    }
}

BillingCycleForm = reduxForm({ form: 'billingCycleForm', destroyOnUnmount: false })(BillingCycleForm)
const selector = formValueSelector('billingCycleForm')
const mapStateToProps = state => ({
    credits: selector(state, 'credits'),
    debts: selector(state, 'debts')
})
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm)