import React from 'react'

export default (props) => (
    <div>
        <div className={`input-group ${props.property ? props.property : ''} `}>
            <input {...props.input}
                className='form-control'
                placeholder={props.placeholder}
                min={props.min}
                step={props.step}
                readOnly={props.readOnly}
                type={props.type} />
            {props.icon &&
                <div className="input-group-append">
                    <div className="input-group-text">
                        <span className={`fa fa-${props.icon}`}></span>
                    </div>
                </div>
            }
        </div>
        {props.meta.touched && ((props.meta.error &&
            <div className='alert alert-danger' role='alert'> {props.meta.error}</div>) ||
             (props.meta.warning && 
                <div className='alert alert-warning' role='alert'>{props.meta.warning}</div>))}
    </div>
)