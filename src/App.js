import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App body-background">
      <Header></Header>
      <Home></Home>
    </div>
  );
}

export default App;
