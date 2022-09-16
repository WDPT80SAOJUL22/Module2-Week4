import './App.css';
import NavBar from './components/NavBar';
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import ProductForm from './pages/ProductForm';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/new' element={<ProductForm/>}/>
      </Routes>
    </div>
  );
}

export default App;
