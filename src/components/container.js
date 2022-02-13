import Card from './card';

import styles from './container.module.css'

function Container() {
    return (
        <div className={styles.container}>
            <Card />
        </div>
    )
}

export default Container;