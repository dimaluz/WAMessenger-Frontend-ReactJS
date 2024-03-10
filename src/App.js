import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllMessages from './pages/AllMessages/AllMessages';
import CreateWAMessage from './pages/CreateWAMessage/CreateWAMessage';
import LoadingPage from './pages/LoadingPage/LoadingPage';
import TestPage from './pages/TestPage/TestPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route index element={<Home />} />
          <Route path='/home' element={<Home />} /> */}
          <Route path='/templates' element={<AllMessages />} />
          <Route path='/wamsgcreation' element={<CreateWAMessage />} />
          <Route path='/loading' element={<LoadingPage />} />
          {/* <Route path='/categories' element={<Categories />} />
          <Route path='/product' element={<ProductDetails />} />
          <Route path='/place_order' element={<Order />} />
          <Route path='/dashboard' element={<Dashboard />} /> */}
          <Route path='/test' element={<TestPage />} />
          {/* <Route path='*' element={<NoPage />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
