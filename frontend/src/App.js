import logo from './logo.svg';
import './App.css';
import Login from './Login'
import Signup from './Signup'
import Validation from './LoginValidation'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Menu from './Menu';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/menu' element={<Menu/>}></Route>
    </Routes>
     
    </BrowserRouter>
  );
}

export default App;
