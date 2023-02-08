import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AxiosRequest from './AxiosRequest';
import Success from './components/Success';
import FetchRequest from './FetchRequest';
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
            <Route path='/axios' element={<AxiosRequest />} />
            <Route path='/fetch' element={<FetchRequest />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
