
import './App.css';
import Footer from './components/Footer';
import Main from './components/Main';
import Nvbar from './components/nvbar';
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Nvbar />
        <Main />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
