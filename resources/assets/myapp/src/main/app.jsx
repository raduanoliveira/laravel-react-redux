import React from 'react'

import Layout from '../components/common/layout'
import Footer from '../components/common/footer'
import Messages from '../components/common/messages'

export default props => (
    <div className='wrapper'>
        <Layout/>
        <div>
            {props.children}
        </div>
        <Messages/>
        <Footer/>
    </div>
)