import React, {lazy, Suspense} from 'react';
import './App.css';
import {Navigate, Route, Routes} from 'react-router-dom';
import Home from './pages/Home.page';
import Page1 from './pages/Pag1.page';
import Page2 from './pages/Pag2.page';
import {Layout} from './components/Layout';
import PokeDetail from './pages/PokeDetail';



const App:React.FC = () => {

  const Big = lazy(() => import('./pages/Big.page'));

  const ValidatedPage = () => {
      const token = localStorage.getItem('token');
      console.log('token', token);

      if (token !== 'pippo') {
          return <Navigate to="/"/>
      }

      return (
          <Page1/>
      );
  }

  return (
      <Routes>
          <Route path="/" element={<Layout/>}>
              <Route index element={<Home/>} />
              <Route path="pagina1" element={<ValidatedPage/>}>
                  <Route index element={<h1>pagina 1 sub</h1>} />
                  <Route path="note" element={<h1>note</h1>} />
                  <Route path="ferie" element={<h1>ferie</h1>} />
              </Route>
              <Route path="pokemon" element={<Page2/>} />

              <Route path="pokemon/:name" element={<PokeDetail/>} />
              <Route path="pokemon/ciao" element={<Page2/>} />
              <Route path="bigpage" element={
                  <Suspense fallback={<h2>loading page...</h2>}>
                      <Big/>
                  </Suspense>

              } />
              <Route path="*" element={<h1>404 not found</h1>} />
          </Route>
      </Routes>
  )
}

export default App;
