import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

import AddEmployee from './pages/add-employee';
import EditEmployee from './pages/edit-employee/edit-employee';
import Homepage from './pages/home-page';
import PageNotFound from './pages/page-not-found';

const AppWrapper = styled.body`
  width: 600px;
  margin: 0 auto;
  padding-top: 50px;
`

function App() {
  return (
    <AppWrapper>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/add' element={<AddEmployee />} />
          <Route path='/edit/:id' element={<EditEmployee />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </AppWrapper>
  );
}

export default App;
