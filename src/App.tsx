/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout';
import Home from './pages/Home';
import BrandService from './pages/BrandService';
import BrandProducts from './pages/BrandProducts';
import ItemDetail from './pages/ItemDetail';
import SpareParts from './pages/SpareParts';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="hakkimizda" element={<About />} />
            <Route path="hizmetlerimiz" element={<Services />} />
            <Route path="iletisim" element={<Contact />} />
            <Route path="yedek-parca" element={<SpareParts />} />
            
            <Route path="servis/:brandId" element={<BrandService />} />
            <Route path="urunler/:brandId" element={<BrandProducts />} />
            
            {/* Combined Route for Product and Service Details */}
            <Route path="detay/:brandId/:itemId" element={<ItemDetail />} />
            
            <Route path="*" element={<div className="container mx-auto py-20 text-center text-2xl font-bold">Sayfa Yapım Aşamasında</div>} />
          </Route>
        </Routes>
      </Router>
    </HelmetProvider>
  );
}
