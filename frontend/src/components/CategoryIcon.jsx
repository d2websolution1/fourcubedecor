import React from 'react';
import { 
  ChefHat, 
  Sofa, 
  BedDouble, 
  DoorClosed, 
  Maximize2, 
  Briefcase, 
  Bath, 
  Home, 
  Building2, 
  Gem, 
  ShoppingBag, 
  Sparkles 
} from 'lucide-react';

export default function CategoryIcon({ name, className = "w-5 h-5 text-rose-600" }) {
  switch (name) {
    case 'ChefHat':
      return <ChefHat className={className} />;
    case 'Sofa':
      return <Sofa className={className} />;
    case 'BedDouble':
      return <BedDouble className={className} />;
    case 'DoorClosed':
      return <DoorClosed className={className} />;
    case 'Maximize2':
      return <Maximize2 className={className} />;
    case 'Briefcase':
      return <Briefcase className={className} />;
    case 'Bath':
      return <Bath className={className} />;
    case 'Home':
      return <Home className={className} />;
    case 'Building':
    case 'Building2':
      return <Building2 className={className} />;
    case 'Gem':
      return <Gem className={className} />;
    case 'ShoppingBag':
      return <ShoppingBag className={className} />;
    default:
      return <Sparkles className={className} />;
  }
}
