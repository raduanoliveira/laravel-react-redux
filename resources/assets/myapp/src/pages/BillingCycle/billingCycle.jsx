import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Content from '../../components/common/content'
import Tabs from '../../components/common/tab/tabs'
import TabsHeader from '../../components/common/tab/tabsHeader'
import TabsContent from '../../components/common/tab/tabsContent'
import TabHeader from '../../components/common/tab/tabHearder'
import TabContent from '../../components/common/tab/tabContent'
import { init, create, update, remove } from './billingCycleActions'

import List from './billingCycleList'
import Form from './billingCycleForm'

class BillingCycle extends Component {
    constructor(props) {
        super(props)
        this.props.init()
    }

    render() {

        return (

                
                    <Content title="Billing Cycle">
                        <Tabs>
                            <TabsHeader>
                                <TabHeader label='List' icon='bars' target='tabList' />
                                <TabHeader label='Create' icon='plus' target='tabCreate' />
                                <TabHeader label='Update' icon='pencil' target='tabUpdate' />
                                <TabHeader label='Delete' icon='trash-o' target='tabDelete' />
                            </TabsHeader>
                            <TabsContent>
                                <TabContent id='tabList'>
                                    <List/>
                                </TabContent>
                                <TabContent id='tabCreate'>
                                    <Form onSubmit={this.props.create} submitLabel='Create' submitClass='primary'/>
                                </TabContent>
                                <TabContent id='tabUpdate'>
                                    <Form onSubmit={this.props.update} submitLabel='Update' submitClass='info'/>
                                </TabContent>
                                <TabContent id='tabDelete'>
                                    <Form onSubmit={this.props.remove} submitLabel='Delete' deleting={true} submitClass='danger'/>
                                </TabContent>
                            </TabsContent>
                        </Tabs>
                    </Content>
              
     
        )
    }
}


const mapStateToProps = state => ({
    user: state.loginReducer.user
})

const mapDispatchToProps = (dispatch) =>
    bindActionCreators({ init, create, update, remove }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycle)

