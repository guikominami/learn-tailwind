import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';

import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
