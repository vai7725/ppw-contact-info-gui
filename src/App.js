import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import CardContainer from './components/CardContainer';
import { useState } from 'react';

function App() {
  const [progress, setProgress] = useState(0);
  return (
    <>
      <Navigation />

      <CardContainer progress={progress} setProgress={setProgress} />
    </>
  );
}

export default App;
