import styles from './styles.module.css';

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <small className={styles.text}>
          &copy; {new Date().getFullYear()} Waldo Vazquez. Todos los derechos reservados.
        </small>
      </div>
    </footer>
  )
}

export default Footer