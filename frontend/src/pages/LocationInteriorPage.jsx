import React, { useState, useEffect } from 'react';
import { useParams, useLocation, Link, useNavigate } from 'react-router-dom';
import { 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  ArrowRight, 
  Phone, 
  MessageCircle, 
  Star, 
  Award, 
  ChevronRight, 
  Building2, 
  Layers, 
  ChevronDown,
  Info,
  Play,
  Calculator,
  Calendar,
  UserCheck,
  Compass,
  Ruler,
  Wrench,
  Check,
  Maximize2,
  FileText,
  BadgeCheck
} from 'lucide-react';
import { southDelhiLocations, getLocationBySlug, getServiceByPath, realDecorVideo } from '../data/locationsData';
import { 
  realKitchenImages, 
  realLivingImages, 
  realBedroomImages,
  realWardrobeImages,
  realBathroomImages,
  realStudyImages,
  officeDecorData, 
  jewelleryDecorData, 
  mallDecorData,
  shopDecorData
} from '../data/decorMedia';
import { companyContact } from '../data/interiorData';

export default function LocationInteriorPage({ onOpenConsultation, locationSlug, serviceKey }) {
  const { slug, service } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  // Find location by prop, or slug param, or current location pathname
  const effectiveSlug = locationSlug || slug || location.pathname;
  const locationData = getLocationBySlug(effectiveSlug) || southDelhiLocations[0];

  // Determine current service
  const effectiveService = serviceKey || service || getServiceByPath(location.pathname);

  // States for interactive filters & sections
  const [activeFaq, setActiveFaq] = useState(null);
  const [selectedBhk, setSelectedBhk] = useState('3bhk');
  const [kitchenLayoutFilter, setKitchenLayoutFilter] = useState('all');
  const [wardrobeTypeFilter, setWardrobeTypeFilter] = useState('all');
  const [activeProcessStep, setActiveProcessStep] = useState(0);

  // Scroll to top on slug or path change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveFaq(null);
  }, [locationData.slug, location.pathname]);

  // HomeLane-Inspired Curated Kitchen Designs for this locality
  const curatedKitchens = [
    {
      id: 'k-1',
      title: `Coastal Chic Island Kitchen in ${locationData.name}`,
      layout: 'Island',
      dimensions: "14' x 11'",
      finish: 'High-Gloss Acrylic & Quartz',
      desc: 'Seamless quartz waterfall island with built-in tall pantry and Blum soft-close tandem drawers.',
      image: realKitchenImages[0]?.image || locationData.heroImage,
      tag: 'Straight Island'
    },
    {
      id: 'k-2',
      title: `Sleek Serenity Parallel Modular Kitchen`,
      layout: 'Parallel',
      dimensions: "12' x 9'",
      finish: 'Matte PU & Black Granite',
      desc: 'Double counter layout with continuous profile LED strips, deep vegetable drawers, and concealed chimney duct.',
      image: realKitchenImages[1]?.image || locationData.heroImage,
      tag: 'Parallel Worktop'
    },
    {
      id: 'k-3',
      title: `Dark Elegance Tinted Glass U-Shaped Kitchen`,
      layout: 'U-Shaped',
      dimensions: "15' x 12'",
      finish: 'Smoke Glass & Terrazzo Quartz',
      desc: 'Full U-shaped working triangle with magic corner pullouts and hydraulic lift-up smoked glass wall cabinets.',
      image: realKitchenImages[2]?.image || locationData.heroImage,
      tag: 'U-Shaped Island'
    },
    {
      id: 'k-4',
      title: `Flawless White Straight Modular Kitchen`,
      layout: 'Straight',
      dimensions: "10' x 8'",
      finish: 'Anti-Scratch Acrylic',
      desc: 'Compact single-wall design with tall grocery pull-out and spice organizers designed for North Indian cooking.',
      image: realKitchenImages[0]?.image || locationData.heroImage,
      tag: 'Straight'
    },
    {
      id: 'k-5',
      title: `Dark Vanilla L-Shaped Modular Kitchen`,
      layout: 'L-Shaped',
      dimensions: "13' x 10'",
      finish: 'High-Gloss Laminate',
      desc: 'Efficient corner working triangle with dual-tone vanilla cabinetry and microwave oven tall cavity.',
      image: realKitchenImages[1]?.image || locationData.heroImage,
      tag: 'L-Shaped'
    }
  ];

  const filteredKitchens = kitchenLayoutFilter === 'all'
    ? curatedKitchens
    : curatedKitchens.filter(k => k.layout.toLowerCase() === kitchenLayoutFilter.toLowerCase());

  // HomeLane-Inspired Curated Wardrobes
  const curatedWardrobes = [
    {
      id: 'w-1',
      title: `Contemporary Oasis Floor-to-Ceiling Wardrobe`,
      type: 'Floor-to-Ceiling',
      dimensions: "13' x 12' | Straight",
      finish: 'Charcoal Gloss & Steel Handles',
      desc: 'Full-height wardrobe with overhead suitcase lofts, anti-bending aluminum stiffeners, and accessory organizer.',
      image: realWardrobeImages[2]?.image || locationData.heroImage,
      tag: 'Floor-to-Ceiling'
    },
    {
      id: 'w-2',
      title: `Stately in Greige Walk-in Wardrobe Suite`,
      type: 'Walk-in',
      dimensions: "15' x 10' | Walk-in",
      finish: 'Lacquered Glass & Oak',
      desc: 'Spacious walk-in closet with dedicated shoe pull-outs, backlit glass shelves, and full vanity dressing counter.',
      image: realWardrobeImages[0]?.image || locationData.heroImage,
      tag: 'Walk-in Closet'
    },
    {
      id: 'w-3',
      title: `Green Meadow Sliding Door Wardrobe`,
      type: 'Sliding',
      dimensions: "12' x 10' | Sliding",
      finish: 'High-Gloss Acrylic with Bronze Mirror',
      desc: 'Anti-jump sliding rollers with dust-sealed brush gaskets suited for South Delhi summers.',
      image: realWardrobeImages[1]?.image || locationData.heroImage,
      tag: 'Sliding Door'
    },
    {
      id: 'w-4',
      title: `The Grand Millennial Hinged Wardrobe Design`,
      type: 'Hinged',
      dimensions: "11'6\" x 10' | L-Shaped",
      finish: 'Matte PU Finish with Brass Handles',
      desc: 'L-shaped corner wardrobe with soft-close 110-degree Blum hinges and integrated interior sensor lighting.',
      image: realWardrobeImages[0]?.image || locationData.heroImage,
      tag: 'Hinged Shutters'
    }
  ];

  const filteredWardrobes = wardrobeTypeFilter === 'all'
    ? curatedWardrobes
    : curatedWardrobes.filter(w => w.type.toLowerCase() === wardrobeTypeFilter.toLowerCase());

  // Curated Bedrooms
  const curatedBedrooms = [
    {
      title: `Minimalist Modern Master Suite in ${locationData.name}`,
      dimensions: "16' x 12' | Master Bedroom",
      desc: 'Italian marble backdrop with natural teak fluted louvers, floating bed with perimeter halo LED, and bedside tables.',
      image: realBedroomImages[0]?.image || locationData.heroImage,
      tag: 'Luxury Master'
    },
    {
      title: `Beige & Gold Upholstered Guest Bedroom`,
      dimensions: "14' x 11' | Guest Bedroom",
      desc: 'Textured fabric acoustic headboard with champagne brass inlays and integrated drop pendant lights.',
      image: realBedroomImages[1]?.image || locationData.heroImage,
      tag: 'Guest Bedroom'
    },
    {
      title: `Contemporary Bedroom with Integrated Sliding Storage`,
      dimensions: "14' x 12' | Bedroom & Study",
      desc: 'Taupe laminate finish with matching low-height TV console and false ceiling cove lighting.',
      image: realBedroomImages[2]?.image || locationData.heroImage,
      tag: 'Builder Floor Suite'
    },
    {
      title: `Custom Arch Headboard Artisan Bedroom`,
      dimensions: "King Size | Handcrafted",
      desc: 'Handcrafted fluted channel arch headboard with integrated hydraulic bed storage and warm halo glow.',
      image: realBedroomImages[4]?.image || locationData.heroImage,
      tag: 'Artisan Woodwork'
    }
  ];

  // Curated Living Rooms
  const curatedLivingRooms = [
    {
      title: `Warm Oak Fluted Wall TV Unit & Curio Display`,
      dimensions: "16' x 10' | TV Lounge",
      desc: 'Natural oak louvers with concealed ambient backlights, tall curio showcase, and wire-free floating credenza.',
      image: realLivingImages[0]?.image || locationData.heroImage,
      tag: 'Acoustic Fluting'
    },
    {
      title: `Statuario Marble & Geometric Brass TV Wall`,
      dimensions: "12' x 9' | Living Feature",
      desc: 'Statuario marble backing with brass metal geometric inlays and dual-drawer floating media console.',
      image: realLivingImages[1]?.image || locationData.heroImage,
      tag: 'Statuario Marble'
    },
    {
      title: `Modern TV Console with Integrated Backlit Mandir`,
      dimensions: "14' x 9' | Living & Pooja",
      desc: 'Integrated backlit Om CNC carved pooja mandir unit, glass showcase door, and 4-drawer floating base.',
      image: realLivingImages[2]?.image || locationData.heroImage,
      tag: 'Pooja Integrated'
    },
    {
      title: `Black Marble Executive TV Wall with Vapor Fireplace`,
      dimensions: "14' x 10' | Luxury Penthouse",
      desc: 'Black bookmatched marble veined cladding paired with electric water vapor flame cassette and vertical curio niches.',
      image: realLivingImages[3]?.image || locationData.heroImage,
      tag: 'Vapor Fireplace'
    }
  ];

  // Curated Bathrooms
  const curatedBathrooms = [
    {
      title: `Walnut Woodgrain & Terrazzo Floating Vanity`,
      desc: 'Boiling-water-proof (BWP) marine grade carcass with seamless quartz basin and black matte brassware.',
      image: realBathroomImages[0]?.image || locationData.heroImage,
      tag: '100% BWP Marine Core'
    },
    {
      title: `Oval Touch Backlit Mirror & Fluted Corner Vanity`,
      desc: 'Touch-sensor defogger mirror with black granite counter and moisture-sealed fluted woodwork.',
      image: realBathroomImages[0]?.image || locationData.heroImage,
      tag: 'Moisture Sealed'
    }
  ];

  // 15 End-to-End Interior Solutions (HomeLane Exact 15-item Grid)
  const interiorSolutions = [
    { name: 'Modular Kitchen', slug: 'modular-kitchen', desc: 'Island, Parallel & L-Shape with Blum runners', icon: '🍳' },
    { name: 'Storage & Wardrobes', slug: 'wardrobe', desc: 'Floor-to-ceiling sliding & walk-in wardrobes', icon: '🚪' },
    { name: 'Kids Bedroom', slug: 'bedroom', desc: 'Playful themes, bunk beds & study units', icon: '🧸' },
    { name: 'Study Tables & Cabins', slug: 'home-office', desc: 'Ergonomic dual worktables & storage niches', icon: '💻' },
    { name: 'TV Units & Consoles', slug: 'living-room', desc: 'Marble fluted walls & floating credenzas', icon: '📺' },
    { name: 'Space Saving Furniture', slug: 'space-saving', desc: 'Hydraulic beds & foldable dining consoles', icon: '📐' },
    { name: 'Bathroom Vanities', slug: 'bathroom', desc: '100% BWP moisture-proof vanity cabinets', icon: '🚿' },
    { name: 'Foyer & Shoe Units', slug: 'home-interiors', desc: 'Grand entryways with integrated bench seating', icon: '👟' },
    { name: 'Pooja Room & Mandirs', slug: 'home-interiors', desc: 'Backlit CNC carved jaali & brass bell niches', icon: '🪔' },
    { name: 'Crockery & Bar Units', slug: 'living-room', desc: 'Tinted glass cabinets with stemware racks', icon: '🍷' },
    { name: 'Movable Furniture', slug: 'home-interiors', desc: 'Custom sofas, dining chairs & lounge ottomans', icon: '🛋️' },
    { name: 'False Ceiling & Coves', slug: 'home-interiors', desc: 'Gyproc plasterboard with warm indirect coves', icon: '✨' },
    { name: 'Architectural Lighting', slug: 'home-interiors', desc: 'Magnetic track lights & 4000K spot beams', icon: '💡' },
    { name: 'Wall Paint & Textures', slug: 'home-interiors', desc: 'Royale luxury emulsion & metallic finishes', icon: '🎨' },
    { name: 'Luxury Wallpapers', slug: 'home-interiors', desc: 'Textured fabric, botanical & geometric motifs', icon: '🖼️' }
  ];

  // 6-Step Interior Design Process (HomeLane Exact Flow)
  const designProcessSteps = [
    {
      num: '1',
      title: 'Meet Your Designer',
      payment: 'Free Consultation',
      desc: 'Meet our senior interior architect on-site in South Delhi. Share your ideas, floor plan, and lifestyle needs to receive instant 3D space plans and an itemised quotation.',
      deliverable: 'Floor plan review, laser measurement & initial 3D layout'
    },
    {
      num: '2',
      title: 'Book Your Order',
      payment: '10% Advance',
      desc: 'Pay 10% of the woodwork value to lock your booking and activate dedicated project architects on our 3D SpaceCraft rendering platform.',
      deliverable: 'Official contract signing & project milestone schedule'
    },
    {
      num: '3',
      title: 'Finalise Your Design',
      payment: '10% Material Lock',
      desc: 'Review physical swatches of Action TESA HDHMR, high-gloss acrylics, quartz slabs, and Blum hinges. Pay 10% to lock final designs and initiate site electrical masking.',
      deliverable: '3D photorealistic walkthrough & CAD production drawings'
    },
    {
      num: '4',
      title: 'Send Designs to Factory',
      payment: '30% Production Kick-off',
      desc: 'Pay 30% of woodwork to dispatch machine codes to our German automated CNC factory. Zero manual sawing on your site.',
      deliverable: 'Automated CNC milling, edge-banding & flat-pack quality audit'
    },
    {
      num: '5',
      title: 'Kick Off Dispatch',
      payment: 'Remaining 50% Balance',
      desc: 'Pay the remaining woodwork balance post-production when flat-packs are dispatched in protected corrugated packaging directly to your doorstep.',
      deliverable: 'Doorstep dispatch with verified inventory checklist'
    },
    {
      num: '6',
      title: 'Installation & Handover',
      payment: 'Guaranteed 45 Days',
      desc: 'Our specialized technicians assemble all modular cabinetry within 7 to 10 days using dust-free vacuum drills. Final cleaning, 10-year warranty certificate & handover!',
      deliverable: 'Move-in deep cleaning & 10-year flat warranty certificate'
    }
  ];

  // BHK Package Details
  const bhkDetails = {
    '1bhk': {
      title: `1 BHK / Studio Interior in ${locationData.name}`,
      range: locationData.avgCostSummary?.bhk1 || '₹2.8L - ₹4.5L',
      items: [
        '1 Modular Kitchen (Straight / L-Shape) with Blum runners',
        '1 Floor-to-Ceiling Wardrobe with overhead lofts',
        'Compact TV Wall with floating media credenza',
        'False ceiling with warm LED cob lights & coves',
        'Site masking, deep cleaning & 10-year flat warranty'
      ]
    },
    '2bhk': {
      title: `2 BHK Complete Home Package in ${locationData.name}`,
      range: locationData.avgCostSummary?.bhk2 || '₹4.5L - ₹7.8L',
      items: [
        'L-Shape / Parallel Modular Kitchen with quartz counter',
        '2 Full-Height Wardrobes (1 Sliding + 1 Hinged)',
        'Living Room Statuario Marble TV Wall Unit',
        'False ceiling in Living Room & 2 Bedrooms with LED lights',
        'Dedicated pooja mandir unit & shoe rack at foyer'
      ]
    },
    '3bhk': {
      title: `3 BHK Premium Builder Floor Interior in ${locationData.name}`,
      range: locationData.avgCostSummary?.bhk3 || '₹7.5L - ₹14.5L',
      items: [
        'Island / Parallel German Kitchen with tall pantry & Blum tandembox',
        '3 Floor-to-Ceiling Wardrobes with dressing vanity & lofts',
        'Acoustic fluted oak louvers & marble TV feature wall',
        'Master Bedroom tufted acoustic bed headboard',
        'Dual ergonomic study tables & complete designer lighting'
      ]
    },
    '4bhk': {
      title: `4 BHK / Duplex / Penthouse Suite in ${locationData.name}`,
      range: locationData.avgCostSummary?.bhk4 || '₹13.5L - ₹25L',
      items: [
        'High-Gloss Acrylic Island Kitchen with breakfast bar & smoke glass lofts',
        '4 Bespoke Wardrobes + Walk-in dressing closet with sensor lights',
        'Electric vapor fireplace TV feature & CNC room divider',
        'Pooja room with backlit corian mandir & brass inlays',
        'Complete turnkey electrical, painting, false ceilings & 10-yr warranty'
      ]
    },
    'commercial': {
      title: `Commercial Showroom / Retail Fitout in ${locationData.name}`,
      range: locationData.avgCostSummary?.commercial || '₹850 - ₹2,000 / sq.ft',
      items: [
        'High-security tempered glass display counters',
        '4000K daylight gemstone profile illumination',
        'Executive director cabins with acoustic fluted panelling',
        'POS cashier counter, waiting lounge & brand display towers',
        'Turnkey fast-track handover within 35 to 45 days'
      ]
    }
  };

  const currentBhk = bhkDetails[selectedBhk] || bhkDetails['3bhk'];

  // Top Design Architects Showcase (HomeLane 600+ Expert Designers style)
  const expertDesigners = [
    {
      name: 'Manusha Sharma',
      experience: '14+ Years Experience',
      projects: '320+ Completed Projects',
      specialty: 'Ultra-Luxury Builder Floors & Penthouse Suites',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80'
    },
    {
      name: 'Rahul Kapoor',
      experience: '12+ Years Experience',
      projects: '240+ Completed Projects',
      specialty: 'German Modular Kitchens & Space-Saving Systems',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=80'
    },
    {
      name: 'Priyanka Sen',
      experience: '16+ Years Experience',
      projects: '390+ Completed Projects',
      specialty: 'Acoustic Wall Panelling, Lighting & Modern Aesthetics',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80'
    },
    {
      name: 'Dhiraj Malhotra',
      experience: '10+ Years Experience',
      projects: '190+ Completed Projects',
      specialty: 'Commercial Retail Showrooms & Jewellery Boutiques',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=80'
    }
  ];

  // Extended Localized FAQs for this specific South Delhi location
  const extendedFaqs = [
    {
      q: `How do I begin my home interior project in ${locationData.name} with FourCube Decor?`,
      a: `Getting started is effortless. Simply book a free design consultation online or call us. Our senior interior architect will visit your ${locationData.name} site with laser measurement meters, understand your floor plan and lifestyle requirements, and create a 3D design with a transparent itemised quotation within 24 to 48 hours.`
    },
    {
      q: `What is the average cost of 2BHK, 3BHK, and 4BHK home interiors in ${locationData.name}?`,
      a: `For a 2 BHK in ${locationData.name}, turnkey modular woodwork typically ranges from ₹4.5 Lakhs to ₹7.8 Lakhs. A premium 3 BHK builder floor is between ₹7.5 Lakhs to ₹14.5 Lakhs, while expansive 4 BHK penthouses and villas range from ₹13.5 Lakhs to ₹25+ Lakhs depending on finishes (Acrylic, PU, Italian Veneer) and scope.`
    },
    {
      q: `Which materials are best suited for South Delhi's hot summers and dust?`,
      a: `In ${locationData.name}, homes experience dry, hot summers and high ambient dust. We use heavy-duty Action TESA HDHMR and BWP marine-grade plywood with zero borer risk. Our wardrobes feature dust-sealed brush gaskets, and our modular shutters use German UV-stabilized, heat-resistant anti-scratch acrylics that never bubble or yellow.`
    },
    {
      q: `How does FourCube Decor guarantee delivery in 45 days in ${locationData.name}?`,
      a: `Unlike local carpenters who chop wood inside your home for months, 85% of our modular components are precision-cut, edge-banded, and pre-drilled in our German automated CNC factory. On-site work in ${locationData.name} is strictly limited to clean, dust-free assembly taking just 7 to 10 days. We back our 45-day SLA with a contractually bound delay penalty.`
    },
    {
      q: `Do you provide 3D designs and virtual walkthroughs before starting production?`,
      a: `Yes! Before a single panel is milled in the factory, you review photorealistic 3D renders of your kitchen, bedrooms, and living room on our 3D platform. You can tweak laminate shades, handle profiles, lighting coves, and storage layouts in real-time until every inch feels perfect.`
    },
    {
      q: `Can you customize interiors to blend traditional elements with modern German modular woodwork?`,
      a: `Absolutely. Many South Delhi families request dedicated backlit pooja mandirs, traditional swings, brass metal inlays, and warm wooden tones seamlessly paired with ultra-sleek German Blum tandem drawers and quartz countertops.`
    },
    {
      q: `What warranty is provided on modular woodwork and hardware?`,
      a: `We provide an official 10-Year Flat Replacement Warranty certificate covering structural HDHMR/plywood carcass integrity against termites, borers, and delamination, coupled with lifetime functional warranties on Blum, Hettich, and Hafele soft-close hinges and tandem runners.`
    },
    {
      q: `Where is your interior design experience centre in South Delhi that I can visit?`,
      a: `Our South Delhi Flagship Experience Hub is conveniently located near Select Citywalk / Outer Ring Road, South Delhi. You can inspect life-size modular kitchens, walk-in wardrobes, touch hardware samples, and sit with a design architect over a fresh cup of coffee.`
    },
    {
      q: `Do you handle commercial showrooms and jewellery retail fitouts in ${locationData.name}?`,
      a: `Yes! We are South Delhi’s leading turnkey specialist for commercial retail boutiques, diamond jewellery showrooms with 4000K daylight gemstone illumination, anti-burglary glass counters, and corporate director cabins with acoustic fluted louvers.`
    },
    {
      q: `Are there any hidden costs or surprise price hikes after signing?`,
      a: `None. Our itemised quotation specifies every single square foot, board brand (Action TESA/Century), finish grade, and hardware model. Once the design is locked, your price is 100% frozen with zero cost escalations.`
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      
      {/* 1. Breadcrumbs & Top Notification */}
      <div className="bg-slate-950 text-slate-300 border-b border-slate-800 py-2.5 px-4 sm:px-8 text-xs">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 overflow-x-auto whitespace-nowrap">
            <Link to="/" className="text-slate-400 hover:text-white transition">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <Link to="/cities" className="text-slate-400 hover:text-white transition">All Cities</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-slate-400">South Delhi</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-amber-400 font-semibold">{locationData.name}</span>
          </div>
          <div className="flex items-center gap-3 text-slate-400">
            <span className="flex items-center gap-1 text-emerald-400 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5" /> Serving Pin Code: {locationData.pincode}
            </span>
          </div>
        </div>
      </div>

      {/* 2. Static Locality Quick Switcher Bar (Direct City Links - Fixed) */}
      <div className="bg-white border-b border-slate-200 shadow-sm relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto scrollbar-none pb-1 sm:pb-0">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 shrink-0 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-rose-600" /> South Delhi Locations:
            </span>
            {southDelhiLocations.map((loc) => {
              const isActive = loc.slug === locationData.slug;
              const targetUrl = `/interior-designers-${loc.slug}`;
              return (
                <Link
                  key={loc.slug}
                  to={targetUrl}
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition shrink-0 ${
                    isActive
                      ? 'bg-rose-600 text-white shadow-md shadow-rose-600/30'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  {loc.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* 3. Hero Section (HomeLane Ahmedabad & Hyderabad Architecture) */}
      <section className="relative bg-slate-950 text-white overflow-hidden">
        {/* Background photo with luxury overlays */}
        <div className="absolute inset-0 z-0">
          <img 
            src={locationData.heroImage} 
            alt={`Best Interior Designers in ${locationData.name}`} 
            className="w-full h-full object-cover object-center opacity-30 scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Heading, Narrative & Counters */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-600/20 border border-rose-500/30 text-rose-300 text-xs font-bold animate-float-slow">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>#1 Rated Turnkey Interior Designers in {locationData.name}</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight leading-tight text-white">
                Best Interior Designers in <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-amber-300 to-rose-200">{locationData.name}</span>
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
                Looking for the perfect home interior in {locationData.name}? FourCube Decor’s senior interior architects breathe life into your décor dreams! From luxury builder floors to duplex penthouses and retail boutiques, we craft extraordinary spaces with German-precision woodwork, itemised quotes, and guaranteed 45-day move-in.
              </p>

              {/* Statistics Counters Banner (HomeLane Style: 400+ Projects, 15+ Designers, etc.) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/10 text-center luxury-card-hover">
                  <span className="block text-2xl font-black text-amber-300 font-heading">
                    {locationData.stats.projectsDone || '400+'}
                  </span>
                  <span className="text-[11px] text-slate-300 font-medium">Projects Done</span>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/10 text-center luxury-card-hover">
                  <span className="block text-2xl font-black text-rose-400 font-heading">
                    {locationData.stats.designers || '15+'}
                  </span>
                  <span className="text-[11px] text-slate-300 font-medium">Expert Designers</span>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/10 text-center luxury-card-hover">
                  <span className="block text-2xl font-black text-emerald-400 font-heading">
                    2 Studios
                  </span>
                  <span className="text-[11px] text-slate-300 font-medium">South Delhi Hubs</span>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/10 text-center luxury-card-hover">
                  <span className="block text-2xl font-black text-amber-300 font-heading flex items-center justify-center gap-1">
                    <Star className="w-4 h-4 fill-amber-300 text-amber-300" />
                    {locationData.stats.rating || '4.9/5'}
                  </span>
                  <span className="text-[11px] text-slate-300 font-medium">Verified Rating</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                <button
                  onClick={() => onOpenConsultation(`Free Consultation for ${locationData.name}`)}
                  className="px-7 py-4 bg-rose-600 hover:bg-rose-700 text-white font-bold text-sm rounded-xl transition shadow-xl shadow-rose-600/30 flex items-center justify-center gap-2 transform active:scale-95 group"
                >
                  <span>Book Free 3D Design Session</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href={`https://wa.me/${companyContact.whatsappRaw}?text=Hi%20FourCube%20Decor,%20I%20am%20looking%20for%20an%20interior%20designer%20in%20${encodeURIComponent(locationData.name)},%20South%20Delhi.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl transition shadow-lg flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Design Expert</span>
                </a>
              </div>
            </div>

            {/* Right Column: Experience Hub Card */}
            <div className="lg:col-span-5">
              <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-8 text-slate-800 shadow-2xl border border-white/30 space-y-5">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-rose-600">
                      Local Experience Hub
                    </span>
                    <h3 className="text-xl font-bold font-heading text-slate-900">
                      {locationData.name} Studio Network
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center font-bold">
                    <MapPin className="w-5 h-5" />
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  We provide personalized doorstep site visits with laser measurements across all sectors & blocks of {locationData.name}.
                </p>

                {/* Popular areas in this locality */}
                <div className="space-y-2">
                  <span className="text-xs font-bold text-slate-700">Top Service Localities in {locationData.name}:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {locationData.popularSocieties.map((soc, idx) => (
                      <span 
                        key={idx}
                        className="text-[11px] bg-slate-100 text-slate-700 font-medium px-2.5 py-1 rounded-lg border border-slate-200"
                      >
                        ✓ {soc}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Quick Consultation Form Trigger */}
                <div className="p-4 rounded-2xl bg-gradient-to-br from-rose-50 to-amber-50 border border-rose-100 space-y-3">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-rose-600 shrink-0" />
                    <span className="text-xs font-bold text-slate-900">Get a Free 3D Plan & Exact Cost Estimate</span>
                  </div>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    Zero consultation fee. Get modular kitchen, wardrobe & living room 3D render with fixed pricing within 24 hours.
                  </p>
                  <button
                    onClick={() => onOpenConsultation(`Estimate for ${locationData.name}`)}
                    className="w-full py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl transition shadow flex items-center justify-center gap-1.5"
                  >
                    <span>Request Free Site Visit in {locationData.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Section 1: Inspiring Kitchen Designs (HomeLane Pattern) */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div className="max-w-3xl space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-600 px-3 py-1 bg-rose-50 rounded-full">
                Culinary Workspaces
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-heading">
                Inspiring Kitchen Designs in {locationData.name}
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                The kitchen is the hardest-working room in any {locationData.name} home. Many South Delhi families cook elaborate North Indian meals and store spices, flours, and pantry items in bulk. FourCube Decor’s modular kitchen designers plan the work triangle, deep tandem drawers, tall pantry units, and appliance cavities around your cooking habits, showing you photorealistic 3D renders before German automated production begins.
              </p>
            </div>

            <Link
              to={`/modular-kitchen-in-${locationData.slug}`}
              className="text-xs sm:text-sm font-bold text-rose-600 hover:text-rose-700 flex items-center gap-1 shrink-0 group"
            >
              <span>See all Kitchen Designs</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Kitchen Layout Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6">
            {['all', 'straight', 'l-shaped', 'parallel', 'island', 'u-shaped'].map((layout) => (
              <button
                key={layout}
                onClick={() => setKitchenLayoutFilter(layout)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition ${
                  kitchenLayoutFilter === layout
                    ? 'bg-rose-600 text-white shadow-sm'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                {layout === 'all' ? 'All Kitchens' : layout.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Kitchen Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredKitchens.map((kitchen, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition duration-300 flex flex-col group"
              >
                <div className="relative h-60 overflow-hidden bg-slate-100">
                  <img 
                    src={kitchen.image} 
                    alt={kitchen.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-md text-white text-[10px] font-bold">
                    {kitchen.tag}
                  </span>
                  <span className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-white/90 backdrop-blur-md text-slate-800 text-[10px] font-bold">
                    {kitchen.dimensions}
                  </span>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-base text-slate-900 group-hover:text-rose-600 transition font-heading">
                      {kitchen.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                      {kitchen.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-slate-500">
                      {kitchen.finish}
                    </span>
                    <button
                      onClick={() => onOpenConsultation(`${kitchen.title} in ${locationData.name}`)}
                      className="px-3.5 py-1.5 bg-slate-900 hover:bg-rose-600 text-white text-xs font-bold rounded-lg transition"
                    >
                      Get Estimate
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Section 2: Wardrobe Designs That Wow (HomeLane Pattern) */}
      <section className="py-16 sm:py-20 bg-slate-100 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div className="max-w-3xl space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-600 px-3 py-1 bg-white rounded-full shadow-sm">
                Smart Storage Architecture
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-heading">
                Wardrobe Designs That Wow in {locationData.name}
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                From suits and formal sherwanis to everyday wear and travel luggage, a {locationData.name} household needs storage that works hard. Our wardrobe designers plan floor-to-ceiling units with lofts, dedicated accessory drawers, trouser pull-outs, and built-in dressing mirrors. South Delhi has hot, dusty summers, so heat-stable laminates, anti-bending aluminum stiffeners, and dust-sealed brush gaskets ensure your wardrobes stay pristine for decades.
              </p>
            </div>

            <Link
              to={`/wardrobe-in-${locationData.slug}`}
              className="text-xs sm:text-sm font-bold text-rose-600 hover:text-rose-700 flex items-center gap-1 shrink-0 group"
            >
              <span>See all Wardrobes</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Wardrobe Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6">
            {['all', 'sliding', 'hinged', 'walk-in', 'floor-to-ceiling'].map((type) => (
              <button
                key={type}
                onClick={() => setWardrobeTypeFilter(type)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition ${
                  wardrobeTypeFilter === type
                    ? 'bg-rose-600 text-white shadow-sm'
                    : 'bg-white hover:bg-slate-200 text-slate-700 border border-slate-200'
                }`}
              >
                {type === 'all' ? 'All Wardrobes' : type.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Wardrobe Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredWardrobes.map((wardrobe, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition duration-300 flex flex-col group"
              >
                <div className="relative h-64 overflow-hidden bg-slate-100">
                  <img 
                    src={wardrobe.image} 
                    alt={wardrobe.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-md text-white text-[10px] font-bold">
                    {wardrobe.tag}
                  </span>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-rose-600 uppercase tracking-wider block">
                      {wardrobe.dimensions}
                    </span>
                    <h3 className="font-bold text-sm text-slate-900 group-hover:text-rose-600 transition font-heading mt-1">
                      {wardrobe.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                      {wardrobe.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[10px] text-slate-500 font-medium">
                      Action TESA HDHMR
                    </span>
                    <button
                      onClick={() => onOpenConsultation(`${wardrobe.title} in ${locationData.name}`)}
                      className="px-3 py-1.5 bg-slate-900 hover:bg-rose-600 text-white text-[11px] font-bold rounded-lg transition"
                    >
                      Book Design
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Section 3: Bedroom Designs That Spell Comfort (HomeLane Pattern) */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div className="max-w-3xl space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-600 px-3 py-1 bg-rose-50 rounded-full">
                Sanctuary of Rest
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-heading">
                Bedroom Designs That Spell Comfort in {locationData.name}
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Turn your bedroom into a tranquil retreat with thoughtful bedroom interior architecture in {locationData.name}. From hydraulic beds with suitcase storage to acoustic fluted velvet headboards and floating nightstands with concealed wireless chargers, we balance comfort, acoustic peace, and personal luxury.
              </p>
            </div>

            <Link
              to={`/bedroom-in-${locationData.slug}`}
              className="text-xs sm:text-sm font-bold text-rose-600 hover:text-rose-700 flex items-center gap-1 shrink-0 group"
            >
              <span>See all Bedroom Designs</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {curatedBedrooms.map((bedroom, idx) => (
              <div 
                key={idx}
                className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition duration-300 flex flex-col group"
              >
                <div className="relative h-56 overflow-hidden bg-slate-100">
                  <img 
                    src={bedroom.image} 
                    alt={bedroom.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-md text-white text-[10px] font-bold">
                    {bedroom.tag}
                  </span>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-slate-500 block">
                      {bedroom.dimensions}
                    </span>
                    <h3 className="font-bold text-sm text-slate-900 group-hover:text-rose-600 transition font-heading mt-1">
                      {bedroom.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                      {bedroom.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-200">
                    <button
                      onClick={() => onOpenConsultation(`${bedroom.title} in ${locationData.name}`)}
                      className="w-full py-2 bg-white hover:bg-rose-600 hover:text-white text-slate-800 text-xs font-bold rounded-lg border border-slate-200 transition"
                    >
                      Plan My Bedroom
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Section 4: Vibrant Living Room Designs (HomeLane Pattern) */}
      <section className="py-16 sm:py-20 bg-slate-100 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div className="max-w-3xl space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-600 px-3 py-1 bg-white rounded-full shadow-sm">
                Entertainment & Heritage
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-heading">
                Vibrant Living Room Designs in {locationData.name}
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                The living room is where South Delhi families relax, entertain, and celebrate festive milestones. Homeowners here pair clean contemporary lines with warm wood tones, a dedicated pooja space or mandir, bookmatched marble TV walls, and false ceiling coves. Our designers plan the TV unit, seating, curio display, and lighting as one harmonious composition.
              </p>
            </div>

            <Link
              to={`/living-room-in-${locationData.slug}`}
              className="text-xs sm:text-sm font-bold text-rose-600 hover:text-rose-700 flex items-center gap-1 shrink-0 group"
            >
              <span>See all Living Rooms</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {curatedLivingRooms.map((living, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition duration-300 flex flex-col group"
              >
                <div className="relative h-56 overflow-hidden bg-slate-100">
                  <img 
                    src={living.image} 
                    alt={living.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-md text-white text-[10px] font-bold">
                    {living.tag}
                  </span>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-slate-500 block">
                      {living.dimensions}
                    </span>
                    <h3 className="font-bold text-sm text-slate-900 group-hover:text-rose-600 transition font-heading mt-1">
                      {living.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                      {living.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <button
                      onClick={() => onOpenConsultation(`${living.title} in ${locationData.name}`)}
                      className="w-full py-2 bg-slate-100 hover:bg-rose-600 hover:text-white text-slate-800 text-xs font-bold rounded-lg transition"
                    >
                      Book Living Room Visit
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Section 5: Refreshingly Chic Bathroom Designs (HomeLane Pattern) */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div className="max-w-3xl space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-600 px-3 py-1 bg-rose-50 rounded-full">
                Spa & Vanity
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-heading">
                Refreshingly Chic Bathroom Designs in {locationData.name}
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                A neat, well-lit bathroom makes mornings effortless. For {locationData.name} homes, our designers recommend water-resistant (BWP) marine vanity cabinets, wall-mounted storage to keep floors clear, touch-sensor LED defogger mirrors, and concealed plumbing niches.
              </p>
            </div>

            <Link
              to={`/bathroom-in-${locationData.slug}`}
              className="text-xs sm:text-sm font-bold text-rose-600 hover:text-rose-700 flex items-center gap-1 shrink-0 group"
            >
              <span>See all Bathrooms</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {curatedBathrooms.map((bath, idx) => (
              <div 
                key={idx}
                className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition duration-300 flex flex-col group"
              >
                <div className="relative h-60 overflow-hidden bg-slate-100">
                  <img 
                    src={bath.image} 
                    alt={bath.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-md text-white text-[10px] font-bold">
                    {bath.tag}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-base text-slate-900 group-hover:text-rose-600 transition font-heading">
                      {bath.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      {bath.desc}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-200">
                    <button
                      onClick={() => onOpenConsultation(`${bath.title} in ${locationData.name}`)}
                      className="w-full py-2.5 bg-slate-900 hover:bg-rose-600 text-white text-xs font-bold rounded-xl transition"
                    >
                      Book Vanity Design
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. End-to-End Interior Solutions (15-Item Grid like HomeLane) */}
      <section className="py-16 sm:py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-400 px-3 py-1 bg-rose-950/80 border border-rose-800 rounded-full">
              Complete Single-Roof Service
            </span>
            <h2 className="text-2xl sm:text-4xl font-black font-heading text-white">
              End-to-End Interior Solutions in {locationData.name}
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Planning interiors in {locationData.name} doesn’t mean coordinating with multiple carpenters, electricians, and painters. FourCube Decor brings modular kitchens, wardrobes, false ceilings, and decor together under one roof.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3.5 sm:gap-4">
            {interiorSolutions.map((sol, idx) => (
              <Link
                key={idx}
                to={`/${sol.slug}-in-${locationData.slug}`}
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-rose-500/50 rounded-2xl p-4 text-center transition group luxury-card-hover flex flex-col justify-between"
              >
                <div>
                  <span className="text-2xl block mb-2">{sol.icon}</span>
                  <h4 className="font-bold text-xs sm:text-sm text-white group-hover:text-rose-400 transition font-heading">
                    {sol.name}
                  </h4>
                  <p className="text-[10px] text-slate-400 mt-1 leading-snug line-clamp-2">
                    {sol.desc}
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-white/5 flex items-center justify-center gap-1 text-[10px] text-rose-400 font-bold group-hover:translate-x-0.5 transition-transform">
                  <span>Explore</span>
                  <ChevronRight className="w-3 h-3" />
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={() => onOpenConsultation(`Complete Home Estimate for ${locationData.name}`)}
              className="px-8 py-3.5 bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs sm:text-sm rounded-xl transition shadow-xl"
            >
              Get Free Estimate for All Services
            </button>
          </div>
        </div>
      </section>

      {/* 10. Why We Are One of the Best Interior Designers in {locationData.name} (4 Promises) */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-600">
              Four Core Guarantees
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-heading">
              Why We Are One of the Best Interior Designers in {locationData.name}?
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              What makes FourCube Decor the top interior design company in {locationData.name}? Four contractually guaranteed promises:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:border-rose-400 transition luxury-card-hover">
              <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-slate-900 mb-2 font-heading">
                Delivery in 45 Days*
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Computerized German CNC edge-banding ensures precision fabrication. Assembled in 45 days or we pay you delay compensation.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:border-rose-400 transition luxury-card-hover">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-slate-900 mb-2 font-heading">
                No Hidden Costs
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Itemised, transparent quotations with zero mid-work surprises. Every hinge, board thickness, and finish is clearly documented.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:border-rose-400 transition luxury-card-hover">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
                <BadgeCheck className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-slate-900 mb-2 font-heading">
                Flat 10-Year Warranty
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Official warranty certificate covering termite, borer, and delamination across Action TESA HDHMR and marine grade cores.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:border-rose-400 transition luxury-card-hover">
              <div className="w-12 h-12 rounded-xl bg-cyan-100 text-cyan-700 flex items-center justify-center mb-4">
                <Calculator className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-slate-900 mb-2 font-heading">
                Easy EMIs & PM Support
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Flexible EMI options coupled with a dedicated site project manager who sends daily WhatsApp photo updates of work progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 11. 55,000+ Homes Delivered Across India (BHK Cost Packages) */}
      <section className="py-16 sm:py-20 bg-slate-100 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-600">
              Proven Across Thousands of Homes
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-heading">
              55,000+ Homes Delivered Across India
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              We have transformed spaces of different sizes, layouts, and styles. Explore typical interior investment packages tailored for {locationData.name}:
            </p>
          </div>

          {/* BHK Selector Pills */}
          <div className="flex justify-center gap-2 sm:gap-3 flex-wrap mb-8">
            {[
              { id: '1bhk', label: '1 BHK' },
              { id: '2bhk', label: '2 BHK' },
              { id: '3bhk', label: '3 BHK Builder Floor' },
              { id: '4bhk', label: '4 BHK / Duplex' },
              { id: 'commercial', label: 'Commercial Boutique' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedBhk(tab.id)}
                className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition ${
                  selectedBhk === tab.id
                    ? 'bg-rose-600 text-white shadow-md shadow-rose-600/30'
                    : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Active BHK Detail Card */}
          <div className="max-w-3xl mx-auto bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-6">
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Typical Budget in {locationData.name}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-heading">
                  {currentBhk.title}
                </h3>
              </div>
              <div className="bg-rose-50 border border-rose-200 px-5 py-3 rounded-2xl text-center sm:text-right">
                <span className="text-xs text-rose-700 font-medium block">Estimated Range</span>
                <span className="text-2xl font-black text-rose-600 font-heading">{currentBhk.range}</span>
              </div>
            </div>

            <div className="py-6 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                What's Included in This Package:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                {currentBhk.items.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-slate-500">
                * Exact pricing varies based on chosen finish (Acrylic / PU / Veneer) and carpet area.
              </p>
              <button
                onClick={() => onOpenConsultation(`${currentBhk.title} in ${locationData.name}`)}
                className="w-full sm:w-auto px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl transition shadow flex items-center justify-center gap-2"
              >
                <span>Get Exact Quote for My Floor</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Calculators Cards (HomeLane Pattern) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-10">
            <div className="bg-gradient-to-br from-rose-900 to-slate-900 text-white p-7 rounded-3xl shadow-lg border border-white/10 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold text-rose-400 uppercase tracking-wider block">
                  Complete Home Costing
                </span>
                <h3 className="text-xl font-bold font-heading mt-1">
                  Full Home Interior Cost in {locationData.name}
                </h3>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  Get a personalized price estimate for complete 1BHK, 2BHK, 3BHK, or 4BHK builder floors in {locationData.name} without any commitment.
                </p>
              </div>
              <button
                onClick={() => onOpenConsultation(`Full Home Interior Cost Estimate for ${locationData.name}`)}
                className="mt-6 py-3 px-5 bg-white hover:bg-rose-50 text-rose-700 text-xs font-bold rounded-xl transition flex items-center justify-center gap-2"
              >
                <Calculator className="w-4 h-4" />
                <span>Calculate Full Home Estimate</span>
              </button>
            </div>

            <div className="bg-gradient-to-br from-amber-900 to-slate-900 text-white p-7 rounded-3xl shadow-lg border border-white/10 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider block">
                  Modular Kitchen Costing
                </span>
                <h3 className="text-xl font-bold font-heading mt-1">
                  Modular Kitchen Cost in {locationData.name}
                </h3>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  Calculate cost based on your kitchen shape (L-shape, Parallel, Island, U-shape) and finish (High Gloss Acrylic, Matte PU, Quartz).
                </p>
              </div>
              <button
                onClick={() => onOpenConsultation(`Modular Kitchen Cost Calculator for ${locationData.name}`)}
                className="mt-6 py-3 px-5 bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-bold rounded-xl transition flex items-center justify-center gap-2"
              >
                <Calculator className="w-4 h-4" />
                <span>Calculate Kitchen Cost</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 12. 600+ Expert Designers Behind Every FourCube Decor Home */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-600 px-3 py-1 bg-rose-50 rounded-full">
              Design Excellence Network
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-heading">
              600+ Expert Designers Behind Every FourCube Decor Home
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              Behind every project is a trained architect backed by a network of 600+ design experts. Your dedicated interior designer in {locationData.name} will listen to your requirements, build your home in 3D, and refine it until every room feels right:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertDesigners.map((designer, idx) => (
              <div 
                key={idx}
                className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition flex flex-col group"
              >
                <div className="h-64 overflow-hidden bg-slate-200 relative">
                  <img 
                    src={designer.image} 
                    alt={designer.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <h4 className="font-bold text-base font-heading">{designer.name}</h4>
                    <span className="text-[11px] text-amber-300 font-semibold">{designer.experience}</span>
                  </div>
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded-md bg-rose-100 text-rose-700 text-[10px] font-bold">
                      {designer.projects}
                    </span>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      Speciality: <span className="font-semibold text-slate-800">{designer.specialty}</span>
                    </p>
                  </div>

                  <button
                    onClick={() => onOpenConsultation(`Consultation with ${designer.name} in ${locationData.name}`)}
                    className="w-full py-2 bg-slate-900 hover:bg-rose-600 text-white text-xs font-bold rounded-lg transition"
                  >
                    Book Free Session
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. Our Interior Design Process – 6 Steps (HomeLane Exact Flow) */}
      <section className="py-16 sm:py-20 bg-slate-950 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 px-3 py-1 bg-amber-950/80 border border-amber-800 rounded-full">
              Seamless 6-Step Journey
            </span>
            <h2 className="text-2xl sm:text-4xl font-black font-heading text-white">
              Our Interior Design Process – From Design to Move-In
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm">
              Getting your home interiors done in {locationData.name} follows six clear, transparent milestones:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {designProcessSteps.map((step, idx) => (
              <div 
                key={idx}
                className="bg-white/5 border border-white/10 rounded-3xl p-6 relative flex flex-col justify-between hover:border-rose-500/50 transition group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-10 h-10 rounded-2xl bg-rose-600 text-white font-black text-lg flex items-center justify-center font-heading">
                      {step.num}
                    </span>
                    <span className="text-[11px] font-bold text-amber-300 bg-white/10 px-3 py-1 rounded-full border border-white/10">
                      {step.payment}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-heading text-white group-hover:text-rose-400 transition mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 text-[11px] text-slate-400 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{step.deliverable}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => onOpenConsultation(`Process Consultation for ${locationData.name}`)}
              className="px-8 py-4 bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs sm:text-sm rounded-xl transition shadow-xl"
            >
              Start Step 1: Meet Your Designer in {locationData.name}
            </button>
          </div>
        </div>
      </section>

      {/* 14. Visit Our Interior Design Experience Centre(s) (HomeLane Pattern) */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-600">
              Touch & Feel Materials
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-heading">
              Visit Our Experience Centre in South Delhi
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              Seeing and touching materials makes decisions effortless. Walk through realistic kitchen, wardrobe, and living room displays, test soft-close drawer slides, and compare acrylic and quartz finishes.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-slate-50 rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-rose-600">
                  Flagship Studio
                </span>
                <h3 className="text-2xl font-bold font-heading text-slate-900">
                  FourCube Decor South Delhi Hub
                </h3>
                
                <div className="space-y-2 text-xs text-slate-600 leading-relaxed">
                  <p>
                    <strong className="text-slate-800">Address:</strong> Level 2, FourCube Design Studio, Near Select Citywalk & Outer Ring Road, South Delhi, New Delhi, 110017
                  </p>
                  <p>
                    <strong className="text-slate-800">Timings:</strong> Monday to Sunday | 10:30 AM to 8:00 PM
                  </p>
                  <p>
                    <strong className="text-slate-800">Contact Number:</strong> {companyContact.phone}
                  </p>
                </div>

                <div className="pt-2">
                  <span className="text-xs font-bold text-slate-800 block mb-1">
                    Facilities for Your Convenience:
                  </span>
                  <div className="flex flex-wrap gap-2 text-[11px] text-slate-600">
                    <span className="bg-white px-2.5 py-1 rounded border border-slate-200">✓ Free Valet Parking</span>
                    <span className="bg-white px-2.5 py-1 rounded border border-slate-200">✓ Restrooms</span>
                    <span className="bg-white px-2.5 py-1 rounded border border-slate-200">✓ Material Swatch Bar</span>
                    <span className="bg-white px-2.5 py-1 rounded border border-slate-200">✓ 3D VR Walkthrough</span>
                  </div>
                </div>

                <div className="pt-2">
                  <span className="text-xs font-bold text-slate-800 block mb-1">
                    What to Bring for Your Consultation:
                  </span>
                  <div className="flex gap-2 text-[11px] text-slate-600">
                    <span className="bg-rose-50 text-rose-700 px-2.5 py-1 rounded font-medium border border-rose-200">Floor Plan</span>
                    <span className="bg-rose-50 text-rose-700 px-2.5 py-1 rounded font-medium border border-rose-200">Site Images / Video</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4 text-center">
                <Compass className="w-10 h-10 text-rose-600 mx-auto" />
                <h4 className="font-bold text-lg text-slate-900 font-heading">
                  Schedule Studio Experience Visit
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Book a one-on-one session with our senior interior architect in South Delhi. Free coffee and customized 3D design session included.
                </p>
                <button
                  onClick={() => onOpenConsultation(`Experience Studio Visit for ${locationData.name}`)}
                  className="w-full py-3 bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs rounded-xl transition shadow-md shadow-rose-600/30"
                >
                  Schedule Studio Visit
                </button>
                <a
                  href={`tel:${companyContact.phoneRaw}`}
                  className="inline-block text-xs font-bold text-slate-600 hover:text-slate-900"
                >
                  Or call directly: {companyContact.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 15. Real Video Showcase: On-Site Handover */}
      <section className="py-16 sm:py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-600/20 text-rose-300 text-xs font-bold">
                <Play className="w-3.5 h-3.5 fill-rose-400 text-rose-400" /> Real Project Video
              </span>
              <h2 className="text-2xl sm:text-4xl font-black font-heading leading-tight text-white">
                See Our Real On-Site Handover in South Delhi
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Watch how our automated German factory woodwork transforms residences and commercial showrooms across {locationData.name}. No fake CGI renders—this is 100% genuine FourCube Decor workmanship.
              </p>
              <div className="space-y-2.5 pt-2">
                <div className="flex items-center gap-2.5 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Automated German Edge-Banding with zero bubbling</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Dust-free modular assembly completed within 7 to 10 days on site</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>10-year official warranty certificate handed over at move-in</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-black aspect-video relative group">
                <video 
                  controls 
                  className="w-full h-full object-cover"
                  poster={locationData.heroImage}
                >
                  <source src={realDecorVideo} type="video/mp4" />
                  Your browser does not support video playback.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 16. Comparison Table: FourCube Decor vs Local Contractors */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-600">
              Honest Comparison
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-heading">
              FourCube Decor vs Local Contractors in {locationData.name}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Why 1,500+ South Delhi homeowners trust our factory-precision model over unorganized local carpenters:
            </p>
          </div>

          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full text-left border-collapse bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-200 text-xs sm:text-sm">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="p-4 sm:p-5 font-bold">Feature / Milestone</th>
                  <th className="p-4 sm:p-5 font-bold bg-rose-600 text-white">FourCube Decor</th>
                  <th className="p-4 sm:p-5 font-bold text-slate-400">Local Unorganized Carpenters</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-slate-900">Project Delivery SLA</td>
                  <td className="p-4 sm:p-5 font-bold text-rose-600 bg-rose-50/50">Guaranteed 45-Day Handover</td>
                  <td className="p-4 sm:p-5 text-slate-500">4 to 6 months delay with constant excuses</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-slate-900">Manufacturing Quality</td>
                  <td className="p-4 sm:p-5 font-bold text-rose-600 bg-rose-50/50">German CNC Automated Factory</td>
                  <td className="p-4 sm:p-5 text-slate-500">Manual hand sawing & chipping on site</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-slate-900">Warranty Protection</td>
                  <td className="p-4 sm:p-5 font-bold text-rose-600 bg-rose-50/50">10-Year Flat Replacement Warranty</td>
                  <td className="p-4 sm:p-5 text-slate-500">Zero warranty once final payment is made</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-slate-900">Price Certainty</td>
                  <td className="p-4 sm:p-5 font-bold text-rose-600 bg-rose-50/50">100% Fixed Quote (No Escalations)</td>
                  <td className="p-4 sm:p-5 text-slate-500">20% to 40% frequent mid-work price escalation</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-slate-900">3D Design Visualization</td>
                  <td className="p-4 sm:p-5 font-bold text-rose-600 bg-rose-50/50">Interactive 3D Virtual Walkthrough</td>
                  <td className="p-4 sm:p-5 text-slate-500">Hand drawings & guesswork on blank walls</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 17. Heartwarming Local Stories & Reviews from {locationData.name} */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-600">
              Heartwarming Customer Stories
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-heading">
              What Homeowners in {locationData.name} Say
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Real stories from homeowners who chose FourCube Decor for their spaces in {locationData.name}:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {locationData.reviews.map((rev, idx) => (
              <div key={idx} className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm relative space-y-4">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                  "{rev.review}"
                </p>
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-sm text-slate-900 font-heading">{rev.name}</h4>
                    <span className="text-[11px] text-slate-500">{rev.colony}</span>
                  </div>
                  <span className="text-[11px] font-bold text-rose-600 bg-rose-50 px-2.5 py-1 rounded-full">
                    {rev.service}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 18. Localized FAQs (10+ Accordions like HomeLane) */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-600">
              Questions & Answers
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-heading">
              FAQs on Home Interiors and Designers in {locationData.name}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Everything you need to know about costs, timelines, warranties, and process in {locationData.name}:
            </p>
          </div>

          <div className="space-y-3">
            {extendedFaqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div 
                  key={idx}
                  className="bg-slate-50 rounded-2xl border border-slate-200 shadow-sm overflow-hidden transition"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-slate-900 hover:text-rose-600 transition"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180 text-rose-600' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 bg-white">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 19. Bottom Consultation Banner */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-rose-900 via-rose-800 to-amber-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="inline-block px-3.5 py-1 rounded-full bg-white/20 text-amber-300 text-xs font-bold uppercase tracking-wider">
            Ready to Build Your Dream Space in {locationData.name}?
          </span>
          <h2 className="text-2xl sm:text-4xl font-black font-heading tracking-tight">
            Schedule a Free 3D Design Session in {locationData.name}
          </h2>
          <p className="text-rose-100 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Our senior interior architect will visit your site with laser meters, design your 3D plan, and give you a fixed quote with no hidden charges.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={() => onOpenConsultation(`Free 3D Consultation for ${locationData.name}`)}
              className="w-full sm:w-auto px-8 py-3.5 bg-white hover:bg-rose-50 text-rose-700 font-bold text-sm rounded-xl transition shadow-xl"
            >
              Book Free Site Visit
            </button>
            <a
              href={`tel:${companyContact.phoneRaw}`}
              className="w-full sm:w-auto px-6 py-3.5 bg-rose-700/80 hover:bg-rose-700 text-white font-bold text-sm rounded-xl transition border border-white/20 flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call: {companyContact.phone}</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
