import React, { Component } from "react";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Content from '../../components/common/content'
import { get } from '../../services/HttpService'
import UrlService from '../../services/UrlService'

import Row from '../../components/template/layout/row'
import ValueBox from '../../components/common/valueBox'

import Can from '../../services/permissions/Can'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = { credits: 0, debts: 0, registrations: 0 }
    }

    async componentDidMount() {
        const response = await get(UrlService.get_summary())
        this.setState(response.data)
    }

    render() {
        const { credits, debts, registrations } = this.state

        return (
            <Content title="Dashboard">
                <Row>
                    <ValueBox cols='12 4' color='green' icon='bank' value={`$${credits}`} text='Credits total' />
                    <ValueBox cols='12 4' color='red' icon='credit-card' value={`$${debts}`} text='Debts total' />
                    <ValueBox cols='12 4' color='blue' icon='money' value={`$ ${credits - debts}`} text='Amount' />
                    <Can I='view' a='Registrations'>
                        <ValueBox cols='12 4' color='yellow' icon='user-plus' value={registrations} text='User registrations' />
                    </Can>
                </Row>
            </Content>
        )
    }
}

const mapStateToProps = state => ({
    user: state.loginReducer.user
})

const mapDispatchToProps = (dispatch) =>
    bindActionCreators({}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Home)
