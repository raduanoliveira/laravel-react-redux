import React from 'react'
import MenuItem from './menuItem'
import MenuTree from './menuTree'
import Can from '../../../services/permissions/Can'

export default props => (
    <nav className="mt-2">
        <ul className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false">
            <MenuItem path='home' label='Dashboard' icon='dashboard' />
            <MenuTree label='Registration' icon='edit' id='registration-link' >
                <MenuItem path='billingcycle' label='Billing Cycle' icon='usd' />
            </MenuTree>
            <Can I='view' a='manage'>
                <MenuTree label='Manage' icon='cogs' id='manage-link' >
                    <MenuItem path='manageUsers' label='Users' icon='users' />
                </MenuTree>
            </Can>
        </ul>
    </nav>
)
