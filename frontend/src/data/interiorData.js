import { 
  jewelleryDecorData, 
  mallDecorData, 
  officeDecorData, 
  shopDecorData, 
  realKitchenImages, 
  realLivingImages, 
  realBedroomImages, 
  realWardrobeImages, 
  realBathroomImages, 
  realStudyImages,
  allRealProjects,
  realDecorVideo
} from './decorMedia';

export { realDecorVideo };

// Commercial Offerings (The 4 new pages requested by the user!)
export const commercialOfferings = [
  {
    id: 'mall-decor',
    path: '/commercial/mall-decor',
    title: 'Mall Decor',
    shortTitle: 'Mall Decor',
    badge: 'Grand Spaces',
    tag: 'Commercial',
    iconName: 'Building',
    description: 'Turnkey shopping mall interiors, brand kiosks, luxury optical boutiques & retail atrium displays.',
    heroImage: mallDecorData[0].image,
    items: mallDecorData,
    subcategories: ['Mall Flagship Stores', 'Luxury Optical Showrooms', 'Atrium Kiosks & Pods', 'Multi-Floor Retail Anchor Suites', 'Commercial Lighting & Facades']
  },
  {
    id: 'office-decor',
    path: '/commercial/office-decor',
    title: 'Office Decor',
    shortTitle: 'Office Decor',
    badge: 'Executive',
    tag: 'Corporate',
    iconName: 'Briefcase',
    description: 'Modern executive director lounges, acoustic fluted conference rooms, reception desks & ergonomic workstations.',
    heroImage: officeDecorData[0].image,
    items: officeDecorData,
    subcategories: ['MD & Director Cabins', 'Boardroom Video Conference Walls', 'VIP Reception & Waiting Lounges', 'Ergonomic Workstations', 'Acoustic Wood Paneling']
  },
  {
    id: 'jewellery-shop-decor',
    path: '/commercial/jewellery-shop-decor',
    title: 'Jewellery Shop Decor',
    shortTitle: 'Jewellery Shop',
    badge: 'High Security',
    tag: 'Luxury',
    iconName: 'Gem',
    description: 'High-security tempered glass counters, 4000K daylight gemstone lighting, necklace wall niches & Candere boutique suites.',
    heroImage: jewelleryDecorData[0].image,
    items: jewelleryDecorData,
    subcategories: ['Anti-Theft Tempered Glass Counters', 'Gemstone-True 4000K Lighting', 'Floating Necklace Niche Boxes', 'Bridal Trial Dressing Suites', 'Victorian Wall Mouldings']
  },
  {
    id: 'shop-decor',
    path: '/commercial/shop-decor',
    title: 'Shop Decor',
    shortTitle: 'Shop Decor',
    badge: 'Retail',
    tag: 'Boutique',
    iconName: 'ShoppingBag',
    description: 'Custom retail display racks, sanitaryware & bath fixture experience centers, eyewear shops & cash wrap counters.',
    heroImage: shopDecorData[0].image,
    items: shopDecorData,
    subcategories: ['Eyewear & Optical Boutiques', 'Sanitary & Bath Experience Centers', 'Branded Wall Gondola Racks', 'Cash Wrap Counters', 'Storefront Display Windows']
  }
];

// Residential Offerings (100% Real photos from user's decor folder!)
export const navigationOfferings = [
  {
    id: 'modular-kitchen',
    title: 'Modular Kitchen',
    description: 'High-gloss acrylic, L-shape, U-shape & parallel kitchen solutions',
    iconName: 'ChefHat',
    image: realKitchenImages[0].image,
    tag: 'Trending',
    subcategories: ['High-Gloss Mauve & White Kitchen', 'Minimalist Sky Blue Parallel Kitchen', 'Tinted Glass U-Shaped Kitchen', 'Island Breakfast Counters']
  },
  {
    id: 'living-room',
    title: 'Living Room',
    description: 'Marble TV consoles, fluted acoustic panels, mandir units & partitions',
    iconName: 'Sofa',
    image: realLivingImages[0].image,
    tag: 'Popular',
    subcategories: ['Fluted Oak TV Units', 'Marble TV Walls with Brass Inlay', 'Integrated CNC Mandir TV Units', 'Fireplace Executive TV Walls', 'Lattice Partition Screens']
  },
  {
    id: 'bedroom',
    title: 'Bedroom',
    description: 'Upholstered beds, custom tufted headboards, bedside nightstands',
    iconName: 'BedDouble',
    image: realBedroomImages[0].image,
    tag: 'Cozy',
    subcategories: ['Marble & Wood Master Suites', 'Beige Fluted Upholstered Beds', 'Contemporary Wardrobe & TV Combos', 'Custom On-Site Arch Headboards']
  },
  {
    id: 'wardrobe',
    title: 'Wardrobe',
    description: 'Sliding, hinged, 6-door floor-to-ceiling wardrobes with mirrors',
    iconName: 'DoorClosed',
    image: realWardrobeImages[0].image,
    tag: 'Custom Fit',
    subcategories: ['Teal & Wood Geometric Wardrobes', 'White High-Gloss Sliding Wardrobes', 'Charcoal 6-Door Floor-to-Ceiling', 'Center Vanity Dressing Suites']
  },
  {
    id: 'space-saving',
    title: 'Space Saving Furniture',
    description: 'Capsule dual study units, room dividers & smart convertible setups',
    iconName: 'Maximize2',
    image: realStudyImages[0].image,
    tag: 'Smart',
    subcategories: ['Dual Capsule Study Desks', 'CNC Partition Dividers', 'Floating Storage Units', 'Multi-Use Workstations']
  },
  {
    id: 'home-office',
    title: 'Home Office',
    description: 'Ergonomic workstations, capsule wall organizers & executive desks',
    iconName: 'Briefcase',
    image: officeDecorData[0].image,
    tag: 'Productive',
    subcategories: ['Executive Director Desks', 'Dual Study Stations', 'Acoustic Louver Walls', 'Bookshelves & Display Niches']
  },
  {
    id: 'bathroom',
    title: 'Bathroom',
    description: 'Oval backlit LED touch mirrors, fluted wood corner vanities',
    iconName: 'Bath',
    image: realBathroomImages[0].image,
    tag: 'Modern',
    subcategories: ['Oval Backlit Touch Mirrors', 'Fluted Waterproof Corner Vanities', 'Sanitaryware Exhibit Walls', 'Under-Sink Storage Cabinets']
  },
  {
    id: 'home-interiors',
    title: 'Home Interiors (2BHK / 3BHK)',
    description: 'End-to-end full turnkey interior transformations from our factories',
    iconName: 'Home',
    image: realLivingImages[1].image,
    tag: 'Turnkey',
    subcategories: ['1 BHK Complete Package', '2 BHK Premium Turnkey', '3 BHK Luxury Interiors', 'Duplex & Penthouse Woodwork']
  }
];

// All Gallery items mapped directly to REAL projects from the decor folder!
export const galleryItems = allRealProjects.map((item, index) => ({
  id: index + 1,
  title: item.title,
  category: item.category.toLowerCase().replace(/\s+/g, '-'),
  categoryName: item.category,
  image: item.image,
  size: item.size || 'Commercial Fitout',
  finish: item.finish || 'German CNC Precision Woodwork',
  priceEstimate: item.priceEstimate || 'Custom Quotation',
  features: item.features || item.highlights || ['German Machine Finish', '10-Year Warranty', '45-Day Handover', 'Fixed Price Quote']
}));

export const statistics = [
  { value: '1,500+', label: 'Homes & Retail Projects', suffix: 'Completed on-time' },
  { value: '45 Days', label: 'Guaranteed Handover', suffix: 'Strict milestone SLA' },
  { value: '10 Years', label: 'Flat Warranty', suffix: 'Assured structural durability' },
  { value: '100%', label: 'Real Workmanship', suffix: 'German factory fabrication' }
];

export const processSteps = [
  {
    step: '01',
    title: 'Site Visit & 3D Visualization',
    description: 'We measure your residential flat, retail shop, or commercial mall space with laser meters and design interactive 3D layout renders.'
  },
  {
    step: '02',
    title: 'Material Selection & Transparent Quote',
    description: 'Touch genuine samples of HDHMR, acrylics, fluted louvers, and German hardware (Blum, Hettich) with 100% fixed pricing.'
  },
  {
    step: '03',
    title: 'German Factory Manufacturing',
    description: 'All panels, display counters, and wardrobes are machined with computer-controlled automated edge-banding and pre-drilled precision.'
  },
  {
    step: '04',
    title: '45-Day Dust-Free Installation',
    description: 'Trained technical crews perform on-site modular assembly within days, followed by clean handover and warranty certificate.'
  }
];

export const testimonials = [
  {
    name: 'Vikram & Radhika Singhal',
    location: 'DLF Phase 5, Gurugram',
    bhk: '3 BHK Turnkey Interior',
    rating: 5,
    quote: 'The high-gloss modular kitchen and marble TV unit with fluted wooden louvers are beyond expectation. Finished strictly within 43 days with zero price escalation!',
    image: realBedroomImages[0].image
  },
  {
    name: 'Karan Mehra (Store Owner)',
    location: 'South Extension, Delhi',
    bhk: 'Jewellery Showroom Fitout',
    rating: 5,
    quote: 'FourCube Decor designed our diamond jewellery showroom with 4000K lighting and anti-theft tempered counters. The Candere-style wall mouldings make our store look ultra-luxurious.',
    image: jewelleryDecorData[0].image
  },
  {
    name: 'Ananya & Sahil Roy',
    location: 'Whitefield, Bengaluru',
    bhk: 'Full Wardrobe & Bedroom Suite',
    rating: 5,
    quote: 'The 6-door floor-to-ceiling charcoal wardrobe and the vanity mirror setup solved all our storage worries. The real factory edge-banding is seamless.',
    image: realWardrobeImages[0].image
  }
];

export const faqs = [
  {
    q: 'Do you design both residential and commercial spaces?',
    a: 'Yes! FourCube Decor provides turnkey interior execution for residential flats (1BHK, 2BHK, 3BHK, Villas) as well as commercial projects including Mall Decor, Office Decor, Jewellery Shops, and Retail Stores.'
  },
  {
    q: 'Are all photos shown on this website real work of FourCube Decor?',
    a: 'Yes, 100%! Every photo and video displayed in our gallery and portfolios is from our real on-site projects and factory installations.'
  },
  {
    q: 'How does the 45-day handover guarantee work for retail & shops?',
    a: 'Because 85% of cabinetry, wall mouldings, and counters are prefabricated in our automated German machinery factory, on-site assembly takes only 7-10 days. We guarantee 45-day move-in.'
  },
  {
    q: 'What warranty is offered on commercial and residential fittings?',
    a: 'We offer our signature 10-year flat replacement warranty on structural woodwork against borer, termite, or delamination, and lifetime warranties on certified Blum / Hettich soft-close hardware.'
  },
  {
    q: 'How do I get a quotation for Mall or Jewellery Shop Decor?',
    a: 'Simply click "Book Free Consultation" or WhatsApp us your floor layout and carpet area. Our senior commercial architect will provide a 3D plan and transparent bill of quantities within 24 hours.'
  }
];

export const companyContact = {
  phone: '+91 98765 43210',
  phoneRaw: '+919876543210',
  whatsappRaw: '919876543210',
  email: 'contact@fourcubedecor.com',
  address: 'FourCube Decor Flagship Studio, Level 4, DLF Cyber City, Phase 2, Gurugram, Haryana 122002',
  secondaryAddress: 'Bengaluru Studio: 100 Feet Road, Indiranagar, Bengaluru, Karnataka 560038',
  hours: 'Mon - Sun: 10:00 AM - 8:30 PM (Open all 7 days)',
  socialLinks: {
    instagram: 'https://instagram.com/fourcubedecor',
    facebook: 'https://facebook.com/fourcubedecor',
    pinterest: 'https://pinterest.com/fourcubedecor',
    youtube: 'https://youtube.com/@fourcubedecor',
    linkedin: 'https://linkedin.com/company/fourcubedecor'
  }
};

export const styleGuides = [
  {
    id: 'modern-minimalist',
    title: 'Modern Minimalist Modular Kitchens',
    desc: 'Clean lines, hidden profile LED channels, high-gloss acrylic cabinets with integrated built-in appliances.',
    image: realKitchenImages[0].image,
    tips: ['Keep countertops uncluttered', 'Use handleless push-to-open cabinets', 'Focus on diffused warm LED strips']
  },
  {
    id: 'contemporary-luxury',
    title: 'Contemporary Luxury Living & Media Walls',
    desc: 'Statuario marble feature walls with fluted oak acoustic louvers and floating console credenzas.',
    image: realLivingImages[0].image,
    tips: ['Add fluted wall panels behind TV', 'Choose statement pendant lighting', 'Mix matte dark shades with brushed brass']
  },
  {
    id: 'commercial-retail',
    title: 'Commercial Boutique & Jewellery Architecture',
    desc: 'High-security display counters, 4000K daylight gemstone illumination, and classic Victorian wall mouldings.',
    image: jewelleryDecorData[0].image,
    tips: ['Incorporate anti-theft tempered glass', 'Opt for 4000K CRI 95+ gemstone lighting', 'Include private consultation bridal suites']
  },
  {
    id: 'smart-compact',
    title: 'Smart Floor-to-Ceiling Wardrobes & Workstations',
    desc: '6-door high-gloss reflective wardrobes with center vanity mirrors and loft suitcase storage.',
    image: realWardrobeImages[2].image,
    tips: ['Utilize vertical wall height with lofts', 'Choose 2-in-1 convertible furniture', 'Use mirrors to amplify spatial depth']
  }
];

