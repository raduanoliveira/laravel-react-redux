import React from 'react'
import Grid from '../../template/layout/grid'

export default props => (
    <Grid cols={props.cols} position={props.position}>
        <div>
            <label htmlFor={props.name}>{props.label}</label>
            <div className={`input-group`}>
                <input {...props.input} className='form-control' min={props.min} step={props.step} placeholder={props.placeholder}
                    readOnly={props.readOnly} type={props.type} />
                {props.icon &&
                    <div className="input-group-append">
                        <div className="input-group-text">
                            <span className={`fa fa-${props.icon}`}></span>
                        </div>
                    </div>
                }
            </div>
        </div>
        {props.meta.touched && ((props.meta.error &&
            <div className='alert alert-danger' role='alert'> {props.meta.error}</div>) ||
            (props.meta.warning &&
                <div className='alert alert-warning' role='alert'>{props.meta.warning}</div>))}

    </Grid>
)
