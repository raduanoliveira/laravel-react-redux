import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Content from '../../../components/common/content'
import Tabs from '../../../components/common/tab/tabs'
import TabsContent from '../../../components/common/tab/tabsContent'
import TabsHeader from '../../../components/common/tab/tabsHeader'
import TabHeader from '../../../components/common/tab/tabHearder'
import TabContent from '../../../components/common/tab/tabContent'
import { init, update, remove } from './manageUsersActions'

import Can from '../../../services/permissions/Can'
import Alert from '../../../components/template/layout/alert'

import List from './manageUsersList'
import Form from './manageUsersForm'

class ManageUsers extends Component {
    constructor(props) {
        super(props)
        this.props.init()
    }
    render() {

        return (
            <Content title='Manage users'>
                <Can I='view' a='ManageUsers'>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label='List' icon='bars' target='tabList' />
                            <TabHeader label='Update' icon='pencil' target='tabUpdate' />
                            <TabHeader label='Delete' icon='trash-o' target='tabDelete' />
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id='tabList'>
                                <List/>
                            </TabContent>
                            <TabContent id='tabUpdate'>
                                <Form onSubmit={this.props.update} submitLabel='Update user' submitClass='info'/>
                            </TabContent>
                            <TabContent id='tabDelete'>
                            <Form onSubmit={this.props.remove} submitLabel='Delete' deleting={true} submitClass='danger'/>
                            </TabContent>
                        </TabsContent>
                    </Tabs>
                </Can>
                <Can not I='view' a='ManageUsers'>
                    <Alert type='danger'>
                        you are not allowed to access Manage Users
                    </Alert>
                </Can>
            </Content>
        )
    }
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = (dispatch) =>
    bindActionCreators({init, update, remove}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(ManageUsers)