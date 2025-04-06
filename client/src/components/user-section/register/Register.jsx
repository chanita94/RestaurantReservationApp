import { useState } from "react";
import styles from "./Register.module.css";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const [Username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();
    
    async function handleSubmit(e) {

        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        const user = { Username, password };

        try {
            console.log("API URL:", import.meta.env.VITE_API_URL);
            // Fetch request to your ASP.NET Core API
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/user/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user), // Send user data in the request body
            });

            if (response.ok) {
                // Handle successful registration
                console.log("User registered successfully");
                navigate("/"); // Redirect to Home or Dashboard
                alert("Registration successful!");
            } else {
                // Handle errors
                console.log("Error registering user");
                alert("Registration failed. Please try again.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred. Please try again.");
        }
    }

    
    return (<div className={styles.registerContainer}>
        <form className={styles.registerForm} onSubmit={handleSubmit}>
            <h2>Create a New Account</h2>
            <input type="text" placeholder="Username" value={Username} onChange={(e) => 
            setUsername(e.target.value)} required
            />
            <input type="password" placeholder="Password" value={password} onChange={(e) => 
            setPassword(e.target.value)} required
            />
            <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => 
            setConfirmPassword(e.target.value)} required
            />
            <button type="submit">Register</button>
        </form>
    </div>
    )
}