import React from 'react'

import Grid from '../../components/template/layout/grid'
import Row from '../../components/template/layout/row'
import ValueBox from '../../components/common/valueBox'

export default (props) => (
    <Grid cols='12' position={props.position}>
        <fieldset>
            <legend>Summary</legend>
            <Row>
                <ValueBox cols='12 4' color='green' icon='bank' value={`R$ ${props.credit}`} text='Total credits'/>
                <ValueBox cols='12 4' color='red' icon='credit-card' value={`R$ ${props.debt}`} text='Total debts'/>
                <ValueBox cols='12 4' color='blue' icon='money' value={`R$ ${props.credit - props.debt}`} text='Total'/>
            </Row>
        </fieldset>
    </Grid>
)
