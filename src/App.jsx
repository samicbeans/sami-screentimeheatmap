import Heatmap from './components/Heatmap.jsx';
import screentimeData from './screentime.json';

function App() {
  return (
    <div className="App">
      <Heatmap data={screentimeData} />
    </div>
  );
}

export default App;
