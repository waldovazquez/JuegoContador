import { useContext } from 'react';
import ScoreContext from '../../context/scoreProvider';

import styles from './styles.module.css';

const Header = () => {
    const { maximumScore } = useContext(ScoreContext);
    return (
        <header className={styles.container}>
            <p className={styles.score}>{`Puntuación Máxima: ${maximumScore}`}</p>
        </header>
    )
}

export default Header;
