import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

import AddEmployee from './pages/add-employee';
import EditEmployee from './pages/edit-employee/edit-employee';
import Homepage from './pages/home-page';
import PageNotFound from './pages/page-not-found';

import './mirage/server';
import { useAuth } from './auth/auth.hook';
import { AuthContext } from './auth/auth.context';
import LoginPage from './pages/login/login';
import AuthRequire from './auth/auth-require';
import { makeServer } from './mirage/server';

makeServer({ environment: "development" });

const AppWrapper = styled.div`
  width: 600px;
  margin: 0 auto;
  padding-top: 50px;
`

function App() {
  const { login, logout, token } = useAuth();
  const isAuthenticated = !!token;

  return (
    <AuthContext.Provider value={{ login, logout, token, isAuthenticated }}>
      <AppWrapper>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={
              <AuthRequire >
                <Homepage />
              </AuthRequire>} />
            <Route path='/add' element={<AddEmployee />} />
            <Route path='/edit/:id' element={<EditEmployee />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </AppWrapper>
    </AuthContext.Provider>
  );
}

export default App;
