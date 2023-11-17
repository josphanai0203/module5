
import { Route, Routes } from 'react-router-dom';
import List from './component/List';
import Create from './component/Create';

function App() {
  return (
    <Routes>
      <Route path='/' element={<List/>}/>
      <Route path='/create' element={<Create/>}/>
    </Routes>
  );
}

export default App;
