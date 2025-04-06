import styles from "./MainNav.module.css";
import {Link} from "react-router-dom";
export default function MainNav () {
  return (
    <ul className={`navbar navbar-expand-lg bg-dark ${styles.navbar}`}>
      <li><Link className="btn btn-outline-light me-2" to="/">Home</Link></li>
      <li><Link className="btn btn-outline-light me-2" to="/AboutUs">About us</Link></li>
      <li><Link className="btn btn-outline-light me-2"to="/TableAvailability">Table Availability</Link></li>
      <li><Link className="btn btn-outline-light me-2" to="/Contacts">Contacts</Link></li>
    </ul>
  );
};

