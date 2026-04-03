import { useParams } from 'react-router-dom';
import ProductDetail from './ProductDetail';
import ServiceDetail from './ServiceDetail';
import { services, brands } from '../data/mockData';

export default function ItemDetail() {
  const { slug } = useParams<{ slug: string }>();
  
  // Find which brand the slug starts with
  const brand = brands.find(b => slug?.startsWith(b.id + '-'));
  const brandId = brand?.id || '';
  const itemId = brandId ? slug?.substring(brandId.length + 1) : slug || '';

  // Check if itemId matches any service ID
  const isService = services.some(s => s.id === itemId || s.id === `${brandId}-${itemId}` || s.id === slug);
  
  if (isService) {
    return <ServiceDetail brandId={brandId} itemId={itemId} />;
  }
  
  return <ProductDetail brandId={brandId} itemId={itemId} />;
}
