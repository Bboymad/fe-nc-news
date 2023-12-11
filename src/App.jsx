import { Routes, Route} from 'react-router-dom'
import './App.css'

import Home from './pages/Home';
import AllArticles from './pages/AllArticles';

import Header from './components/Header'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/AllArticles' element={<AllArticles />} />
      </Routes>
    </div>
  );
};

export default App
