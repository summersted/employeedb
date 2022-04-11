import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/auth.context";
import Button from "../../components/button";
import InputField from "../../components/input-field";
import { login } from "../../services";
import {
    LoginForm,
    LoginLabels,
    LoginTitle
} from "./login-styles";

export default function LoginPage() {
    const auth = useContext(AuthContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const buttonOptions = {
        text: 'Sign In',
        background_color: '#008cff',
        element_width: '170px',
        element_height: '50px'
    }

    function submitClosure(username, password) {
        const obj = {
            username,
            password
        }
        return async function () {
            const filled = obj.username && obj.password;

            if (filled) {
                await login(obj).then(res => auth.login(res.token));
                navigate('/');
            } else {
                alert('Please, fill the form!')
            }
        }
    }

    const changeUsernameHandler = (e) => setUsername(e.target.value);
    const changePasswordHandler = (e) => setPassword(e.target.value);
    
    const submitHandler = submitClosure(username, password);

    return (
        <>
            <LoginTitle>Welcome bro</LoginTitle>
            <LoginForm>
                <LoginLabels>Username:</LoginLabels>
                <InputField
                    width={'150px'}
                    handler={changeUsernameHandler}
                    placeholder="Username" />
                <LoginLabels>Password:</LoginLabels>
                <InputField
                    width={'150px'}
                    handler={changePasswordHandler}
                    type='password'
                    placeholder="******" />
                <br />
                <Button buttonOptions={buttonOptions} handler={submitHandler} />
            </LoginForm>
        </>
    )
}