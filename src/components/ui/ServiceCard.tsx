import React from 'react';
import { Plus } from 'lucide-react';
import { cn } from '../../lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  color: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, image, color }) => {
  return (
    <div className="relative group overflow-hidden rounded-md aspect-[4/5] bg-gray-100 shadow-xl cursor-default transition-all duration-500 hover:-translate-y-2">
      {/* Background Image */}
      <img 
        src={image} 
        alt={title} 
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      
      {/* Overlay Layer */}
      <div 
        className="absolute inset-0 transition-transform duration-500 ease-in-out translate-y-[calc(100%-80px)] group-hover:translate-y-0"
        style={{ backgroundColor: color }}
      >
        <div className="p-8 h-full flex flex-col justify-between">
          <div>
            <h3 className="text-3xl font-black text-white mb-4 italic tracking-tighter">
              {title}
            </h3>
            <div className="w-12 h-1 bg-white/30 mb-8 rounded-full"></div>
            
            <p className="text-white/90 text-sm leading-relaxed font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
              {description}
            </p>
          </div>

          <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 delay-200 transform translate-y-4 group-hover:translate-y-0">
             <button className="bg-white text-black px-8 py-3 rounded-md font-black text-xs tracking-widest hover:bg-opacity-90 transition-all flex items-center gap-2">
               HİZMETİ İNCELE <Plus size={14} />
             </button>
          </div>
        </div>
      </div>

      {/* Subtle Gradient Shadow (Base state) */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/40 to-transparent pointer-events-none group-hover:opacity-0 transition-opacity"></div>
    </div>
  );
};

export default ServiceCard;
