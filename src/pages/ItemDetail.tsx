import { useParams } from 'react-router-dom';
import ProductDetail from './ProductDetail';
import ServiceDetail from './ServiceDetail';
import { services } from '../data/mockData';

export default function ItemDetail() {
  const { brandId, itemId } = useParams<{ brandId: string, itemId: string }>();
  
  // Check if itemId matches any service ID
  const isService = services.some(s => s.id === itemId || s.id === `${brandId}-${itemId}`);
  
  if (isService) {
    // Pass the params down or let the component use useParams
    return <ServiceDetail />;
  }
  
  return <ProductDetail />;
}
