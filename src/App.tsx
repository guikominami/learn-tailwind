import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { LanguageContextProvider } from './context/language.context';

import Lab from './Pages/Lab';
import Home from './Pages/Home';

import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <>
      <BrowserRouter>
        <LanguageContextProvider>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/lab' element={<Lab />} />
          </Routes>
        </LanguageContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
