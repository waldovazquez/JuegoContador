import styles from './styles.module.css';

const Button = ({
    children,
    disabled = false,
    onClick = () => { },
}) => {
    return (
        <button
            className={styles.btn}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button;
