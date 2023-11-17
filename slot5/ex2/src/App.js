import logo from './logo.svg';
import './App.css';
import Library from './components/Library';
import { Route, Routes } from 'react-router-dom';
import Create from './components/create';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Library/>}/>
      <Route path='/create' element={<Create/>}/>
      <Route path='/edit/:id' element={<Create/>}/>
      
    </Routes>
  );
}

export default App;
