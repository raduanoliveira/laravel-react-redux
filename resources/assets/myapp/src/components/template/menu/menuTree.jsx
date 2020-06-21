import React from 'react'

function handlerClick(event, id) {
    event.preventDefault()
    
    let elementLink = document.getElementById(id)
    elementLink.classList.toggle('menu-open')
    
    if(!elementLink.style.display){
        elementLink.style.display = 'none' 
    }

    if(elementLink.style.display == 'block'){
        elementLink.style.display = 'none'
    }else{
        elementLink.style.display = 'block'
    }
    
}
export default props => (
    <li className="nav-item has-treeview">
        <a href='#' className='nav-link' onClick={(event) => { handlerClick(event, props.id) }}>
            <i className={`nav-icon fa fa-${props.icon}`}/>
            <p>
            {props.label}
            <i className='right fa fa-angle-left'></i>
            </p>
        </a>
        <ul className="nav nav-treeview" style={{display:''}} id={props.id}>
            {props.children}
        </ul>
    </li>
)
