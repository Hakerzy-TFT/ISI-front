import './App.css';
import Navbar from './components/navbar/Navbar'
import MainGameCarousel from './components/mainGameCarousel/mainGameCarousel'
import DayCategory from './components/dayCategory/dayCategory'

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Navbar />
          </header>
          <MainGameCarousel/>
          <DayCategory/>
      
    </div>
  );
}

export default App;
