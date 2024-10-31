import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { loginBackend } from "../../store/session";
import "./LoginForm.css";

function LoginForm() {
    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('');
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const [errors, setErrors] = useState({});
    const sessionUser = useSelector((state) => state.session.user);
    const dispatch = useDispatch();

    if (sessionUser) return <Navigate to="/" replace={true} />

    const handleSubmit = e => {
        e.preventDefault()
        const invalidations = {}
        setErrors({})
        setHasSubmitted(true)

        // set errors if any
        if (!credential || credential.length < 3) {
            invalidations.credential =
                'Please provide an email or username of 3 or more characters'
        }
        if (!password || password.length < 6) {
            invalidations.password =
                'Please provide a password of 6 or more characters'
        }
        setErrors(invalidations)

        // If no errors, dispatch login thunk
        if (Object.entries(errors).length === 0) {
            const login = {
                credential,
                password
            }
            return dispatch(loginBackend(login)).catch(
                async (res) => {
                  const data = await res.json();
                  if (data?.errors) setErrors(data.errors);
                }
              )
        }
    }

    return (
        <div>
            <h2>Login!</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="username or email"
                    value={credential}
                    onChange={e => setCredential(e.target.value)}
                />
                <p className="errors">
                    {hasSubmitted && errors.credential? errors.credential : ''}
                </p>
                <input
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <p className="errors">
                    {hasSubmitted && errors.password? errors.password : ''}
                </p>
                <button type="submit">
                    Login
                </button>
            </form>
        </div>
    )
}

export default LoginForm;
