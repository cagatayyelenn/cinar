/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import { brands } from './data/mockData';
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
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="hakkimizda" element={<About />} />
            <Route path="hizmetlerimiz" element={<Services />} />
            <Route path="iletisim" element={<Contact />} />
            <Route path="yedek-parca" element={<SpareParts />} />
            
            {/* Dynamic brand service routes */}
            {brands.map((brand: any) => (
              <Route key={brand.id} path={`${brand.id}-yetkili-servisi`} element={<BrandService brandId={brand.id} />} />
            ))}
            
            <Route path="servis/:brandId" element={<BrandService />} />
            <Route path=":brandId/:categoryId" element={<BrandProducts />} />
            <Route path=":brandId/urunler" element={<BrandProducts />} />
            
            {/* SEO Friendly Product and Service Details - Catch-all for branding slugs */}
            <Route path=":slug" element={<ItemDetail />} />
            
            <Route path="*" element={<div className="container mx-auto py-20 text-center text-2xl font-bold">Sayfa Yapım Aşamasında</div>} />
          </Route>
        </Routes>
      </Router>
    </HelmetProvider>
  );
}
