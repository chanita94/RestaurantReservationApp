import styles from "./AboutUs.module.css"
export default function AboutUs() {
    return (
        <div className={styles.about}>
            <h2>Welcome to Sunrise - A Place Where Every Meal Feels Like a Sunrise</h2>
            <p>At Sunrise, we believe that every meal should be an experience, a memory that stays with you long after the last bite.
                 Our story began with a simple dream — to create a space where food, family, and friends come together to celebrate life's beautiful moments. Inspired by the golden hours of the morning, our restaurant brings the warmth and beauty of sunrise into every dish and every interaction.
                We take pride in serving fresh, locally-sourced ingredients prepared with love, passion, and artistry. Whether you're here for a casual lunch, a family dinner, or a special celebration, we invite you to experience a meal as radiant and comforting as the sunrise itself.
            </p>
            <div className="pictures">
                <img src="/food-1.jpg"/>
                <img src="/food-2.jpg"/>
                <img src="/food-4.jpg"/>
            </div>
            <p>At Sunrise, we believe that great food has the power to bring people together, to create moments of joy, and to turn an ordinary day into something special. Our journey began with a simple vision: to craft a space where flavors shine, hospitality is heartfelt, and every guest feels at home. 
                Inspired by the beauty of dawn, we infuse each dish with warmth, freshness, and a touch of artistry. Whether you're enjoying a casual brunch or an elegant dinner, we invite you to immerse yourself in an experience as bright, welcoming, and unforgettable as the sunrise itself.
            Our dishes, made with love and locally-sourced ingredients, reflect our passion for quality and tradition. Whether you're savoring a quiet moment with coffee or celebrating a special occasion, Sunrise is where memories are made, friendships are nurtured, and every meal feels like a fresh beginning.
            </p>
        </div>
    )
}