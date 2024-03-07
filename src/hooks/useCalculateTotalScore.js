import { useState } from 'react';

const useCalculateTotalScore = () => {
  const [scores, setScores] = useState([0, 0, 0, 0, 0]);

  const handleScoreChange = (index, value) => {
    const newScores = [...scores];
    newScores[index] = value;
    setScores(newScores);
  };

  const calculateTotalScore = () => {
    return scores.reduce((acc, cur) => acc + cur, 0);
  };

  return { scores, handleScoreChange, calculateTotalScore };
};

export default useCalculateTotalScore;
