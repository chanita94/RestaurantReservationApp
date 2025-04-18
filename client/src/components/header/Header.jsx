import Logo from "./logo/Logo";
import MainNav from "./mainNav/MainNav";
import UserNav from "./userNav/UserNav";
import styles from "./Header.module.css";

export default function Header({isLoggedIn, handleLogOut}) {
    return (
        <nav className={`${styles.header}`} >
            <Logo />
            <MainNav />
            <UserNav isLoggedIn={isLoggedIn} handleLogOut={handleLogOut} />
        </nav>
    )
}