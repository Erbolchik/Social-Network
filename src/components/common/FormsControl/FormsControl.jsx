import React from 'react'
import styles from './FormsControl.module.css'
import { Field } from 'redux-form'

const FormControl = ({ input, meta:{error,touched},children }) => {
    const hasError = error && touched
    return (
        <div className={styles.formControl + " " + (hasError && styles.error)}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}


export const Textarea = (props) => {
    const { input, child, meta, ...restProps } = props
    return <FormControl {...props}><textarea {...input} {...restProps} /> </FormControl>
}

export const Input = (props) => {
    const { input, child, meta, ...restProps } = props
    return <FormControl {...props}><input {...input} {...restProps} /> </FormControl>
}

export const createField = (placeholder, component, validators, name,props={}) => (
    <div>
        <Field
            placeholder={placeholder}
            component={component}
            validate={validators}
            name={name} 
            {...props}
            />
    </div>
)