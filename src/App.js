import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Success from './components/Success';
// import Hft1 from './Heartfulness/Hft1';
// import './Heartfulness/Hft1.css';
// import Hft2 from './Heartfulness/Hft2';
// import Main from './Heartfulness/Main';
import Layout from './pages/Layout';
import ProductPage from './pages/ProductPage';

function App() {
  return ( 
    <div className='App'>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<ProductPage />} />
            <Route path='/success' element={<Success />} />
            {/* <Route path='/HFT' element={<Hft1 />} />
            <Route path='/HFT2' element={<Hft2 />} /> */}
            {/* <Route path='/UIDesigns' element={<Main />} /> */}
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
