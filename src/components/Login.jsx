import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";

export const Login = () => {
    const [form, setForm] = useState({});
    const { handleToken } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleChange = ({target: {name, value}}) => {
        setForm({...form, [name]: value});
    }

    const setToken = () => {
        handleToken("adsas");
        navigate("/dashboard");
    }

    return <div>
        <input name='email' onChange={handleChange} type='text' placeholder='Enter Email' />
        <input name='password' onChange={handleChange} type='text' placeholder='Enter Password' />
        <button onClick={setToken}>Sign In</button>
    </div>
}