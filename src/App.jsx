import { Routes, Route, Link } from 'react-router-dom';
import TestComponent from './components/TestComponent';
import Score0To100 from './pages/ScorePage0To100';
import Score101To200 from './pages/ScorePage101To200';
import Score201To300 from './pages/ScorePage201To300';
import Score301Plus from './pages/ScorePage301Plus';
import useCalculateTotalScore from './hooks/useCalculateTotalScore';

function App() {
  const { scores, handleScoreChange, calculateTotalScore } = useCalculateTotalScore();

  return (
    <div>
      <Routes>
        <Route path="/" element={<TestComponent scores={scores} handleScoreChange={handleScoreChange} />} />
        <Route path="/score-0-100" element={<Score0To100 />} />
        <Route path="/score-101-200" element={<Score101To200 />} />
        <Route path="/score-201-300" element={<Score201To300 />} />
        <Route path="/score-301-plus" element={<Score301Plus />} />
      </Routes>

      <div>
        <Link to="/score-0-100">
          <button disabled={calculateTotalScore() < 0 || calculateTotalScore() > 100}>
            0 - 100
          </button>
        </Link>
        <Link to="/score-101-200">
          <button disabled={calculateTotalScore() < 101 || calculateTotalScore() > 200}>
            101 - 200
          </button>
        </Link>
        <Link to="/score-201-300">
          <button disabled={calculateTotalScore() < 201 || calculateTotalScore() > 300}>
            201 - 300
          </button>
        </Link>
        <Link to="/score-301-plus">
          <button disabled={calculateTotalScore() < 301}>301+</button>
        </Link>
      </div>
    </div>
  );
}

export default App;