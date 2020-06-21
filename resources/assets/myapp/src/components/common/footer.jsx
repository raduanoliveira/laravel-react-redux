import React from 'react'

let date = new Date()
export default props => (
    <footer className='main-footer p-1'> 
        <strong> 
            Copyright &copy; {date.getFullYear()} All rights reserved.
        </strong>
    </footer>
)