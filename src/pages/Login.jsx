import React, {useContext} from 'react';
import MyInput from "../Components/UI/input/MyInput";
import MyButton from "../Components/UI/button/MyButton";
import {AuthContext} from "../context";

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const login = event =>{
        event.preventDefault()
        setIsAuth(true)
    }

    return (
        <div>
            <h1>Please Login</h1>
            <form onSubmit={login}>
                <MyInput type="text" placeholder="Username"></MyInput>
                <MyInput type="password" placeholder="Password"></MyInput>
                <MyButton>Enter</MyButton>
            </form>
        </div>
    );
};

export default Login;