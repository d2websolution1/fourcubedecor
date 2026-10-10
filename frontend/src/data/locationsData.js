import {
  realKitchenImages,
  realLivingImages,
  realBedroomImages,
  realWardrobeImages,
  realBathroomImages,
  realStudyImages,
  jewelleryDecorData,
  mallDecorData,
  officeDecorData,
  shopDecorData,
  realDecorVideo
} from './decorMedia';

export { realDecorVideo };

export const southDelhiLocations = [
  {
    slug: 'saket',
    path: '/interior-designers-saket',
    name: 'Saket',
    district: 'South Delhi',
    pincode: '110017',
    tagline: 'Luxury Apartments, Builder Floors & High-End Interiors near Select Citywalk',
    heroImage: realLivingImages[0].image,
    stats: {
      projectsDone: '180+',
      designers: '14+',
      turnaroundDays: '45 Days',
      warrantyYears: '10 Years Flat',
      rating: '4.9/5'
    },
    popularSocieties: [
      'Select Citywalk Vicinity',
      'Saket J, K, M Blocks',
      'Paryavaran Complex & Anupam Garden',
      'DDA SFS Flats Saket',
      'Saidulajab & Western Heights'
    ],
    overview: 'Saket is one of South Delhi’s most vibrant residential and commercial hubs. Known for its upscale builder floors, DDA SFS duplexes, and luxury residential enclaves, homes in Saket demand contemporary aesthetics with smart storage. FourCube Decor brings German-precision modular kitchens, statuario marble TV louvers, and bespoke floor-to-ceiling wardrobes backed by a guaranteed 45-day move-in SLA.',
    avgCostSummary: {
      bhk1: '₹2.8L - ₹4.5L',
      bhk2: '₹4.5L - ₹7.8L',
      bhk3: '₹7.5L - ₹13.5L',
      bhk4: '₹12.5L - ₹22L',
      commercial: '₹850 - ₹1,800 / sq.ft'
    },
    featuredRooms: [
      {
        title: 'Modular Kitchens in Saket',
        desc: 'High-gloss acrylic finishes, seamless quartz counters, and German Blum tandem drawers designed for Delhi cooking habits.',
        image: realKitchenImages[0].image,
        category: 'Modular Kitchen',
        specs: ['Acrylic High Gloss', 'German Blum Soft-Close', 'Quartz Surface', '10-Yr Warranty']
      },
      {
        title: 'Modern Fluted Living & TV Walls',
        desc: 'Statuario marble backing with natural oak fluted louvers and floating media credenzas with wire concealment.',
        image: realLivingImages[1].image,
        category: 'Living Room',
        specs: ['Statuario Marble Vein', 'Oak Fluted Louvers', 'Concealed LED Strip', 'Heavy-Load Brackets']
      },
      {
        title: 'Master Bedroom & Bespoke Beds',
        desc: 'Custom-upholstered tufted headboards, floating beds with warm perimeter halo lights, and matching side tables.',
        image: realBedroomImages[0].image,
        category: 'Bedroom',
        specs: ['Acoustic Velvet Headboard', 'Floating Bed Base', 'Integrated Backlit Arch', 'German Hardware']
      },
      {
        title: 'Floor-to-Ceiling Wardrobes',
        desc: 'Charcoal high-gloss and geometric sliding wardrobes with center vanity mirrors and full-height suitcase lofts.',
        image: realWardrobeImages[2].image,
        category: 'Wardrobe',
        specs: ['Anti-Bending Aluminum Stiffeners', 'Loft Suitcase Storage', 'Vanity Mirror Suite', 'HDHMR Core']
      }
    ],
    commercialHighlights: [
      {
        title: 'Saket District Centre & Retail Showrooms',
        desc: 'Turnkey retail showroom fitouts, optical boutiques, and corporate offices with 4000K lighting and tempered glass counters.',
        image: shopDecorData[0].image
      },
      {
        title: 'Executive Corporate Cabins & Director Lounges',
        desc: 'Acoustic fluted wooden walls, director conference tables, and reception lobbies.',
        image: officeDecorData[0].image
      }
    ],
    reviews: [
      {
        name: 'Arjun Singhania',
        colony: 'Block J, Saket',
        rating: 5,
        review: 'We renovated our 3 BHK builder floor in Saket with FourCube Decor. The high-gloss modular kitchen and fluted TV wall look incredible. Delivered in 42 days flat without single cost variation!',
        service: '3 BHK Full Home Interior'
      },
      {
        name: 'Simran & Kabir Malhotra',
        colony: 'DDA SFS Flats, Saket',
        rating: 5,
        review: 'Their German factory finish is light years ahead of local carpenters. The sliding wardrobes and living room partition look ultra premium.',
        service: 'Full Modular Woodwork'
      }
    ],
    faqs: [
      {
        q: 'Why choose FourCube Decor over local contractors in Saket?',
        a: 'Local carpenters in Saket take 4-6 months with dust, noise, and hidden costs. FourCube Decor manufactures 85% of modular furniture in our German-automated factory. On-site assembly takes only 7-10 days, backed by a strict 45-day move-in guarantee and a 10-year flat warranty.'
      },
      {
        q: 'What is the average cost of interior designing a 3 BHK in Saket?',
        a: 'A premium 3 BHK interior in Saket ranges from ₹7.5 Lakhs to ₹13.5 Lakhs depending on materials (high-gloss acrylic, PU, veneer) and scope (modular kitchen, wardrobes, TV consoles, false ceiling, and lighting).'
      },
      {
        q: 'Do you handle DDA flats and builder floors in Saket?',
        a: 'Yes! We have designed over 180 homes across Saket including DDA SFS flats, private builder floors, and luxury apartments around Select Citywalk.'
      }
    ]
  },
  {
    slug: 'hauz-khas',
    path: '/interior-designers-hauz-khas',
    name: 'Hauz Khas',
    district: 'South Delhi',
    pincode: '110016',
    tagline: 'Artistic Modern Interiors, Heritage Residences & Designer Builder Floors',
    heroImage: realLivingImages[3].image,
    stats: {
      projectsDone: '140+',
      designers: '12+',
      turnaroundDays: '45 Days',
      warrantyYears: '10 Years Flat',
      rating: '4.9/5'
    },
    popularSocieties: [
      'Hauz Khas Enclave',
      'Hauz Khas Village Vicinity',
      'Aurobindo Marg Residences',
      'Kaushalya Park & Padmini Enclave',
      'Khel Gaon Marg Adjacent'
    ],
    overview: 'Hauz Khas is renowned for its cultural heritage and artistic flair. Residential spaces here range from vintage villas in Hauz Khas Enclave to modern penthouses overlooking Deer Park. FourCube Decor designs bespoke living spaces that blend contemporary minimalism with warm wooden textures, fluted wall acoustics, and European modular kitchen ergonomics.',
    avgCostSummary: {
      bhk1: '₹3.2L - ₹5L',
      bhk2: '₹5.2L - ₹8.5L',
      bhk3: '₹8.5L - ₹15L',
      bhk4: '₹14L - ₹25L',
      commercial: '₹950 - ₹2,000 / sq.ft'
    },
    featuredRooms: [
      {
        title: 'Minimalist Sky Blue Parallel Kitchen',
        desc: 'Sleek profile LED strips, deep tandem drawers, and teak spice niches crafted for modern Hauz Khas apartments.',
        image: realKitchenImages[1].image,
        category: 'Modular Kitchen',
        specs: ['Matte PU Shutter Finish', 'Continuous Profile LED', 'Black Granite Counter', 'Anti-Fingerprint']
      },
      {
        title: 'Executive Black Marble Fireplace TV Wall',
        desc: 'Bookmatched black marble veined cladding paired with warm vapor fireplace and vertical display alcoves.',
        image: realLivingImages[3].image,
        category: 'Living Room',
        specs: ['Black Marble Cladding', 'Vapor Fireplace Unit', 'Warm Display Niches', 'Concealed Wiring']
      },
      {
        title: 'Beige & Gold Upholstered Master Suite',
        desc: 'Floor-to-ceiling fluted panelling with champagne brass accents and hanging twisted glass pendants.',
        image: realBedroomImages[1].image,
        category: 'Bedroom',
        specs: ['Textured Luxury Fabric', 'Champagne Brass Trims', 'Floor-to-Ceiling Fluting', 'Pendant Bedside Lights']
      },
      {
        title: 'Teal Blue & Wood Geometric Wardrobe',
        desc: 'Diagonal geometric finish with integrated full-height dressing mirror and perimeter halo backlighting.',
        image: realWardrobeImages[0].image,
        category: 'Wardrobe',
        specs: ['Diagonal Two-Tone Styling', 'Full-Length LED Mirror', 'Suitcase Loft Cabinets', 'Soft-Close Hinges']
      }
    ],
    commercialHighlights: [
      {
        title: 'Boutique Designer Studios & Showrooms',
        desc: 'High-fashion boutiques and lifestyle retail spaces with curved arches, gold metal fixtures, and track lights.',
        image: jewelleryDecorData[1].image
      },
      {
        title: 'Corporate Office Cabins & Reception Lounges',
        desc: 'Emerald green classical wall wainscoting with bookmatched marble features.',
        image: officeDecorData[2].image
      }
    ],
    reviews: [
      {
        name: 'Dr. Radhika Sen',
        colony: 'Hauz Khas Enclave',
        rating: 5,
        review: 'FourCube Decor transformed our classic Hauz Khas home into an airy, contemporary masterpiece. The craftsmanship of the modular kitchen and custom headboard is exemplary.',
        service: '3 BHK Villa Renovation'
      },
      {
        name: 'Pranav & Ishita Varma',
        colony: 'Kaushalya Park, Hauz Khas',
        rating: 5,
        review: 'Their 3D visualization matched the finished home 100%. Dust-free installation and very courteous installation crew. Highly recommended!',
        service: 'Full Home Turnkey Interior'
      }
    ],
    faqs: [
      {
        q: 'Can you customize interiors to match Hauz Khas heritage charm?',
        a: 'Absolutely. We blend classical elements like Victorian mouldings, fluted natural wood, and brass trims with ultra-modern German modular cabinetry and Blum hardware.'
      },
      {
        q: 'Do you offer commercial showroom and studio interior services in Hauz Khas?',
        a: 'Yes, we provide end-to-end commercial fitouts for boutique showrooms, art studios, and corporate offices with 45-day guaranteed completion.'
      },
      {
        q: 'How does the 10-year warranty work?',
        a: 'Our 10-year flat warranty covers structural HDHMR woodwork, edge banding, and carcass durability against termite, borer, or delamination, plus lifetime hardware warranty.'
      }
    ]
  },
  {
    slug: 'greater-kailash',
    path: '/interior-designers-greater-kailash',
    name: 'Greater Kailash',
    district: 'South Delhi',
    pincode: '110048',
    tagline: 'Ultra-Luxury Penthouses, GK-1 & GK-2 M-Block Builder Floors & Bespoke Villas',
    heroImage: realLivingImages[1].image,
    stats: {
      projectsDone: '210+',
      designers: '16+',
      turnaroundDays: '45 Days',
      warrantyYears: '10 Years Flat',
      rating: '5.0/5'
    },
    popularSocieties: [
      'Greater Kailash 1 (GK-1) N, M, R Blocks',
      'Greater Kailash 2 (GK-2) M-Block & E-Block',
      'Pamposh Enclave',
      'Masjid Moth GK-2 Penthouses',
      'Chittaranjan Park (CR Park) Vicinity'
    ],
    overview: 'Greater Kailash (GK-1 and GK-2) represents the epitome of South Delhi luxury living. Featuring sprawling 4 BHK builder floors, duplex penthouses, and private villas, homeowners in GK demand nothing short of perfection. FourCube Decor delivers Italian marble TV features with brass inlays, tinted glass modular kitchens, and walk-in dressing suites crafted with automated German precision.',
    avgCostSummary: {
      bhk1: '₹3.5L - ₹5.5L',
      bhk2: '₹6.0L - ₹9.5L',
      bhk3: '₹9.5L - ₹18L',
      bhk4: '₹16L - ₹32L',
      commercial: '₹1,100 - ₹2,400 / sq.ft'
    },
    featuredRooms: [
      {
        title: 'Sky Blue & Black Tinted Glass U-Kitchen',
        desc: 'Full U-shaped working triangle with terrazzo quartz splash and black smoke glass lift-up wall cabinets.',
        image: realKitchenImages[2].image,
        category: 'Modular Kitchen',
        specs: ['Smoke Glass Shutters', 'Terrazzo Quartz Counter', 'Magic Corner Pullouts', 'LED Profile Grooves']
      },
      {
        title: 'Statuario Marble TV Wall with Brass Trim',
        desc: 'Geometric brass metal inlays, fluted acoustic side louvers, and dual-drawer floating console.',
        image: realLivingImages[1].image,
        category: 'Living Room',
        specs: ['Statuario Marble Veins', 'Brass Inlay Geometric', 'Natural Oak Slat', 'Cove Lighting Halo']
      },
      {
        title: 'Marble & Fluted Wood Master Bedroom Suite',
        desc: 'Integrated tufted headboard, floating bed with under-bed LED glow, and full-height side wardrobe.',
        image: realBedroomImages[0].image,
        category: 'Bedroom',
        specs: ['Integrated Tufted Backboard', 'Floating Bed LED Strip', 'Geometric Wall Chandelier', 'German Drawer Tracks']
      },
      {
        title: 'Charcoal Gloss 6-Door Floor-to-Ceiling Wardrobe',
        desc: 'Six full-height doors with external quick-access vanity drawers and brushed steel long bar handles.',
        image: realWardrobeImages[2].image,
        category: 'Wardrobe',
        specs: ['Reflective Charcoal Gloss', 'Six Full Doors with Lofts', 'External Vanity Drawers', 'Brushed Steel Hardware']
      }
    ],
    commercialHighlights: [
      {
        title: 'GK M-Block Jewellery & Luxury Retail Boutiques',
        desc: 'High-security display counters, 4000K daylight gemstone lighting, and classic Candere wall wainscoting.',
        image: jewelleryDecorData[0].image
      },
      {
        title: 'Luxury Flagship Optical & Lifestyle Stores',
        desc: 'Commercial mall-grade fire rated panels, backlit acrylic display shelves, and island counters.',
        image: mallDecorData[0].image
      }
    ],
    reviews: [
      {
        name: 'Sunil & Meena Chawla',
        colony: 'M-Block, Greater Kailash 2',
        rating: 5,
        review: 'We hired FourCube Decor for our 4 BHK floor in GK-2. From the brass-inlaid marble TV wall to the charcoal gloss wardrobes, everything looks like an international architectural magazine spread.',
        service: '4 BHK Luxury Interior'
      },
      {
        name: 'Devansh Anand',
        colony: 'GK-1 R-Block',
        rating: 5,
        review: 'Their factory fabrication ensures zero dust or hammering inside the building. Handed over key on the 43rd day. True professionals.',
        service: 'Turnkey Floor Interior'
      }
    ],
    faqs: [
      {
        q: 'Do you design luxury builder floors in GK-1 and GK-2?',
        a: 'Yes, builder floors in Greater Kailash are our core specialty. We have executed more than 210 projects across GK-1 and GK-2 including full turnkey carpentry, electrical, false ceilings, and finishes.'
      },
      {
        q: 'Can we inspect material samples before signing?',
        a: 'Yes! We bring physical swatches of HDHMR, acrylics, quartz, fluted panels, and German Blum / Hettich hardware directly to your site or you can visit our experience studio.'
      },
      {
        q: 'What is the payment structure for GK projects?',
        a: 'Our payments are strictly milestone-based linked to 3D approval, factory production, delivery, and installation handover. Zero advance risk.'
      }
    ]
  },
  {
    slug: 'vasant-kunj',
    path: '/interior-designers-vasant-kunj',
    name: 'Vasant Kunj',
    district: 'South Delhi',
    pincode: '110070',
    tagline: 'Expansive Pockets, DDA SFS Duplexes & Green Ridge Farmhouse Interiors',
    heroImage: realBedroomImages[1].image,
    stats: {
      projectsDone: '165+',
      designers: '13+',
      turnaroundDays: '45 Days',
      warrantyYears: '10 Years Flat',
      rating: '4.9/5'
    },
    popularSocieties: [
      'Vasant Kunj Sector A, B, C & D',
      'Pocket B & C SFS Duplexes',
      'Vasant Kunj Enclave',
      'Nelson Mandela Marg Vicinity',
      'Grand Farmhouse Belt & Shanti Kunj'
    ],
    overview: 'Vasant Kunj offers some of the greenest and most spacious residential layouts in South Delhi. Known for multi-level DDA duplexes, Sector C luxury apartments, and private farmhouses, interiors here require smart vertical space planning and nature-inspired organic materials. FourCube Decor delivers custom partition screens, capsule dual study stations, and modular walk-in wardrobes tailored for Vasant Kunj homes.',
    avgCostSummary: {
      bhk1: '₹3.0L - ₹4.8L',
      bhk2: '₹5.0L - ₹8.0L',
      bhk3: '₹8.0L - ₹14.5L',
      bhk4: '₹13.5L - ₹24L',
      commercial: '₹900 - ₹1,900 / sq.ft'
    },
    featuredRooms: [
      {
        title: 'High-Gloss Mauve & White Luxury Kitchen',
        desc: 'Built-in microwave and oven tall units, double door refrigerator cavities, and quartz working counters.',
        image: realKitchenImages[0].image,
        category: 'Modular Kitchen',
        specs: ['Tall Pantry Unit', 'Oven & Microwave Cavity', 'Mauve High Gloss', 'Soft-Close Hinges']
      },
      {
        title: 'Warm Oak Fluted Wall TV Unit & Curio Display',
        desc: 'Concealed ambient backlights with tall curio shelves, spot illumination, and wire-free floating consoles.',
        image: realLivingImages[0].image,
        category: 'Living Room',
        specs: ['Natural Oak Louvers', 'Glass Curio Showcase', 'Floating Base Unit', 'Warm Profile LED']
      },
      {
        title: 'Deep Rose Diagonal Tufted Bed Suite',
        desc: 'Diagonal padded designer headboard with fluted dark walnut backing and hanging twisted pendants.',
        image: realBedroomImages[3].image,
        category: 'Bedroom',
        specs: ['Diagonal Tufted Velvet', 'Dark Walnut Fluting', 'Double-Tier Nightstands', 'Twisted Pendants']
      },
      {
        title: 'White High Gloss 3-Door Sliding Wardrobe',
        desc: 'Smooth anti-jump sliding rollers with tinted bronze glass strips and top suitcase lofts.',
        image: realWardrobeImages[1].image,
        category: 'Wardrobe',
        specs: ['Anti-Jump Rollers', 'Tinted Bronze Glass Strip', 'High Gloss Acrylic', 'Top Suitcase Lofts']
      }
    ],
    commercialHighlights: [
      {
        title: 'Corporate Director Cabins & Conference Rooms',
        desc: 'Acoustic fluted wooden wall panelling and media presentation walls in Vasant Kunj corporate centers.',
        image: officeDecorData[0].image
      },
      {
        title: 'Boutique Eyewear & Experience Centers',
        desc: 'Curved illuminated eyewear display pods and clean white high-gloss finishes.',
        image: mallDecorData[3].image
      }
    ],
    reviews: [
      {
        name: 'Sanjeev & Vandana Kaul',
        colony: 'Pocket B, Sector A, Vasant Kunj',
        rating: 5,
        review: 'Our Vasant Kunj duplex had tricky staircase voids and awkward corners. FourCube Decor customized space-saving study units and a stunning kitchen. Finished within 44 days with exceptional finish.',
        service: 'Duplex Interior Fitout'
      },
      {
        name: 'Gaurav Taneja',
        colony: 'Sector C, Pocket 7, Vasant Kunj',
        rating: 5,
        review: 'Transparent pricing from day one with zero surprises. The 10-year warranty certificate gave us complete peace of mind.',
        service: '3 BHK Full Renovation'
      }
    ],
    faqs: [
      {
        q: 'Do you renovate older DDA SFS flats in Vasant Kunj?',
        a: 'Yes! We specialize in revamping DDA flats in Vasant Kunj, replacing old masonry with sleek German modular woodwork, modern false ceilings, and concealed electrical layouts.'
      },
      {
        q: 'Are your materials moisture and termite resistant?',
        a: 'Yes, we use 100% moisture-resistant BWP (Boiling Water Proof) plywood and high-density HDHMR boards that are completely termite and borer proof.'
      },
      {
        q: 'How do you guarantee 45-day delivery?',
        a: 'Because our components are pre-cut and pre-drilled on computerized German CNC machines in our factory, on-site work is limited to clean modular assembly.'
      }
    ]
  },
  {
    slug: 'south-extension',
    path: '/interior-designers-south-extension',
    name: 'South Extension',
    district: 'South Delhi',
    pincode: '110049',
    tagline: 'High-End Retail Boutiques, Jewellery Showrooms & South Ext I & II Residences',
    heroImage: jewelleryDecorData[0].image,
    stats: {
      projectsDone: '155+',
      designers: '15+',
      turnaroundDays: '45 Days',
      warrantyYears: '10 Years Flat',
      rating: '4.9/5'
    },
    popularSocieties: [
      'South Extension Part 1 (South Ex-1)',
      'South Extension Part 2 (South Ex-2)',
      'Ring Road Luxury Retail Corridors',
      'Leela Ram Market Vicinity',
      'NDSE Residential Enclaves'
    ],
    overview: 'South Extension (Part 1 and 2) is synonymous with elite commercial fashion, diamond jewellery boutiques, and premium South Delhi residential quarters. Whether you need a turnkey commercial showroom fitout with anti-theft display counters and 4000K daylight lighting, or a high-end builder floor residence with classic wall mouldings, FourCube Decor is your premier South Ex interior partner.',
    avgCostSummary: {
      bhk1: '₹3.2L - ₹5.2L',
      bhk2: '₹5.5L - ₹8.8L',
      bhk3: '₹8.8L - ₹16L',
      bhk4: '₹15L - ₹28L',
      commercial: '₹1,000 - ₹2,200 / sq.ft'
    },
    featuredRooms: [
      {
        title: 'Turnkey Multi-Counter Jewellery Showroom',
        desc: 'Turnkey retail showroom execution with customer consultation suites, cashier desks, and central chandeliers.',
        image: jewelleryDecorData[5].image,
        category: 'Commercial / Retail',
        specs: ['Tempered Safety Glass', 'Daylight 4000K LED', 'High-Security Locks', 'Victorian Mouldings']
      },
      {
        title: 'Grand Retail Hallway & Diamond Counters',
        desc: 'Anti-glare diamond presentation desks with architectural column cladding and acoustic ceiling grids.',
        image: jewelleryDecorData[7].image,
        category: 'Commercial / Retail',
        specs: ['Column Cladding & Mirrors', 'Diamond Viewing Desks', 'High Footfall Durability', 'Anti-Glare Glass']
      },
      {
        title: 'Luxury Gold & Diamond Showroom Counters',
        desc: 'Tempered glass counters with daylight LED profile strips and executive velvet consultation seating.',
        image: jewelleryDecorData[0].image,
        category: 'Commercial / Retail',
        specs: ['4000K Daylight LED', 'Tempered Toughened Glass', 'Velvet Presentation Trays', 'Executive Seating']
      },
      {
        title: 'Executive Living Room TV Wall & Partitions',
        desc: 'Dual-sided wooden CNC room dividers and floating marble TV credenzas for South Ex builder floors.',
        image: realLivingImages[5].image,
        category: 'Living Room',
        specs: ['CNC Decorative Screen', 'Walnut Wood Slatting', 'Display Niches', 'Zero Floor Damage']
      }
    ],
    commercialHighlights: [
      {
        title: 'Candere Boutique Bridal Consultation Suite',
        desc: 'Bespoke classic wall wainscoting with backlit signature brand lightbox and plush velvet seating.',
        image: jewelleryDecorData[1].image
      },
      {
        title: 'High-Fashion Retail Display Gondolas & Racks',
        desc: 'Custom retail display racks, eyewear boutique counters, and cash wrap stations.',
        image: shopDecorData[2].image
      }
    ],
    reviews: [
      {
        name: 'Karan Mehra (Showroom Owner)',
        colony: 'South Extension Part 1',
        rating: 5,
        review: 'FourCube Decor designed our diamond jewellery showroom with 4000K lighting and anti-theft counters. The Candere-style wall mouldings make our store look ultra-luxurious. Ready within 38 days!',
        service: 'Jewellery Showroom Fitout'
      },
      {
        name: 'Deepak & Sangeeta Batra',
        colony: 'South Extension Part 2',
        rating: 5,
        review: 'They handled our residential 3 BHK floor woodwork and commercial ground floor boutique simultaneously. Flawless German machinery finish.',
        service: 'Residential & Commercial Turnkey'
      }
    ],
    faqs: [
      {
        q: 'Do you design both commercial showrooms and residences in South Extension?',
        a: 'Yes! South Extension is our primary hub for commercial jewellery showrooms, optical boutiques, and premium residential builder floors.'
      },
      {
        q: 'How fast can you complete a retail showroom handover?',
        a: 'Because 85% of display counters, wall units, and mouldings are manufactured in our automated factory, on-site assembly takes only 7-12 days, guaranteeing a 30 to 45-day commercial store launch.'
      },
      {
        q: 'Can you match custom brand color palettes and architectural guidelines?',
        a: 'Yes, we work with precise corporate architectural drawings, Pantone/RAL shades, and custom metal/acrylic fabrication.'
      }
    ]
  },
  {
    slug: 'mehrauli',
    path: '/interior-designers-mehrauli',
    name: 'Mehrauli',
    district: 'South Delhi',
    pincode: '110030',
    tagline: 'Boutique Heritage Residences, Qutub Colonnade Vicinity & Farmhouse Suites',
    heroImage: realBedroomImages[4].image,
    stats: {
      projectsDone: '110+',
      designers: '11+',
      turnaroundDays: '45 Days',
      warrantyYears: '10 Years Flat',
      rating: '4.8/5'
    },
    popularSocieties: [
      'Ward No. 1, 2 & 8 Mehrauli',
      'Qutub Colonnade & Style Mile Vicinity',
      'Mehrauli-Gurgaon (MG) Road Belt',
      'Kalka Das Marg Designer Area',
      'Sultanpur & Chhattarpur Border'
    ],
    overview: 'Mehrauli combines centuries-old Mughal architecture with avant-garde designer fashion ateliers and rustic farmhouse residences. Spaces in Mehrauli require careful spatial proportioning, arch motifs, and organic textures. FourCube Decor brings on-site handcrafted arch headboards, waterproof fluted bathroom vanities, and natural wood modular cabinetry engineered for long-lasting performance.',
    avgCostSummary: {
      bhk1: '₹2.6L - ₹4.2L',
      bhk2: '₹4.2L - ₹7.2L',
      bhk3: '₹7.0L - ₹12.5L',
      bhk4: '₹11.5L - ₹20L',
      commercial: '₹800 - ₹1,700 / sq.ft'
    },
    featuredRooms: [
      {
        title: 'Custom Arch Headboard Bed with Halo LED',
        desc: 'Handcrafted fluted channel headboard with integrated storage bed base and rust velvet styling.',
        image: realBedroomImages[4].image,
        category: 'Bedroom',
        specs: ['Handcrafted Arch Halo', 'Rust Velvet Upholstery', 'Hydraulic Bed Storage', 'Floating Nightstands']
      },
      {
        title: 'Modern TV Console with Integrated Mandir',
        desc: 'Integrated backlit Om CNC mandir with glass showcase door and floating 4-drawer credenza.',
        image: realLivingImages[2].image,
        category: 'Living Room',
        specs: ['Backlit Om CNC Mandir', 'Brass Accent Handles', 'Floating 4-Drawer Unit', 'Tempered Glass Shutter']
      },
      {
        title: 'High-Gloss Mauve & White Parallel Kitchen',
        desc: 'Continuous profile strip LED lights with deep vegetable tandem drawers and quartz splash.',
        image: realKitchenImages[0].image,
        category: 'Modular Kitchen',
        specs: ['Continuous Profile LED', 'Deep Tandem Drawers', 'Quartz Worktop', 'Chimney Concealment']
      },
      {
        title: 'Corner Vanity with Backlit Oval LED Mirror',
        desc: 'Oval touch-sensor backlit mirror with black granite counter and moisture-sealed fluted wood corner.',
        image: realBathroomImages[0].image,
        category: 'Bathroom',
        specs: ['Oval Touch Backlit Mirror', 'Black Granite Counter', 'Fluted Wood Corner', 'Waterproof HDHMR']
      }
    ],
    commercialHighlights: [
      {
        title: 'Designer Fashion Ateliers & Boutiques',
        desc: 'Bespoke trial dressing vanities, velvet ottoman seating, and brand display arches.',
        image: jewelleryDecorData[1].image
      },
      {
        title: 'Sanitaryware & Bath Experience Stores',
        desc: 'Illuminated arch niches with amber backlighting to showcase luxury fixtures.',
        image: shopDecorData[1].image
      }
    ],
    reviews: [
      {
        name: 'Kabir & Alisha Sethi',
        colony: 'Kalka Das Marg, Mehrauli',
        rating: 5,
        review: 'The custom arch headboard bed and fluted bathroom vanity transformed our Mehrauli apartment into a boutique sanctuary. The team adhered strictly to the 45-day deadline.',
        service: '2 BHK Boutique Renovation'
      },
      {
        name: 'Vikram Joshi',
        colony: 'Ward 1, Mehrauli',
        rating: 5,
        review: 'High quality materials, zero delay, and very transparent pricing. FourCube Decor is the top choice in South Delhi.',
        service: 'Modular Kitchen & Wardrobes'
      }
    ],
    faqs: [
      {
        q: 'Do you customize headboards and furniture for older layouts in Mehrauli?',
        a: 'Yes, we take precise 3D laser measurements and manufacture custom arch beds, corner vanities, and modular wardrobes tailored to unique room geometry.'
      },
      {
        q: 'How does your factory-based execution benefit Mehrauli residents?',
        a: 'Because Mehrauli streets can be narrow, on-site carpentry creates immense dust and disturbance. By fabricating everything in our German factory, we only deliver flat-pack modules for swift 7-day assembly.'
      },
      {
        q: 'What is the warranty coverage?',
        a: 'We provide a 10-year flat replacement warranty on all structural woodwork against termites, borers, and delamination.'
      }
    ]
  },
  {
    slug: 'lajpat-nagar',
    path: '/interior-designers-lajpat-nagar',
    name: 'Lajpat Nagar',
    district: 'South Delhi',
    pincode: '110024',
    tagline: 'Multi-Storey Builder Floors, Central Market Vicinity & Smart Urban Living',
    heroImage: realKitchenImages[1].image,
    stats: {
      projectsDone: '195+',
      designers: '14+',
      turnaroundDays: '45 Days',
      warrantyYears: '10 Years Flat',
      rating: '4.9/5'
    },
    popularSocieties: [
      'Lajpat Nagar 1, 2, 3 & 4',
      'Central Market Shopping Vicinity',
      'Vinobapuri & Ring Road Enclave',
      'Dayanand Colony Builder Floors',
      'Amar Colony Modern Residences'
    ],
    overview: 'Lajpat Nagar is one of South Delhi’s most bustling residential neighborhoods, celebrated for its Central Market, lively cafe culture, and modern multi-storey builder floors in Lajpat Nagar 2, 3, and 4. Maximizing carpet area and optimizing vertical storage without visual clutter is paramount here. FourCube Decor designs high-gloss space-saving kitchens, dual study worktables, and sliding wardrobes with integrated lofts.',
    avgCostSummary: {
      bhk1: '₹2.7L - ₹4.4L',
      bhk2: '₹4.5L - ₹7.5L',
      bhk3: '₹7.5L - ₹13.8L',
      bhk4: '₹12.0L - ₹21L',
      commercial: '₹850 - ₹1,750 / sq.ft'
    },
    featuredRooms: [
      {
        title: 'Minimalist Sky Blue Parallel Kitchen',
        desc: 'Continuous LED profile strips, deep tandem drawers, and concealed chimney ducting designed for Delhi cooking.',
        image: realKitchenImages[1].image,
        category: 'Modular Kitchen',
        specs: ['Continuous Profile LED', 'Deep Tandem Drawers', 'Quartz Counter', 'Concealed Ducting']
      },
      {
        title: 'Clean White Floating Console with Marble Backing',
        desc: 'Full width top display ledge with warm cove lighting and clean push-to-open drawer fronts.',
        image: realLivingImages[6].image,
        category: 'Living Room',
        specs: ['Full Width Display Ledge', 'Upper & Lower Cove Halo', 'Push-to-Open Drawers', 'Wire Management']
      },
      {
        title: 'Contemporary Bedroom with Sliding Wardrobe',
        desc: 'Sliding wardrobe with loft cabinets, matching low TV console credenza, and cove lighting.',
        image: realBedroomImages[2].image,
        category: 'Bedroom',
        specs: ['Sliding Wardrobe with Lofts', 'Matching TV Console', 'False Ceiling Cove', 'Bedside Tables']
      },
      {
        title: 'Custom Dual Study Unit with Capsule Shelves',
        desc: 'Dual ergonomic work tables with lockable drawers and central circular organizer column.',
        image: realStudyImages[0].image,
        category: 'Space Saving / Study',
        specs: ['Dual Ergonomic Tables', 'Circular Organizer Column', 'Capsule Rounded Niches', 'PU Finish']
      }
    ],
    commercialHighlights: [
      {
        title: 'Central Market Retail Showrooms & Kiosks',
        desc: 'Modular wall gondolas, cashier cash wrap counters, and high-durability commercial laminate fittings.',
        image: shopDecorData[2].image
      },
      {
        title: 'Optical & Boutique Showrooms',
        desc: 'Backlit display columns with tiered glass shelving and customer consultation counters.',
        image: shopDecorData[0].image
      }
    ],
    reviews: [
      {
        name: 'Ramesh & Sunita Gupta',
        colony: 'Lajpat Nagar 3',
        rating: 5,
        review: 'Our 3 BHK builder floor in Lajpat Nagar 3 needed smart storage without looking congested. FourCube Decor’s dual study desk and parallel kitchen exceeded our expectations. Finished on the 41st day!',
        service: '3 BHK Full Home Modular Fitout'
      },
      {
        name: 'Pooja Anand',
        colony: 'Lajpat Nagar 4',
        rating: 5,
        review: 'Superb German edge banding! Not a single sharp edge or peeling lamination. Highly professional team.',
        service: 'Modular Kitchen & Master Bedroom'
      }
    ],
    faqs: [
      {
        q: 'How do you handle builder floor logistics in Lajpat Nagar?',
        a: 'All our modular panels are flat-packed with protective corrugated padding and handled smoothly via staircases or lifts, causing zero hallway damage.'
      },
      {
        q: 'What is the timeline for completing a 3 BHK in Lajpat Nagar?',
        a: 'We adhere to a strict 45-day move-in guarantee from 3D design approval to handover. A milestone penalty is backed into our contract.'
      },
      {
        q: 'Do you provide on-site measurements in Lajpat Nagar?',
        a: 'Yes, our senior interior architect visits your site with laser measuring tools for a free consultation and floor plan assessment.'
      }
    ]
  }
];

export const getLocationBySlug = (slugOrPath) => {
  if (!slugOrPath) return null;
  const raw = slugOrPath.toLowerCase().trim();

  // Try direct match first
  const direct = southDelhiLocations.find(l => 
    l.slug === raw || 
    l.path === raw || 
    l.path === `/${raw}`
  );
  if (direct) return direct;

  // Handle patterns like:
  // /interior-design-in-saket -> saket
  // /modular-kitchen-in-saket -> saket
  // /interior-designers-saket -> saket
  // /cities/interior-designers-saket -> saket
  const cleaned = raw
    .replace(/^\/?(cities\/)?/, '')
    .replace(/^.*-in-/, '')
    .replace(/^interior-designers-/, '')
    .replace(/^\//, '')
    .trim();

  return southDelhiLocations.find(l => 
    l.slug === cleaned || 
    cleaned.includes(l.slug)
  );
};

export const getServiceByPath = (path) => {
  if (!path) return 'interior-design';
  const match = path.toLowerCase().match(/^\/?([a-z0-9-]+)-in-/);
  if (match) {
    return match[1];
  }
  return 'interior-design';
};

