import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'normalize.css'; // CSS reset for consistent styling across browsers
import AllGames from './pages/all-games'; // AllGames page component
import Miscellaneous from './pages/miscellaneous'; // Miscellaneous page component
import About from './pages/about'; // About page component
import ShoppingCart from './pages/shopping-cart'; // ShoppingCart page component
import Navbar from './components/navbar'; // Navbar component
import Footer from './components/footer'; // Footer component

function App() {
  return <>
    {/* Provides routing capabilities */}
    <BrowserRouter>
      {/* Navbar component displayed on all pages */}
      <Navbar></Navbar>

      {/* Routes define the paths for navigation */}
      <Routes>
        <Route path="/all-games" element={<AllGames />} /> {/* Renders AllGames page */}
        <Route path="/miscellaneous" element={<Miscellaneous />} /> {/* Renders Miscellaneous page */}
        <Route path="/about" element={<About />} /> {/* Renders About page */}
        <Route path="/cart" element={<ShoppingCart />} /> {/* Renders ShoppingCart page */}
      </Routes>

      {/* Footer component displayed on all pages */}
      <Footer></Footer>
    </BrowserRouter>
  </>;
}

export default App;

