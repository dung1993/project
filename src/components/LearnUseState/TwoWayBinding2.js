import { useState } from "react";


function TwoWayBinding2() {
    const [state, setState] = useState({
        email: "",
        password: "",
        mobile: ""
    });

    const handleInput = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
        console.log(state);
        const handleLogin = () => {
            console.log(state);
        }
    }

    const handleChangeAccount = () => {
        setState({
            email: "Hà",
            password: "ABC",
            mobile: "1243"
        })
    }

    const { email, password,  mobile } = state;
    return (
        <div className="container">
            <input type="text" placeholder="email"
                value={email}
                name="email"
                onInput={handleInput}
            />
            <br/>
            <input type="password" placeholder="password"
                value={password}
                name="password"
                onInput={handleInput}
            />
            <br/>
            <input type="tel" placeholder="mobile"
                value={mobile}
                name="mobile"
                onInput={handleInput}
            />
            <br/>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleChangeAccount}>Change Account</button>
        </div>
    )
}

export default TwoWayBinding2;