import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllGames from './pages/all-games';
import About from './pages/about';
import Navbar from './navbar';
import Footer from './footer';


function App() {
  return <>

    <BrowserRouter>
    <Navbar></Navbar>
   
    <Routes>
      <Route path="/all-games" element={<AllGames />} />
      <Route path="/about" element={<About />} />
      </Routes>
       <Footer></Footer>
      </BrowserRouter>
    </>;
}

export default App;
