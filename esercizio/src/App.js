import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavBAr from './components/MyNavBar'
import SearchBar from './components/SearchBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import Details from './components/Details'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyNavBAr />
        <SearchBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/details/:nameCity' element={<Details />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
