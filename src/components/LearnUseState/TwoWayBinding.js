import { useState } from "react";

function TwoWayBinding(){
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleLogin = () => {

        console.log({
            email : email,
            password: password
        });
    }

    const handleChangeAccount = () => {
        setEmail("Hà");
        setPassword("ABC")
    }

    return (
        <div className="container">
            <input type="text" placeholder="email"
                value={email}
                onInput={(e) => setEmail(e.target.value)}
            />
            <br/>
            <input type="text" placeholder="password"
                value={password}
                onInput={(e) => setPassword(e.target.value)}
            />
            <br/>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleChangeAccount}>Change Account</button>
        </div>
    )
}

export default TwoWayBinding;