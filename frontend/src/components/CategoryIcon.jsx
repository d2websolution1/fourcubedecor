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
  Sparkles,
  Layers
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
    default:
      return <Sparkles className={className} />;
  }
}
