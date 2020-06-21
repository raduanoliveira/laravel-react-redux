import React from 'react'
const adaptFileEventToValue = delegate => (e) => {
    delegate(e.target.files[0])
}

const FileInput = ({
    input: { value: omitValue, onChange, onBlur, ...inputProps },
    ...props
}) => {

    return (
        <div>
            <div className={`input-group ${props.property}`}>
                <input
                    onChange={adaptFileEventToValue(onChange)}
                    onBlur={adaptFileEventToValue(onBlur)}
                    type="file"
                    {...props.input}
                    {...props}
                    className='form-control'
                    accept={props.accept}
                />
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

    );
};

export default FileInput
