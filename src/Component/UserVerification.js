import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { connect } from 'react-redux'
import './UserVerification.css';

function UserVerification(props) {
    const { register, handleSubmit, errors } = useForm()


    useEffect(() => {
        if (props.sendToTodolist) {
            props.history.push('/TodoList')
        }
    }, [props.sendToTodolist])


    const onSubmit = data => {
        props.verify(data)
        // for redirect the page to todolist

        props.history.push('/TodoList')

        console.log(data);


    }





    return (
        <>
            <div className="text-white rgba-stylish-strong py-3 px-3 z-depth-4" id="formContainer">
                <form id="formV" className="form-signin" onSubmit={handleSubmit(onSubmit)} >

                    <label for="exampleInputEmail1"><strong>React-Redux TodoList </strong></label>
                    <img src="https://source.unsplash.com/200x200/?code,snow" className="rounded mx-auto d-block" alt="..." width="72" height="72" />
                    <h1 className="h3 mb-3 font-weight-normal">TodoList </h1>
                    <label for="inputEmail" className="sr-only">Email address</label>
                    <input name="email" type="email" className="form-control" placeholder="Enter email"
                        ref={register({ required: { value: true, message: 'Email is Needed' }, pattern: { value: /^[\w-\.]+@([\w-]+\.)+[\w-]+$/, message: 'Email Format Wrong' } })} />

                    {errors.email && <span>{errors.email.message}</span>}

                    <label for="exampleInputPassword1">Password</label>
                    <input name="password" type="password" className="form-control" placeholder="Password" ref={register({ required: { value: true, message: 'Password is required' } })} />
                    {errors.password && <span>{errors.password.message}</span>}
                    <input className="btn btn-lg btn-primary btn-block" type="submit" value="Sign In" />
                    <p className="mt-5 mb-3 text-muted">© 2017-2018</p>
                </form>
            </div>

        </>
    )
}


const mapStateToProps = (state) => {
    return {

        state,
        sendToTodolist: state.userVerify.length > 0 ? true : false

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        verify: (val) => dispatch({ type: 'USER_VERIFY', payload: val })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserVerification)

