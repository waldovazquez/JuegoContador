import Screen from './components/Screen';
import Counter from './components/Counter';
import Button from './components/Button';

import useCounter from './hooks/useCounter';

import styles from './styles.module.css';

const App = () => {
  const {
    counter,
    handleClick,
    isRunningGame,
    isRunningPreparation,
    message,
    startPreparation,
    timeLeft,
  } = useCounter();

  return (
    <Screen>
      <div className={styles.container}>
        <Counter counter={counter} />
        <div className={styles.messageContainer}>
          {
            true && <p >{message}</p>
          }
        </div>
        <div className={styles.container__content}>
          <Button
            disabled={!isRunningGame}
            onClick={handleClick}
          >
            Incrementar
          </Button>
          <Button
            disabled={isRunningGame || isRunningPreparation}
            onClick={startPreparation}
          >
            Empezar
          </Button>
        </div>
      </div>
      {
        isRunningGame &&
        <div className={styles.container__time}>
          <p>{`Tiempo restante: `}</p>
          <p className={styles.container__time__counter}>{timeLeft} Segundos</p>
        </div>
      }
    </Screen>
  )
}

export default App
