import styles from './styles.module.css';

const Counter = ({
    counter = 0,
}) => {
    return (
        <div className={styles.container}>
            <p className={styles.counter}>{counter}</p>
        </div>
    )
}

export default Counter;
