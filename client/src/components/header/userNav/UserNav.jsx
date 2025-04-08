import styles from "./UserNav.module.css"
import { Link } from 'react-router-dom';

export default function UserNav({ isLoggedIn, handleLogOut }) {
    return (
        <ul className={`navbar navbar-expand-lg navbar-dark bg-dark d-flex ${styles.navbar}`}>
            {isLoggedIn ? (
                <button className="btn btn-outline-light me-2" onClick={handleLogOut}>
                    Log out 
                </button>
            ) : (
                <>
                    <li><Link to="/login" className="btn btn-outline-light me-2" >Log In</Link></li>
                    <li><Link to="/register" className="btn btn-outline-light me-2" >Register</Link></li>
                </>
            )}
        </ul>
    );
};