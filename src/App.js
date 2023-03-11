import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Main from './components/Main/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import Testimonios from './components/Testimonios/Testimonios';

function App() {
  return (
    <>
      <NavBar />
      <Main />
      <Testimonios />
    </>
  );
}

export default App;
