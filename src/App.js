import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AddEmployee from './pages/add-employee';
import EditEmployee from './pages/edit-employee/edit-employee';
import Homepage from './pages/home-page';
import PageNotFound from './pages/page-not-found';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/add' element={<AddEmployee />} />
        <Route path='/edit/:id' element={<EditEmployee />} />
        <Route path='*' element={<PageNotFound/>} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
