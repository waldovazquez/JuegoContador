import Footer from '../Footer';
import Header from '../Header';

import styles from './styles.module.css';

function Screen({
  children,
}) {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.content}>
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Screen;
