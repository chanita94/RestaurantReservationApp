import styles from "./Home.module.css"
export default function Home() {
    return (
        <div className={`${styles.homecontainer}`}>
            <div className={`${styles.textcontainer}`}>
                <h1 className="main-title">Welcome to Our Place</h1>
                <ul className="p-0 m-0">
                    <li className="d-flex align-items-center mb-2">Artistic interior</li>
                    <li className="d-flex align-items-center mb-2">Relaxing music</li>
                    <li className="d-flex align-items-center mb-2">Culinary masterpieces</li>
                    <li className="d-flex align-items-center mb-2">Hospitality</li>
                    <li className="d-flex align-items-center mb-2">Attention to details</li>
                </ul>
            </div>
        </div>
    )

}