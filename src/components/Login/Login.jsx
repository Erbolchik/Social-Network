import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { Input, createField } from '../common/FormsControl/FormsControl'
import { required } from '../../utils/validators/validator'
import { connect } from 'react-redux'
import { login, logout } from '../../redux/authReducer'
import { Redirect } from 'react-router'
import styles from '../common/FormsControl/FormsControl.module.css'


const LoginForm = ({ handleSubmit, error }) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField("email", Input, [required], "email")}
            {createField("password", Input, [required], "password", { type: "password" })}
            <div>
                {createField(null, Input, null, "rememberMe", { type: "checkbox" })}Remember me
            </div>
            {error && <div className={styles.formSummaryError}>
                {error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}


const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        const { email, password, rememberMe } = formData
        props.login(email, password, rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }

    return (
        <div>
            <h1 >LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}
export default connect(mapStateToProps, { login, logout })(Login)