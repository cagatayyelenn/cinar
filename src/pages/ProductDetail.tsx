import { useParams } from 'react-router-dom';
import { brands, products } from '../data/mockData';
import YilkarDetail from './details/YilkarDetail';
import WebastoDetail from './details/WebastoDetail';
import { Link } from 'react-router-dom';

export default function ProductDetail({ brandId: propBrandId, itemId: propItemId }: { brandId?: string, itemId?: string }) {
  const { brandId: paramBrandId, itemId: paramItemId } = useParams<{ brandId: string, itemId: string }>();
  
  const brandId = (propBrandId || paramBrandId || '').toLowerCase();
  const itemId = (propItemId || paramItemId || '').toLowerCase();
  
  // Robust product lookup
  const product = products.find(p => 
    p.id.toLowerCase() === itemId || 
    p.id.toLowerCase() === `${brandId}-${itemId}` ||
    (p.brandId.toLowerCase() === brandId && p.id.toLowerCase() === itemId.replace(`${brandId}-`, ''))
  );
  
  const brand = brands.find(b => b.id.toLowerCase() === brandId);

  if (!product || !brand) {
    return (
      <div className="container mx-auto py-32 text-center bg-white min-h-screen">
        <h2 className="text-2xl font-black mb-4 tracking-tighter">Ürün bulunamadı</h2>
        <p className="text-gray-500 mb-8">Aradığınız ürün stoklarımızda bulunmuyor veya link hatalı.</p>
        <Link to="/" className="bg-black text-white px-8 py-4 text-xs font-black tracking-tight hover:bg-gray-800 transition-colors">Anasayfaya dön</Link>
      </div>
    );
  }

  // BRAND-SPECIFIC DISPATCHER
  if (brand.id === 'yilkar') {
    return <YilkarDetail product={product} brand={brand} />;
  }
  
  if (brand.id === 'webasto') {
    return <WebastoDetail product={product} brand={brand} />;
  }

  // DEFAULT / FALLBACK (Climart or others)
  return <YilkarDetail product={product} brand={brand} />;
}
