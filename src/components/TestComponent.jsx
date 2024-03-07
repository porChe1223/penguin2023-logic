import React from 'react';

const TestComponent = ({ scores, handleScoreChange }) => {
  const totalPossibleScore = 400;

  return (
    <div>
      {[...Array(4)].map((_, index) => (
        <div key={index}>
          <p>Group {index + 1}</p>
          {[20, 40, 60, 80, 100].map((score, innerIndex) => (
            <label key={innerIndex}>
              <input
                type="radio"
                name={`group${index}`}
                value={score}
                checked={scores[index] === score}
                onChange={() => handleScoreChange(index, score)}
              />
              {score}
            </label>
          ))}
        </div>
      ))}
      <p>Total Score: {scores.reduce((acc, cur) => acc + cur, 0)} / {totalPossibleScore}</p>
    </div>
  );
};

export default TestComponent;