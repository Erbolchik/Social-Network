import React from 'react'
import { reduxForm, Field } from 'redux-form'


const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder="login" component="input" name="login" type="text" />
            </div>
            <div>
                <Field placeholder="password" component="input" name="password" type="text" />
            </div>
            <div>
                <Field type='checkbox' component="input" name="rememberMe" /> Remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}


const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = () => {
    const onSubmit = (formData) => {
        console.log(formData)
    }

    return (
        <div>
            <h1 >LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}


export default Login