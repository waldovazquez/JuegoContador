import { createContext, useEffect, useState } from 'react';

const ScoreContext = createContext();

const ScoreProvider = ({
    children,
}) => {
    const [maximumScore, setMaximumScore] = useState(0);

    useEffect(() => {
        const storedMaxScore = localStorage.getItem("maxScore");
        if (storedMaxScore) {
            setMaximumScore(parseInt(storedMaxScore));
        }
    }, []);

    return (
        <ScoreContext.Provider
            value={{
                maximumScore,
                setMaximumScore,
            }}
        >
            {children}
        </ScoreContext.Provider>
    );
}

export { ScoreProvider };
export default ScoreContext;