import styles from "./Contacts.module.css"
export default function Contacts() {
    return (
        <div className={styles.container}>
            <div className={styles.contactsContainer}>
                <div>
                    🥂 Reserve Your Moment With Us
                    Whether it's a cozy dinner, a family gathering, or a special celebration — we're just a message away.
                    We love turning ordinary days into memorable experiences.
                </div>
                <div>
                    📞 Reach Out<br />
                    Phone: +123 456 789<br />
                    Email: hello@sunrise-restaurant.com
                </div>
            </div>
        </div>

    )
}