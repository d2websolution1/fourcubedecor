// Service & Category Navigation Links for Footer (Residential & Commercial 2-Section Split)
// 12 Core Services: 8 Residential (1st Section) + 4 Commercial (2nd Section)

// 1st Section: Residential Services
export const residentialFooterLinks = [
  {
    id: 'modular-kitchen',
    title: 'Modular Kitchen',
    path: '/category/modular-kitchen',
    prefix: 'modular-kitchen',
    description: 'Acrylic, parallel, island & German-precision modular kitchens'
  },
  {
    id: 'living-room',
    title: 'Living Room & TV',
    path: '/category/living-room',
    prefix: 'living-room',
    description: 'Marble TV walls, fluted acoustic panels & console units'
  },
  {
    id: 'bedroom',
    title: 'Master Bedroom',
    path: '/category/bedroom',
    prefix: 'bedroom',
    description: 'Custom velvet headboards, hydraulic beds & nightstands'
  },
  {
    id: 'wardrobe',
    title: 'Wardrobes & Storage',
    path: '/category/wardrobe',
    prefix: 'wardrobe',
    description: 'Floor-to-ceiling, sliding & walk-in modular wardrobes'
  },
  {
    id: 'space-saving',
    title: 'Space Saving Furniture',
    path: '/category/space-saving',
    prefix: 'space-saving',
    description: 'Murphy wall beds, extendable dining tables & study desks'
  },
  {
    id: 'home-office',
    title: 'Home Office & Study',
    path: '/category/home-office',
    prefix: 'home-office',
    description: 'Acoustic Zoom call backdrops, executive study desks & bookcases'
  },
  {
    id: 'bathroom',
    title: 'Luxury Bathrooms',
    path: '/category/bathroom',
    prefix: 'bathroom',
    description: 'Floating waterproof vanities, anti-fog LED mirrors & shower niches'
  },
  {
    id: 'home-interiors',
    title: 'Full Home Interiors',
    path: '/category/home-interiors',
    prefix: 'home-interiors',
    description: 'Turnkey 2BHK, 3BHK & 4BHK luxury home interior design solutions'
  }
];

// 2nd Section: Commercial Services
export const commercialFooterLinks = [
  {
    id: 'mall-decor',
    title: 'Mall Decor',
    path: '/commercial/mall-decor',
    prefix: 'mall-decor',
    description: 'Shopping mall atriums, brand kiosks & showroom fitouts'
  },
  {
    id: 'office-decor',
    title: 'Office Decor',
    path: '/commercial/office-decor',
    prefix: 'office-decor',
    description: 'Turnkey corporate offices, MD cabins & conference rooms'
  },
  {
    id: 'jewellery-decor',
    title: 'Jewellery Shop',
    path: '/commercial/jewellery-shop-decor',
    prefix: 'jewellery-decor',
    description: 'High-security display counters & luxury retail boutiques'
  },
  {
    id: 'shop-decor',
    title: 'Shop Decor',
    path: '/commercial/shop-decor',
    prefix: 'shop-decor',
    description: 'Boutique eyewear, sanitaryware & branded retail store fitouts'
  }
];

// Combined for backwards compatibility
export const footerServiceLinks = [...residentialFooterLinks, ...commercialFooterLinks];
