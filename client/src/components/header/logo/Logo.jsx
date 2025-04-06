import ReactLogo from "../../../assets/react.svg"
import styles from "./Logo.module.css"
export default function Logo() {
    return (
        <div className={`d-flex align-items-center ${styles.logoContainer}`}>
            <img src={ReactLogo} alt="My SVG"></img>
            <h1 className="h3 text-primary">Sunrise</h1>
        </div>
    );
};  