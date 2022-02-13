import styles from './card.module.css'

import QRCode from '../img/image-qr-code.png'

function Card() {
    return (
        <div className={styles.card}>
            <img alt='QRCode' src={QRCode} />
            <h1>
                Improve your front-end skills by building projects
            </h1>
            <p>
                Scan the QR code to visit Frontend Mentor
                and take your coding skills to the next level
            </p>
        </div>
    )
}

export default Card;