import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

export default function Login({ setIsLoggedIn }) {
    const [Username, setUsername] = useState("");
    const [password, setPassword] = useState("")
    const navigate = useNavigate();
    // //Clear input fields on first render on component mount
    // useEffect(() => {
    //     setUsername("");
    //     setPassword("");
    //     // Cleanup function to clear when unmounted
    //     return () => {
    //         setUsername("");
    //         setPassword("");
    //     };
    // }, []);
    async function handleSubmit(e) {

    e.preventDefault();


    if (Username && password) {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/user/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username: Username, password:password }),
            });

            if (response.ok) {
                const data = await response.json();
                // You can store any relevant data in localStorage or state here
                localStorage.setItem("isLoggedIn", true);
                localStorage.setItem("token", data.token); // Assuming the backend returns a token
                navigate("/"); // Redirect to Home or Dashboard
                alert("LOGGED");
                setIsLoggedIn(true);
            } else {
                alert("Invalid username or password!");
            }
        }
        catch (error) {
            console.error("Error:", error);
            alert("An error occurred. Please try again.");
        }
    }
}

return (
    <div className={styles.loginContainer}>
        <form className={styles.loginForm} onSubmit={handleSubmit}>
            <input type="text" placeholder="Username" value={Username} onChange={(e) =>
                setUsername(e.target.value)} required autoComplete="off"spellCheck="false"/>
            <input type="password" placeholder="Password" value={password} onChange={(e) =>
                setPassword(e.target.value)} required autoComplete="off"/>
            <button type="submit">Login</button>
        </form>
    </div>
)
}