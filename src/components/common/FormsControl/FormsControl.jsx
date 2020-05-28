import React from 'react'
import styles from './FormsControl.module.css'

export const Textarea = ({ input, meta, ...props }) => {
    const hasError=meta.error&& meta.touched
    return (
        <div className={styles.formControl + " " + (hasError && styles.error)}>
            <div>
                <textarea {...input} {...props} />
            </div>
            { hasError && <span>{meta.error}</span>}
        </div>

    )
}