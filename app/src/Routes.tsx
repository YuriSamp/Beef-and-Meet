import { Footer } from 'Components/Footer';
import { NavBar } from 'Components/NavBar';
import { Catalogo } from 'Pages/Catalogo';
import { Contato } from 'Pages/Contato';
import { Home } from 'Pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export const AppRouter = () => {
  return (
    <main>
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/'>
            <Route index element={<Home/>}/>
            <Route path='cardapio' element={<Catalogo/>}/>
            <Route path='contato' element={<Contato/>}/>
            {/* <Route path='cardapio' element={<Catalogo/>}/>
            <Route path='cardapio' element={<Catalogo/>}/>
            <Route path='cardapio' element={<Catalogo/>}/> */}
          </Route>
        </Routes>
        <Footer/>
      </Router>
    </main>
  );
};