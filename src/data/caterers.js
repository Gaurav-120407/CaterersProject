// Local seed dataset for Mumbai, Navi Mumbai, and Thane caterers
// 33 realistic caterer listings (~11 per city)

export const CITIES = ["Mumbai", "Navi Mumbai", "Thane"];

export const FOOD_TYPES = ["Pure Veg", "Veg + Non-Veg", "Non-Veg"];

export const caterers = [
  // ================= MUMBAI (8 listings) =================
  {
    id: "mum-01",
    name: "Shree Ganesh Kripa Caterers",
    city: "Mumbai",
    area: "Dadar West",
    fullAddress: "Shop 12, Ranade Road, Near Shivaji Park, Dadar West, Mumbai - 400028",
    phone: "+91 98201 44521",
    rating: 4.8,
    reviewCount: 142,
    foodType: "Pure Veg",
    startingPrice: 180,
    isVerified: true,
    waiterAvailable: true,
    perWaiterCost: 650,
    imageUrl: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=900&q=80",
    specialities: ["Authentic Maharashtrian", "Gujarati Thali", "Wedding Feasts"],
    description: "Specialists in traditional Maharashtrian and Gujarati wedding feasts with over 18 years of catering experience in Central Mumbai.",
    packages: {
      normal: {
        name: "Normal Package",
        indicativePrice: "₹180 - ₹220 / plate",
        description: "Standard feast ideal for small family gatherings and poojas.",
        items: [
          "Puri & Chapati / Phulka",
          "Paneer Butter Masala",
          "Batata Sukhi Bhaji (Traditional)",
          "Varan Bhat (Maharashtrian Dal & Rice) with Pure Ghee",
          "Khamang Kakdi (Cucumber Salad)",
          "Udad Papad & Mango Pickle",
          "Gulab Jamun (2 pcs)"
        ]
      },
      premium: {
        name: "Premium Package",
        indicativePrice: "₹280 - ₹340 / plate",
        description: "Rich feast featuring multiple paneer dishes, starters, and sweets.",
        items: [
          "Welcome Drink: Kokum Sharbat / Jaljeera",
          "Starter: Veg Spring Rolls & Kothimbir Vadi",
          "Puri, Butter Roti & Naan",
          "Paneer Tikka Masala",
          "Methi Malai Mutter",
          "Dal Tadka & Jeera Rice",
          "Green Salad, Boondi Raita, Roasted Papad",
          "Desserts: Shrikhand & Hot Jalebi with Rabdi"
        ]
      },
      lavish: {
        name: "Lavish Package",
        indicativePrice: "₹450 - ₹550 / plate",
        description: "Grand wedding banquet with live counters, 4 sweets, and multi-cuisine spread.",
        items: [
          "Welcome Drinks: Mocktails & Fresh Kesar Thandai",
          "Live Starters: Paneer Angara, Hara Bhara Kebab, Crispy Corn",
          "Live Chaat Counter: Pani Puri, Dahi Sev Puri",
          "Breads: Kulcha, Butter Naan, Laccha Paratha, Missi Roti",
          "Mains: Kaju Paneer Makhani, Veg Kolhapuri, Dum Aloo Kashmiri",
          "Dal Makhani & Hyderabadi Veg Biryani with Mirchi Ka Salan",
          "Exotic Salad Bar & Assorted Pickles / Chutneys",
          "Desserts: Malai Kulfi, Kaju Katli, Rasmalai & Hot Gulab Jamun"
        ]
      }
    },
    reviews: [
      {
        id: "rev-1",
        author: "Prashant Deshmukh",
        rating: 5,
        date: "12 Aug 2026",
        eventType: "Engagement Function",
        comment: "Excellent Maharashtrian catering for 250 guests. The Varan Bhat and Shrikhand were widely praised by all our relatives."
      },
      {
        id: "rev-2",
        author: "Meera Shah",
        rating: 4.5,
        date: "03 Jul 2026",
        eventType: "Housewarming Ceremony",
        comment: "Very punctual serving staff and clean setup. Hot puries served right at the tables."
      }
    ]
  },
  {
    id: "mum-02",
    name: "Royal Mughal & Coastal Caterers",
    city: "Mumbai",
    area: "Bandra West",
    fullAddress: "Plot 45, Hill Road, Opposite Mehboob Studio, Bandra West, Mumbai - 400050",
    phone: "+91 98192 33109",
    rating: 4.7,
    reviewCount: 98,
    foodType: "Veg + Non-Veg",
    startingPrice: 240,
    isVerified: true,
    waiterAvailable: true,
    perWaiterCost: 750,
    imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80",
    specialities: ["Dum Biryani", "Mughlai Gravies", "Coastal Seafood"],
    description: "Renowned across Bandra and South Mumbai for authentic Dum Biryanis, Coastal fish curries, and royal Mughlai menus.",
    packages: {
      normal: {
        name: "Normal Package",
        indicativePrice: "₹240 - ₹280 / plate",
        description: "Balanced menu with chicken and vegetarian specialties.",
        items: [
          "Roomali Roti & Butter Naan",
          "Chicken Masala Curry (Homestyle)",
          "Paneer Kadhai",
          "Yellow Dal Fry & Steamed Basmati Rice",
          "Onion Mint Salad & Raita",
          "Gulab Jamun"
        ]
      },
      premium: {
        name: "Premium Package",
        indicativePrice: "₹360 - ₹420 / plate",
        description: "Popular wedding package with chicken starters and authentic Dum Biryani.",
        items: [
          "Starters: Chicken Tikka Kebab & Veg Seekh Kebab",
          "Assorted Breads: Tandoori Roti, Naan, Roomali",
          "Butter Chicken & Paneer Lababdar",
          "Dal Makhani",
          "Dum Murgh Biryani & Veg Pulao",
          "Burani Raita & Green Salad",
          "Desserts: Shahi Tukda & Kulfi"
        ]
      },
      lavish: {
        name: "Lavish Package",
        indicativePrice: "₹520 - ₹620 / plate",
        description: "Grand spread including Mutton Rogan Josh, Tandoori Fish, and live kebab stations.",
        items: [
          "Welcome Drinks: Royal Rooh Afza & Blue Lagoon Mocktail",
          "Live Starters: Mutton Galouti Kebab, Tandoori Surmai / Pomfret, Paneer Malai Tikka",
          "Breads: Taftan, Sheermal, Garlic Naan",
          "Mains: Gosht Awadhi Biryani, Mutton Rogan Josh, Butter Chicken, Paneer Pasanda",
          "Dal Bukhara & Peas Pulao",
          "Salad Bar & Cold Raitas",
          "Desserts: Phirni in Matka, Zafrani Kheer, Hot Jalebi"
        ]
      }
    },
    reviews: [
      {
        id: "rev-3",
        author: "Farhan Merchant",
        rating: 5,
        date: "28 May 2026",
        eventType: "Wedding Reception",
        comment: "The Gosht Biryani was unforgettable. Serving staff wore clean uniforms and handled 400 people seamlessly."
      }
    ]
  },
  {
    id: "mum-03",
    name: "Sai Krupa Pure Veg Caterers",
    city: "Mumbai",
    area: "Andheri West",
    fullAddress: "Gala No. 4, Veera Desai Industrial Estate, Andheri West, Mumbai - 400053",
    phone: "+91 97693 11842",
    rating: 4.6,
    reviewCount: 110,
    foodType: "Pure Veg",
    startingPrice: 170,
    isVerified: true,
    waiterAvailable: true,
    perWaiterCost: 600,
    imageUrl: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=900&q=80",
    specialities: ["Jain Food Specialist", "North Indian", "Chinese Starters"],
    description: "Trusted pure vegetarian caterers specializing in strictly Jain, Gujarati, and North Indian menus with zero onion-garlic options.",
    packages: {
      normal: {
        name: "Normal Package",
        indicativePrice: "₹170 - ₹210 / plate",
        description: "Economical pure veg buffet for pujas, birthdays, and community gatherings.",
        items: [
          "Roti & Poori",
          "Paneer Makhani (or Jain Paneer)",
          "Mix Veg Korma",
          "Dal Fry & Jeera Rice",
          "Papad & Green Chutney",
          "Moong Dal Halwa"
        ]
      },
      premium: {
        name: "Premium Package",
        indicativePrice: "₹270 - ₹320 / plate",
        description: "Full family meal with Chinese starter and live hot rotis.",
        items: [
          "Welcome Drink: Lemon Mint Cooler",
          "Starters: Veg Crispy & Paneer Satay",
          "Phulka, Laccha Paratha & Naan",
          "Paneer Pasanda & Veg Jalfrezi",
          "Panchmel Dal & Veg Dum Biryani with Raita",
          "Fresh Cut Fruits & Gulab Jamun with Ice Cream"
        ]
      },
      lavish: {
        name: "Lavish Package",
        indicativePrice: "₹420 - ₹500 / plate",
        description: "Rich feast featuring multi-cuisine counters and 3 signature sweets.",
        items: [
          "Mocktail Bar: 3 Varieties",
          "Starters: Cheese Corn Balls, Tandoori Soya Chaap, Paneer Hariyali",
          "Live Pasta & Mexican Counter",
          "Mains: Kaju Curry, Paneer Handi, Subz Diwani Handi",
          "Dal Tadka & Kashmiri Pulao",
          "Desserts: Angoori Rabdi, Hot Brownie with Vanilla, Malai Cham Cham"
        ]
      }
    },
    reviews: [
      {
        id: "rev-4",
        author: "Bhavin Mehta",
        rating: 5,
        date: "14 Jul 2026",
        eventType: "Satyanarayan Pooja",
        comment: "Excellent pure Jain menu without compromising taste. The Moong Dal Halwa was a hit."
      }
    ]
  },
  {
    id: "mum-04",
    name: "Golden Spoon Catering Services",
    city: "Mumbai",
    area: "Borivali West",
    fullAddress: "Shop 18, Goyal Shopping Center, Opposite Railway Station, Borivali West, Mumbai - 400092",
    phone: "+91 98210 88231",
    rating: 4.5,
    reviewCount: 76,
    foodType: "Pure Veg",
    startingPrice: 190,
    isVerified: true,
    waiterAvailable: true,
    perWaiterCost: 550,
    imageUrl: "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=900&q=80",
    specialities: ["Marwari Rasoi", "Rajasthani Dal Baati Churma", "Snacks Buffet"],
    description: "Renowned for Marwari traditional food, grand Dal Baati Churma setups, and elaborate wedding spreads in the Western Suburbs.",
    packages: {
      normal: {
        name: "Normal Package",
        indicativePrice: "₹190 - ₹230 / plate",
        description: "Simple traditional Rajasthani/North Indian lunch.",
        items: [
          "Phulka & Tawa Paratha",
          "Paneer Butter Masala",
          "Gatta Curry (Rajasthani)",
          "Dal Tadka & Steamed Rice",
          "Kachumber Salad & Masala Papad",
          "Kesar Jalebi"
        ]
      },
      premium: {
        name: "Premium Package",
        indicativePrice: "₹290 - ₹350 / plate",
        description: "Special Dal Baati Churma or Royal Marwari buffet.",
        items: [
          "Welcome Drink: Chaas / Masala Buttermilk",
          "Starter: Pyaaz Ki Kachori & Paneer Tikka",
          "Rajasthani Baati, Panchmel Dal & 2 Types of Churma",
          "Shahi Paneer & Ker Sangri",
          "Pulao with Boondi Kadhi",
          "Desserts: Ghevar & Malpua with Rabdi"
        ]
      },
      lavish: {
        name: "Lavish Package",
        indicativePrice: "₹460 - ₹540 / plate",
        description: "Royal destination wedding menu with 4 starters and silver chafing dish presentation.",
        items: [
          "Appetizers: Dahi Vada, Paneer Shooters, Kaju Roll",
          "Live Roti Counter: Missi, Bajra, Makki Roti with White Butter",
          "Mains: Kaju Paneer, Govind Gatta, Jodhpur Veg Curry",
          "Dal Maharani & Dry Fruit Pulao",
          "Desserts: Rasmalai, Moong Dal Halwa, Dry Fruit Kulfi, Kesar Peda"
        ]
      }
    },
    reviews: [
      {
        id: "rev-5",
        author: "Ritu Rathi",
        rating: 4.8,
        date: "19 Sep 2026",
        eventType: "Family Reunion",
        comment: "Authentic Rajasthani flavours. The Baati with ghee and Churma was pure bliss."
      }
    ]
  },
  {
    id: "mum-05",
    name: "Coastal Flavours Catering",
    city: "Mumbai",
    area: "Chembur",
    fullAddress: "14, Station Road, Near Diamond Garden, Chembur, Mumbai - 400071",
    phone: "+91 98334 52190",
    rating: 4.7,
    reviewCount: 88,
    foodType: "Non-Veg",
    startingPrice: 250,
    isVerified: true,
    waiterAvailable: true,
    perWaiterCost: 700,
    imageUrl: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=900&q=80",
    specialities: ["Malvani Fish Curry", "Mangalorean Ghee Roast", "Prawns Sukka"],
    description: "Specialist Konkani, Malvani, and Mangalorean seafood and chicken caterers serving authentic coastal feasts across Mumbai.",
    packages: {
      normal: {
        name: "Normal Package",
        indicativePrice: "₹250 - ₹300 / plate",
        description: "Classic Malvani chicken feast with rice bhakri.",
        items: [
          "Tandalachi Bhakri (Rice Bhakri) & Chapati",
          "Malvani Chicken Sukka",
          "Chicken Rassa (Spicy thin gravy)",
          "Solkadhi & Indrayani Rice",
          "Kanda Koshimbir & Papad",
          "Ukadiche Modak (1 pc) or Gulab Jamun"
        ]
      },
      premium: {
        name: "Premium Package",
        indicativePrice: "₹380 - ₹440 / plate",
        description: "Coastal seafood & chicken combo feast.",
        items: [
          "Starters: Prawns Koliwada & Chicken Sukka",
          "Bhakri, Vade (Malvani Kombdi Vade) & Chapati",
          "Fish Curry (Surmai / Pomfret)",
          "Chicken Masala Malvani Style",
          "Solkadhi & Steamed Basmati Rice",
          "Desserts: Ukadiche Modak with Ghee & Kharvas"
        ]
      },
      lavish: {
        name: "Lavish Package",
        indicativePrice: "₹550 - ₹650 / plate",
        description: "Grand Seafood Extravaganza with fresh catch of the day.",
        items: [
          "Welcome Drink: Kokum Solkadhi & Tender Coconut Punch",
          "Starters: Surmai Tawa Fry, Prawns Butter Garlic, Crab Lollipop",
          "Mains: Malvani Crab Masala, Mutton Sukka, Pomfret Curry",
          "Rice Bhakri, Kombdi Vade & Ghee Rice",
          "Desserts: Shahi Modak Platter, Tender Coconut Payasam, Puran Poli with Ghee"
        ]
      }
    },
    reviews: [
      {
        id: "rev-6",
        author: "Ajit Samant",
        rating: 5,
        date: "10 Jun 2026",
        eventType: "Birthday Bash",
        comment: "Kombdi Vade and Surmai Fry were fresh and hot. Everyone licked their fingers!"
      }
    ]
  },
  {
    id: "mum-06",
    name: "Classic Celebrations Caterers",
    city: "Mumbai",
    area: "Ghatkopar East",
    fullAddress: "Plot 22, Tilak Road, Ghatkopar East, Mumbai - 400077",
    phone: "+91 99204 90122",
    rating: 4.4,
    reviewCount: 65,
    foodType: "Pure Veg",
    startingPrice: 160,
    isVerified: true,
    waiterAvailable: false,
    perWaiterCost: null,
    imageUrl: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=900&q=80",
    specialities: ["Budget Friendly", "Gujarati Farsan", "South Indian Tiffin"],
    description: "Ideal for small parties, box tiffin catering, and budget events. Customer arranges their own servers or self-service buffet.",
    packages: {
      normal: {
        name: "Normal Package",
        indicativePrice: "₹160 - ₹200 / plate",
        description: "Economical buffet menu suitable for 30-100 guests.",
        items: [
          "Puri & Roti",
          "Aloo Mutter & Chana Masala",
          "Dal Fry & Jeera Rice",
          "Pickle, Papad, Boondi Raita",
          "Suji Halwa"
        ]
      },
      premium: {
        name: "Premium Package",
        indicativePrice: "₹260 - ₹310 / plate",
        description: "Includes Gujarati Farsan (Dhokla, Khandvi) and Paneer gravy.",
        items: [
          "Farsan: Nylon Khaman Dhokla & Lilva Kachori",
          "Puri & Butter Roti",
          "Paneer Kadai & Sev Tameta Nu Shaak",
          "Gujarati Dal & Veg Pulao",
          "Desserts: Kesar Basundi & Jalebi"
        ]
      },
      lavish: {
        name: "Lavish Package",
        indicativePrice: "₹400 - ₹480 / plate",
        description: "Deluxe Gujarati wedding feast with farsan and live sweets.",
        items: [
          "Starters: Cheese Corn Roll, Paneer Chilly, Khandvi",
          "Mains: Paneer Lababdar, Undhiyu (seasonal), Dal Baati",
          "Kashmiri Pulao & Gujarati Kadhi",
          "Desserts: Angoori Basundi, Rasgulla, Mohan Thal"
        ]
      }
    },
    reviews: [
      {
        id: "rev-7",
        author: "Dhiren Parekh",
        rating: 4.4,
        date: "05 May 2026",
        eventType: "Society AGM Lunch",
        comment: "Great quality food for our housing society meeting. Self-service buffet trays were arranged nicely."
      }
    ]
  },
  {
    id: "mum-07",
    name: "Urban Feast Catering Co.",
    city: "Mumbai",
    area: "Vile Parle East",
    fullAddress: "Shop 7, Subhash Road, Vile Parle East, Mumbai - 400057",
    phone: "+91 98205 61729",
    rating: 4.9,
    reviewCount: 156,
    foodType: "Veg + Non-Veg",
    startingPrice: 220,
    isVerified: true,
    waiterAvailable: true,
    perWaiterCost: 700,
    imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",
    specialities: ["Corporate Events", "Continental & Pan Asian", "Tandoori Specialties"],
    description: "Modern corporate and high-end wedding caterers providing hygienic chafing sets, trained uniform waitstaff, and fusion menus.",
    packages: {
      normal: {
        name: "Normal Package",
        indicativePrice: "₹220 - ₹260 / plate",
        description: "Corporate luncheon buffet with veg & chicken selections.",
        items: [
          "Butter Naan & Laccha Paratha",
          "Chicken Kadhai & Paneer Makhani",
          "Dal Makhani & Steamed Basmati Rice",
          "Tossed Salad & Mint Raita",
          "Gulab Jamun"
        ]
      },
      premium: {
        name: "Premium Package",
        indicativePrice: "₹340 - ₹410 / plate",
        description: "Corporate conference package with live appetisers and desserts.",
        items: [
          "Starters: Murgh Malai Tikka & Paneer Hariyali Kebab",
          "Main Course: Butter Chicken, Kadhai Paneer, Veg Jalfrezi",
          "Assorted Breads & Murgh Dum Biryani",
          "Yellow Dal Tadka & Jeera Rice",
          "Desserts: Walnut Brownie with Ice Cream & Rasmalai"
        ]
      },
      lavish: {
        name: "Lavish Package",
        indicativePrice: "₹490 - ₹590 / plate",
        description: "Exquisite banquet featuring Pan Asian live wok station and Mughlai gravies.",
        items: [
          "Live Dim Sum & Sushi Counter",
          "Live Tandoor: Mutton Seekh, Fish Amritsari, Dahi Ke Kebab",
          "Mains: Gosht Rogan Josh, Murgh Lababdar, Paneer Kaju Butter Masala",
          "Dum Gosht Biryani & Veg Awadhi Biryani",
          "Desserts: Live Jalebi Rabdi, Tiramisu Cups, Kulfi Falooda"
        ]
      }
    },
    reviews: [
      {
        id: "rev-8",
        author: "Kavita Nair",
        rating: 5,
        date: "22 Aug 2026",
        eventType: "Annual Corporate Gala",
        comment: "Handled 350 executives flawlessly. Punctual, hygienic, and very polite waitstaff."
      }
    ]
  },
  {
    id: "mum-08",
    name: "Annapurna Mahila Catering Group",
    city: "Mumbai",
    area: "Mulund West",
    fullAddress: "B-12, J.N. Road, Near Mulund Station, Mulund West, Mumbai - 400080",
    phone: "+91 98190 77412",
    rating: 4.8,
    reviewCount: 130,
    foodType: "Pure Veg",
    startingPrice: 150,
    isVerified: true,
    waiterAvailable: true,
    perWaiterCost: 500,
    imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80",
    specialities: ["Ghar Ka Khana", "Traditional Puran Poli", "Affordable Buffets"],
    description: "Warm, authentic homestyle vegetarian food prepared by experienced culinary cooks. Most trusted for naming ceremonies, housewarmings, and small weddings.",
    packages: {
      normal: {
        name: "Normal Package",
        indicativePrice: "₹150 - ₹190 / plate",
        description: "Simple, delicious homestyle vegetarian meal.",
        items: [
          "Hot Phulka & Puri",
          "Sukhi Bhaji (Batata / Bhindi)",
          "Usal (Matki / Chana)",
          "Varan Bhat with Pure Cow Ghee",
          "Fried Papad & Lemon Pickle",
          "Sheera / Suji Halwa"
        ]
      },
      premium: {
        name: "Premium Package",
        indicativePrice: "₹250 - ₹300 / plate",
        description: "Festive meal with signature Puran Poli with milk and ghee.",
        items: [
          "Welcome Drink: Aam Panna / Kokum Sharbat",
          "Starter: Aluvadi & Veg Cutlet",
          "Phulka, Puri & Traditional Puran Poli (Unlimited)",
          "Katachi Amti (Spicy Gram Dal)",
          "Paneer Mutter & Masale Bhat",
          "Desserts: Shrikhand & Hot Gulab Jamun"
        ]
      },
      lavish: {
        name: "Lavish Package",
        indicativePrice: "₹410 - ₹490 / plate",
        description: "Elaborate traditional 5-course Maharashtrian wedding feast.",
        items: [
          "Traditional Welcome Drinks: 2 Flavours",
          "Starters: Kothimbir Vadi, Paneer Tikka, Crispy Bhajiya",
          "Breads: Puri, Chapati, Puran Poli",
          "Mains: Paneer Peshawari, Shev Bhaji, Matki Usal, Bharli Vangi",
          "Varan Bhat, Katachi Amti & Veg Biryani",
          "Desserts: Basundi, Gulab Jamun, Mango Mastani Ice Cream"
        ]
      }
    },
    reviews: [
      {
        id: "rev-9",
        author: "Sneha Kadam",
        rating: 5,
        date: "18 Sep 2026",
        eventType: "Baby Shower (Dohale Jevan)",
        comment: "Puran Poli tasted exactly like home! Guests were asking for the caterer's card all evening."
      }
    ]
  },

  // ================= NAVI MUMBAI (8 listings) =================
  {
    id: "nm-01",
    name: "Utsav Celebrations & Caterers",
    city: "Navi Mumbai",
    area: "Vashi",
    fullAddress: "Sector 17, Above Apna Bazar, Vashi, Navi Mumbai - 400703",
    phone: "+91 98209 11200",
    rating: 4.7,
    reviewCount: 112,
    foodType: "Pure Veg",
    startingPrice: 190,
    isVerified: true,
    waiterAvailable: true,
    perWaiterCost: 600,
    imageUrl: "https://images.unsplash.com/photo-1576867757603-05b134ebc379?auto=format&fit=crop&w=900&q=80",
    specialities: ["Wedding Buffets", "Live Chaat Stalls", "Multi-Cuisine Veg"],
    description: "Vashi's premier pure vegetarian catering company covering wedding halls, banquet lawns, and community centers across Navi Mumbai.",
    packages: {
      normal: {
        name: "Normal Package",
        indicativePrice: "₹190 - ₹230 / plate",
        description: "Standard feast for birthdays and society events.",
        items: [
          "Puri & Roti",
          "Paneer Butter Masala",
          "Veg Kolhapuri",
          "Dal Tadka & Steamed Jeera Rice",
          "Salad, Papad & Pickle",
          "Kala Jamun"
        ]
      },
      premium: {
        name: "Premium Package",
        indicativePrice: "₹290 - ₹360 / plate",
        description: "Includes live chaat counter and 2 premium desserts.",
        items: [
          "Welcome Drink: Virgin Mojito",
          "Live Counter: Pani Puri & Sev Puri",
          "Starters: Veg Manchurian & Paneer Malai Tikka",
          "Laccha Paratha, Naan & Phulka",
          "Paneer Kadhai & Navratan Korma",
          "Dal Makhani & Veg Dum Pulao with Boondi Raita",
          "Desserts: Angoori Rasmalai & Jalebi with Rabdi"
        ]
      },
      lavish: {
        name: "Lavish Package",
        indicativePrice: "₹450 - ₹550 / plate",
        description: "Grand wedding buffet with live Italian, chaat, and dessert stations.",
        items: [
          "Mocktails: 3 varieties",
          "Live Counters: Dosa Counter, Pasta Station, Delhi Chaat",
          "Starters: Hara Bhara Kebab, Paneer Kurkure, Spring Rolls",
          "Mains: Paneer Toofani, Kaju Curry, Veg Maratha",
          "Dal Fry, Dal Makhani & Kashmiri Dry Fruit Pulao",
          "Desserts: Sitaphal Basundi, Chocolate Brownie, Live Kulfi"
        ]
      }
    },
    reviews: [
      {
        id: "rev-10",
        author: "Nitin Joshi",
        rating: 5,
        date: "04 Aug 2026",
        eventType: "Wedding Reception",
        comment: "Arranged food for 500 guests at CIDCO Hall Vashi. Clean setup and very hot food."
      }
    ]
  },
  {
    id: "nm-02",
    name: "Zaika Darbar Biryani & Catering",
    city: "Navi Mumbai",
    area: "Nerul",
    fullAddress: "Shop 9, Sector 21, Near Seawoods Railway Station, Nerul, Navi Mumbai - 400706",
    phone: "+91 98199 44321",
    rating: 4.8,
    reviewCount: 95,
    foodType: "Veg + Non-Veg",
    startingPrice: 230,
    isVerified: true,
    waiterAvailable: true,
    perWaiterCost: 650,
    imageUrl: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=900&q=80",
    specialities: ["Hyderabadi Biryani", "Mutton Korma", "Tandoori Platters"],
    description: "Famous for royal Dum Biryani cooked in traditional copper Degs over slow coal fire. Best for both intimate parties and lavish receptions.",
    packages: {
      normal: {
        name: "Normal Package",
        indicativePrice: "₹230 - ₹270 / plate",
        description: "Rich chicken meal with authentic biryani and sides.",
        items: [
          "Tandoori Roti & Naan",
          "Chicken Tikka Masala",
          "Paneer Butter Masala (for veg guests)",
          "Chicken Dum Biryani & Veg Pulao",
          "Mirchi Ka Salan & Mixed Veg Raita",
          "Shahi Tukda"
        ]
      },
      premium: {
        name: "Premium Package",
        indicativePrice: "₹350 - ₹420 / plate",
        description: "Double starter menu with mutton / chicken specialty.",
        items: [
          "Starters: Murgh Malai Kebab & Veg Crispy",
          "Breads: Butter Naan, Roomali Roti, Garlic Kulcha",
          "Mains: Chicken Handi & Paneer Lababdar",
          "Gosht Hyderabadi Dum Biryani",
          "Dal Makhani & Steamed Basmati Rice",
          "Desserts: Matka Phirni & Gulab Jamun"
        ]
      },
      lavish: {
        name: "Lavish Package",
        indicativePrice: "₹500 - ₹600 / plate",
        description: "Royal Feast with Mutton Biryani, Fish Kebab, and 3 desserts.",
        items: [
          "Welcome Drinks: Mint Lemonade & Kesar Sharbat",
          "Live Tandoor: Mutton Seekh Kebab, Fish Tikka, Paneer Achari",
          "Mains: Mutton Rogan Josh, Butter Chicken, Paneer Makhani",
          "Kacchi Biryani (Gosht) & Zafrani Veg Biryani",
          "Dal Sultani & Assorted Breads",
          "Desserts: Royal Zafrani Kheer, Malai Kulfi, Shahi Tukda"
        ]
      }
    },
    reviews: [
      {
        id: "rev-11",
        author: "Sameer Shaikh",
        rating: 5,
        date: "16 Jul 2026",
        eventType: "Walima Reception",
        comment: "The Mutton Biryani was cooked to perfection. All guests were impressed."
      }
    ]
  },
  {
    id: "nm-03",
    name: "Kharghar Kitchen Caterers",
    city: "Navi Mumbai",
    area: "Kharghar",
    fullAddress: "Plot 30, Sector 12, Near Central Park, Kharghar, Navi Mumbai - 410210",
    phone: "+91 97690 32189",
    rating: 4.5,
    reviewCount: 78,
    foodType: "Pure Veg",
    startingPrice: 175,
    isVerified: true,
    waiterAvailable: true,
    perWaiterCost: 550,
    imageUrl: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80",
    specialities: ["Budget Wedding Buffets", "North & South Indian", "Live Dosa"],
    description: "Reliable and pocket-friendly catering service popular in Kharghar and Panvel for societies, corporate meets, and engagement functions.",
    packages: {
      normal: {
        name: "Normal Package",
        indicativePrice: "₹175 - ₹210 / plate",
        description: "Healthy and delicious standard buffet.",
        items: [
          "Phulka & Puri",
          "Paneer Makhani",
          "Aloo Gobhi Masala",
          "Dal Tadka & Jeera Rice",
          "Salad, Papad & Chutney",
          "Gulab Jamun"
        ]
      },
      premium: {
        name: "Premium Package",
        indicativePrice: "₹275 - ₹330 / plate",
        description: "Includes live mini dosa / uttapam counter or Chinese starters.",
        items: [
          "Live Counter: Mini Dosa (Mysore & Cheese Masala)",
          "Starters: Veg Spring Rolls & Paneer Tikka",
          "Butter Naan & Kulcha",
          "Paneer Pasanda & Veg Handi",
          "Dal Makhani & Veg Biryani with Raita",
          "Desserts: Rasgulla & Ice Cream"
        ]
      },
      lavish: {
        name: "Lavish Package",
        indicativePrice: "₹430 - ₹510 / plate",
        description: "Full service grand banquet with unlimited multi-course choices.",
        items: [
          "Welcome Drinks & Soups: Manchow & Tomato Dhaniya Shorba",
          "Starters: Paneer 65, Crispy Baby Corn, Veg Seekh Kebab",
          "Breads: Tandoori Roti, Laccha Paratha, Garlic Naan",
          "Mains: Kaju Paneer Butter Masala, Veg Jaipuri, Malai Kofta",
          "Dal Tadka & Kashmiri Pulao",
          "Desserts: Kesar Rasmalai, Moong Dal Halwa, Kulfi"
        ]
      }
    },
    reviews: [
      {
        id: "rev-12",
        author: "Sunita More",
        rating: 4.5,
        date: "29 Jun 2026",
        eventType: "Housewarming Pooja",
        comment: "Food reached our Kharghar flat on time. Chafing dishes kept everything piping hot."
      }
    ]
  },
  {
    id: "nm-04",
    name: "Belapur Grand Banquet Caterers",
    city: "Navi Mumbai",
    area: "CBD Belapur",
    fullAddress: "Sector 11, CBD Belapur, Navi Mumbai - 400614",
    phone: "+91 98202 77811",
    rating: 4.6,
    reviewCount: 84,
    foodType: "Veg + Non-Veg",
    startingPrice: 220,
    isVerified: true,
    waiterAvailable: true,
    perWaiterCost: 700,
    imageUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80",
    specialities: ["Corporate Conclaves", "Seafood & Tandoori", "Cocktail Parties"],
    description: "Experienced catering partner for major IT parks, banking institutions, and wedding lawns located in CBD Belapur and surrounding nodes.",
    packages: {
      normal: {
        name: "Normal Package",
        indicativePrice: "₹220 - ₹260 / plate",
        description: "Essential non-veg and veg corporate buffet.",
        items: [
          "Butter Roti & Naan",
          "Chicken Kadhai & Veg Kolhapuri",
          "Paneer Butter Masala",
          "Dal Fry & Steamed Basmati Rice",
          "Salad & Boondi Raita",
          "Gulab Jamun"
        ]
      },
      premium: {
        name: "Premium Package",
        indicativePrice: "₹340 - ₹400 / plate",
        description: "Balanced wedding package with chicken & fish options.",
        items: [
          "Starters: Chicken Tikka, Fish Amritsari, Paneer Shashlik",
          "Breads: Assorted Tandoori Breads",
          "Mains: Chicken Lababdar, Fish Curry, Paneer Do Pyaza",
          "Dal Makhani & Chicken Biryani / Veg Pulao",
          "Desserts: Shahi Tukda & Vanilla with Hot Chocolate"
        ]
      },
      lavish: {
        name: "Lavish Package",
        indicativePrice: "₹480 - ₹580 / plate",
        description: "Premium lawn wedding spread with live seafood tawa counter.",
        items: [
          "Welcome Drinks: Mocktail Bar",
          "Live Seafood Counter: Surmai Tawa Fry & Prawns Koliwada",
          "Live Veg Starters: Dahi Kebab, Tandoori Mushroom",
          "Mains: Mutton Handi, Murgh Tikka Masala, Paneer Kaju Masala",
          "Lucknowi Mutton Biryani & Veg Pulao",
          "Desserts: Rasmalai, Malai Kulfi, Gajar Ka Halwa (seasonal)"
        ]
      }
    },
    reviews: [
      {
        id: "rev-13",
        author: "Rohan Varma",
        rating: 4.6,
        date: "14 May 2026",
        eventType: "Corporate Dinner",
        comment: "Polite staff and delicious Fish Amritsari. Professional execution throughout."
      }
    ]
  },
  {
    id: "nm-05",
    name: "Seawoods Traditional Kitchen",
    city: "Navi Mumbai",
    area: "Seawoods",
    fullAddress: "Sector 44A, Near Grand Central Mall, Seawoods, Navi Mumbai - 400706",
    phone: "+91 98191 55609",
    rating: 4.9,
    reviewCount: 140,
    foodType: "Pure Veg",
    startingPrice: 185,
    isVerified: true,
    waiterAvailable: true,
    perWaiterCost: 600,
    imageUrl: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=900&q=80",
    specialities: ["South Indian Sadhya", "Traditional Maharashtrian", "Pure Ghee Sweets"],
    description: "Traditional feast experts specializing in authentic Kerala Onam Sadhya on banana leaf, Maharashtrian wedding pangats, and pure ghee sweets.",
    packages: {
      normal: {
        name: "Normal Package",
        indicativePrice: "₹185 - ₹225 / plate",
        description: "Classic South Indian / Maharashtrian meal.",
        items: [
          "Puri & Chapati",
          "Paneer Butter Masala",
          "Batata Sukhi Bhaji",
          "Dal Fry & Steamed Rice",
          "Salad, Papad & Pickle",
          "Gulab Jamun"
        ]
      },
      premium: {
        name: "Premium Package",
        indicativePrice: "₹285 - ₹350 / plate",
        description: "Elaborate traditional spread with 2 sweets and traditional drinks.",
        items: [
          "Welcome Drink: Solkadhi / Sambharam (Spiced Buttermilk)",
          "Starters: Kothimbir Vadi & Medu Vada with Chutneys",
          "Puri, Chapati & Rice Bhakri",
          "Bharli Vangi (Stuffed Brinjal) & Paneer Kolhapuri",
          "Varan Bhat with Pure Ghee & Masale Bhat",
          "Desserts: Payasam / Kheer & Shrikhand"
        ]
      },
      lavish: {
        name: "Lavish Package",
        indicativePrice: "₹450 - ₹530 / plate",
        description: "Grand Traditional Sadhya / Pangat feast with 24 items served on fresh banana leaf.",
        items: [
          "Traditional Banana Leaf Setup: Salt, Sarkaravaratti, Upperi (Banana Chips)",
          "Curries: Avial, Thoran, Olan, Kalan, Erissery",
          "Parippu with Ghee, Sambar, Rasam, Moru Curry",
          "Red Matta Rice & White Basmati Rice",
          "Desserts: Palada Pradhaman, Parippu Payasam & Boli with Ghee"
        ]
      }
    },
    reviews: [
      {
        id: "rev-14",
        author: "Geetha Nambiar",
        rating: 5,
        date: "08 Sep 2026",
        eventType: "Family Sadhya",
        comment: "Authentic Sadhya taste right in Seawoods. Palada Pradhaman was extraordinary."
      }
    ]
  },
  {
    id: "nm-06",
    name: "Airoli Coastal & Malvani Bites",
    city: "Navi Mumbai",
    area: "Airoli",
    fullAddress: "Sector 3, Near Airoli Station, Airoli, Navi Mumbai - 400708",
    phone: "+91 99208 66754",
    rating: 4.4,
    reviewCount: 62,
    foodType: "Non-Veg",
    startingPrice: 240,
    isVerified: true,
    waiterAvailable: false,
    perWaiterCost: null,
    imageUrl: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=900&q=80",
    specialities: ["Malvani Kombdi Vade", "Prawns Masala", "Budget Non-Veg Trays"],
    description: "Convenient party tray and buffet catering for techies, family get-togethers, and bachelor celebrations in Airoli and Rabale.",
    packages: {
      normal: {
        name: "Normal Package",
        indicativePrice: "₹240 - ₹280 / plate",
        description: "Popular chicken feast for party gatherings.",
        items: [
          "Chapati & Kombdi Vade",
          "Chicken Sukka Malvani",
          "Chicken Rassa",
          "Indrayani Rice & Solkadhi",
          "Onion & Lemon Salad",
          "Gulab Jamun"
        ]
      },
      premium: {
        name: "Premium Package",
        indicativePrice: "₹360 - ₹420 / plate",
        description: "Chicken and Prawns combo with appetizers.",
        items: [
          "Starters: Prawns Rava Fry & Chicken Koliwada",
          "Bhakri & Malvani Vade",
          "Prawns Masala & Chicken Handi",
          "Steamed Basmati Rice & Solkadhi",
          "Desserts: Ukadiche Modak (2 pcs) with Ghee"
        ]
      },
      lavish: {
        name: "Lavish Package",
        indicativePrice: "₹500 - ₹590 / plate",
        description: "Complete coastal treat with Crab, Surmai, and Chicken.",
        items: [
          "Welcome Drink: Kokum Sharbat",
          "Starters: Surmai Fry, Prawns Sukka, Chicken Seekh",
          "Mains: Crab Curry, Mutton Sukka, Malvani Chicken Gravy",
          "Rice Bhakri, Chapati, Ghee Rice & Solkadhi",
          "Desserts: Shahi Tukda & Kharvas"
        ]
      }
    },
    reviews: [
      {
        id: "rev-15",
        author: "Ketan Sawant",
        rating: 4.5,
        date: "17 Jul 2026",
        eventType: "House Party",
        comment: "Food delivered in warm sealed containers. The Kombdi Vade were crisp and puffed."
      }
    ]
  },
  {
    id: "nm-07",
    name: "Kopar Khairane Swad Caterers",
    city: "Navi Mumbai",
    area: "Kopar Khairane",
    fullAddress: "Sector 15, Kopar Khairane, Navi Mumbai - 400709",
    phone: "+91 97699 88120",
    rating: 4.5,
    reviewCount: 71,
    foodType: "Pure Veg",
    startingPrice: 165,
    isVerified: true,
    waiterAvailable: true,
    perWaiterCost: 550,
    imageUrl: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=900&q=80",
    specialities: ["Budget Buffets", "North Indian", "Pooja Special Meals"],
    description: "Affordable pure veg catering services catering to community temples, apartment societies, and birthday celebrations in Kopar Khairane and Ghansoli.",
    packages: {
      normal: {
        name: "Normal Package",
        indicativePrice: "₹165 - ₹200 / plate",
        description: "Pooja special homestyle vegetarian buffet.",
        items: [
          "Poori & Roti",
          "Paneer Butter Masala",
          "Chana Masala",
          "Dal Fry & Jeera Rice",
          "Papad & Mango Pickle",
          "Boondi Ladoo (2 pcs)"
        ]
      },
      premium: {
        name: "Premium Package",
        indicativePrice: "₹265 - ₹320 / plate",
        description: "Rich party menu with starter and ice cream.",
        items: [
          "Starters: Veg Cutlet & Paneer Tikka",
          "Puri, Phulka & Naan",
          "Paneer Kolhapuri & Veg Makhanwala",
          "Dal Tadka & Veg Pulao with Boondi Raita",
          "Desserts: Gulab Jamun & Vanilla Ice Cream"
        ]
      },
      lavish: {
        name: "Lavish Package",
        indicativePrice: "₹410 - ₹480 / plate",
        description: "Elaborate 4-course North Indian feast.",
        items: [
          "Welcome Drink: Blue Curacao Mocktail",
          "Starters: Dahi Kebab, Cheese Balls, Paneer Chilli",
          "Mains: Kaju Curry, Paneer Lababdar, Veg Diwani Handi",
          "Dal Makhani & Kashmiri Pulao",
          "Desserts: Kesar Rasmalai, Malpua Rabdi"
        ]
      }
    },
    reviews: [
      {
        id: "rev-16",
        author: "Vinayak Patil",
        rating: 4.5,
        date: "25 Aug 2026",
        eventType: "Ganesh Festival Prasad Lunch",
        comment: "Arranged lunch for 150 mandal members. Clean execution and pure taste."
      }
    ]
  },
  {
    id: "nm-08",
    name: "Sanpada Royal Hospitality",
    city: "Navi Mumbai",
    area: "Sanpada",
    fullAddress: "Palm Beach Road Junction, Sector 18, Sanpada, Navi Mumbai - 400705",
    phone: "+91 98207 43291",
    rating: 4.8,
    reviewCount: 104,
    foodType: "Veg + Non-Veg",
    startingPrice: 235,
    isVerified: true,
    waiterAvailable: true,
    perWaiterCost: 700,
    imageUrl: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=900&q=80",
    specialities: ["Palm Beach Lawns Events", "Mughlai Gravies", "Cocktail Banquets"],
    description: "High reputation for executing lawn weddings, corporate dinners, and milestone anniversaries along the Palm Beach corridor.",
    packages: {
      normal: {
        name: "Normal Package",
        indicativePrice: "₹235 - ₹275 / plate",
        description: "Standard banquet menu with chicken and veg gravies.",
        items: [
          "Tandoori Roti & Naan",
          "Chicken Tikka Masala",
          "Paneer Butter Masala",
          "Yellow Dal Tadka & Jeera Rice",
          "Salad & Papad",
          "Gulab Jamun"
        ]
      },
      premium: {
        name: "Premium Package",
        indicativePrice: "₹360 - ₹430 / plate",
        description: "Full wedding setup with live tandoor starters.",
        items: [
          "Welcome Drinks: Fruit Punch & Mojito",
          "Live Starters: Chicken Banjara Tikka, Paneer Achari Tikka",
          "Breads: Butter Naan, Missi Roti, Laccha Paratha",
          "Mains: Murgh Rara, Paneer Kadhai, Veg Handi",
          "Dal Makhani & Dum Chicken Biryani",
          "Desserts: Angoori Rasmalai & Hot Jalebi"
        ]
      },
      lavish: {
        name: "Lavish Package",
        indicativePrice: "₹520 - ₹620 / plate",
        description: "Grand Royal Feast featuring Mutton Rogan Josh and live dessert counters.",
        items: [
          "Mocktails: 4 Varieties",
          "Live Starters: Mutton Seekh Kebab, Tandoori Fish, Paneer Malai Tikka",
          "Mains: Mutton Rogan Josh, Butter Chicken, Paneer Lababdar, Subz Miloni",
          "Dal Bukhara & Lucknowi Dum Biryani",
          "Desserts: Live Rabdi Jalebi, Matka Kulfi, Chocolate Fountain"
        ]
      }
    },
    reviews: [
      {
        id: "rev-17",
        author: "Manish Agarwal",
        rating: 5,
        date: "02 Jun 2026",
        eventType: "Wedding Reception",
        comment: "Excellent banquet service on Palm Beach Road. The waitstaff was extremely attentive."
      }
    ]
  },

  // ================= THANE (8 listings) =================
  {
    id: "th-01",
    name: "Shree Samarth Kripa Caterers",
    city: "Thane",
    area: "Naupada",
    fullAddress: "Gokhale Road, Opposite Shivaji Maidan, Naupada, Thane West - 400602",
    phone: "+91 98200 89123",
    rating: 4.9,
    reviewCount: 168,
    foodType: "Pure Veg",
    startingPrice: 180,
    isVerified: true,
    waiterAvailable: true,
    perWaiterCost: 600,
    imageUrl: "https://images.unsplash.com/photo-1606471191009-63994c53433b?auto=format&fit=crop&w=900&q=80",
    specialities: ["Traditional Maharashtrian", "Brahmin Style Bhojan", "Wedding Pangats"],
    description: "Thane's oldest and most respected traditional vegetarian caterers, famous for authentic Maharashtrian wedding pangat feasts in Naupada and Panchpakhadi.",
    packages: {
      normal: {
        name: "Normal Package",
        indicativePrice: "₹180 - ₹220 / plate",
        description: "Homestyle traditional Maharashtrian lunch.",
        items: [
          "Phulka & Puri",
          "Batata Bhaji & Chana Masala",
          "Varan Bhat with Pure Ghee",
          "Kakdi Koshimbir & Papad",
          "Mango Pickle & Fried Mirchi",
          "Gulab Jamun (2 pcs)"
        ]
      },
      premium: {
        name: "Premium Package",
        indicativePrice: "₹280 - ₹340 / plate",
        description: "Special pangat menu with unlimited Puran Poli and Shrikhand.",
        items: [
          "Welcome Drink: Kairi Panha / Kokum Sharbat",
          "Starters: Kothimbir Vadi & Batata Vada",
          "Puri, Chapati & Hot Puran Poli with Pure Ghee",
          "Katachi Amti, Paneer Kolhapuri & Masale Bhat",
          "Mattha (Spiced Buttermilk)",
          "Desserts: Kesar Shrikhand & Hot Jalebi"
        ]
      },
      lavish: {
        name: "Lavish Package",
        indicativePrice: "₹450 - ₹540 / plate",
        description: "Grand traditional 5-course wedding meal with silver thali presentation.",
        items: [
          "Welcome Drinks: Panha, Kokum Sharbat, Thandai",
          "Appetizers: Aluvadi, Paneer Tikka, Moong Dal Bhajiya",
          "Breads: Puri, Chapati, Bajra Bhakri, Puran Poli",
          "Mains: Kaju Paneer, Bharli Vangi, Valache Birde, Shev Bhaji",
          "Dal Maharani, Varan Bhat & Dry Fruit Masale Bhat",
          "Desserts: Basundi, Gulab Jamun, Mango Kulfi, Ukadiche Modak"
        ]
      }
    },
    reviews: [
      {
        id: "rev-18",
        author: "Anand Chitale",
        rating: 5,
        date: "11 Sep 2026",
        eventType: "Sacred Thread Ceremony (Munja)",
        comment: "Superb traditional pangat! The Varan Bhat, Katachi Amti, and Puran Poli were heavenly."
      }
    ]
  },
  {
    id: "th-02",
    name: "Ghodbunder Royal Banquets & Caterers",
    city: "Thane",
    area: "Ghodbunder Road",
    fullAddress: "Near Suraj Water Park, Waghbil Naka, Ghodbunder Road, Thane West - 400615",
    phone: "+91 98194 77112",
    rating: 4.7,
    reviewCount: 124,
    foodType: "Veg + Non-Veg",
    startingPrice: 230,
    isVerified: true,
    waiterAvailable: true,
    perWaiterCost: 700,
    imageUrl: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=900&q=80",
    specialities: ["Destination Lawns", "Tandoori Specialties", "Mughlai & Punjabi"],
    description: "Preferred catering team for the luxury resort halls and wedding lawns along the lush Ghodbunder Road corridor.",
    packages: {
      normal: {
        name: "Normal Package",
        indicativePrice: "₹230 - ₹270 / plate",
        description: "Standard wedding package with chicken & paneer mains.",
        items: [
          "Tandoori Roti & Naan",
          "Butter Chicken",
          "Paneer Butter Masala",
          "Dal Makhani & Steamed Basmati Rice",
          "Green Salad & Boondi Raita",
          "Gulab Jamun"
        ]
      },
      premium: {
        name: "Premium Package",
        indicativePrice: "₹350 - ₹420 / plate",
        description: "Grand lawn buffet with live kebab counters.",
        items: [
          "Welcome Drinks: Kiwi Punch & Fresh Lime Soda",
          "Starters: Chicken Banjara Tikka, Fish Amritsari, Paneer Tikka",
          "Assorted Tandoori Breads",
          "Mains: Chicken Kadhai, Fish Curry, Paneer Lababdar",
          "Murgh Dum Biryani & Veg Pulao",
          "Desserts: Shahi Tukda & Rasmalai"
        ]
      },
      lavish: {
        name: "Lavish Package",
        indicativePrice: "₹500 - ₹620 / plate",
        description: "Luxury wedding feast with Mutton Biryani, live pasta and chaat counters.",
        items: [
          "Welcome Drinks & Mocktails Bar: 4 Types",
          "Live Counters: Delhi Chaat, Italian Pasta, Tandoor Grills",
          "Starters: Mutton Seekh, Tandoori Prawns, Dahi Kebab",
          "Mains: Mutton Rogan Josh, Butter Chicken, Kaju Paneer Makhani",
          "Awadhi Mutton Biryani & Veg Biryani",
          "Desserts: Live Jalebi with Rabdi, Ice Cream Parlour, Kulfi"
        ]
      }
    },
    reviews: [
      {
        id: "rev-19",
        author: "Vikram Rane",
        rating: 5,
        date: "05 Jul 2026",
        eventType: "Lawn Wedding",
        comment: "Flawless catering for our 600 guest wedding on Ghodbunder Road. The live tandoor was fantastic."
      }
    ]
  },
  {
    id: "th-03",
    name: "Majiwada Green Treat Caterers",
    city: "Thane",
    area: "Majiwada",
    fullAddress: "Opposite Viviana Mall, Majiwada Junction, Thane West - 400601",
    phone: "+91 97692 44501",
    rating: 4.6,
    reviewCount: 91,
    foodType: "Pure Veg",
    startingPrice: 175,
    isVerified: true,
    waiterAvailable: true,
    perWaiterCost: 600,
    imageUrl: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?auto=format&fit=crop&w=900&q=80",
    specialities: ["High-Rise Society Catering", "Jain Food", "Live Chaat"],
    description: "Specialized in residential township catering for Lodha, Rustomjee, and Sheth complexes across Majiwada and Balkum.",
    packages: {
      normal: {
        name: "Normal Package",
        indicativePrice: "₹175 - ₹215 / plate",
        description: "Compact society event lunch buffet.",
        items: [
          "Puri & Roti",
          "Paneer Makhani",
          "Veg Kolhapuri",
          "Dal Tadka & Jeera Rice",
          "Salad, Papad & Pickle",
          "Gulab Jamun"
        ]
      },
      premium: {
        name: "Premium Package",
        indicativePrice: "₹275 - ₹340 / plate",
        description: "Township party favorite with live chaat and starter.",
        items: [
          "Starters: Veg Spring Roll & Paneer Satay",
          "Live Chaat: Sev Puri & Pani Puri",
          "Butter Naan & Phulka",
          "Paneer Pasanda & Veg Handi",
          "Dal Makhani & Veg Biryani with Raita",
          "Desserts: Angoori Rasmalai & Ice Cream"
        ]
      },
      lavish: {
        name: "Lavish Package",
        indicativePrice: "₹420 - ₹510 / plate",
        description: "Grand township banquet with multi-cuisine live stations.",
        items: [
          "Welcome Drinks & Soups: 2 Flavours",
          "Live Counters: Chaat, Pav Bhaji, Pasta",
          "Starters: Cheese Balls, Paneer Tikka, Hara Bhara Kebab",
          "Mains: Kaju Curry, Paneer Lababdar, Veg Maratha",
          "Dal Fry & Kashmiri Pulao",
          "Desserts: Malai Kulfi, Hot Jalebi with Rabdi, Brownie"
        ]
      }
    },
    reviews: [
      {
        id: "rev-20",
        author: "Pooja Hegde",
        rating: 4.6,
        date: "15 Aug 2026",
        eventType: "Independence Day Society Feast",
        comment: "Catered for 200 residents in our club house. Very neat and tasty food."
      }
    ]
  },
  {
    id: "th-04",
    name: "Malvani Katta Thane Caterers",
    city: "Thane",
    area: "Panchpakhadi",
    fullAddress: "Almeida Road, Near Thane Municipal Corporation, Panchpakhadi, Thane West - 400602",
    phone: "+91 98205 99312",
    rating: 4.8,
    reviewCount: 135,
    foodType: "Non-Veg",
    startingPrice: 245,
    isVerified: true,
    waiterAvailable: true,
    perWaiterCost: 650,
    imageUrl: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=900&q=80",
    specialities: ["Malvani Chicken & Fish", "Kombdi Vade", "Surmai Fry"],
    description: "Thane's authentic coastal non-veg specialists serving crispy Surmai fry, prawns sukka, and authentic Kolhapur-style spicy mutton.",
    packages: {
      normal: {
        name: "Normal Package",
        indicativePrice: "₹245 - ₹285 / plate",
        description: "Traditional Malvani Kombdi Vade meal.",
        items: [
          "Tandalachi Bhakri / Chapati & Kombdi Vade",
          "Malvani Chicken Sukka",
          "Chicken Rassa (Spicy thin gravy)",
          "Solkadhi & Indrayani Rice",
          "Onion Lemon Salad & Papad",
          "Gulab Jamun"
        ]
      },
      premium: {
        name: "Premium Package",
        indicativePrice: "₹370 - ₹430 / plate",
        description: "Chicken and coastal fish combination menu.",
        items: [
          "Starters: Prawns Koliwada & Chicken Sukka",
          "Bhakri, Vade & Chapati",
          "Surmai Fish Curry & Chicken Masala",
          "Steamed Basmati Rice & Solkadhi",
          "Desserts: Ukadiche Modak with Pure Ghee"
        ]
      },
      lavish: {
        name: "Lavish Package",
        indicativePrice: "₹530 - ₹630 / plate",
        description: "Seafood & Mutton Grand Feast with fresh coastal catch.",
        items: [
          "Welcome Drink: Solkadhi & Aam Panna",
          "Starters: Pomfret Tawa Fry, Prawns Butter Garlic, Mutton Sukka",
          "Mains: Kolhapuri Mutton Rassa, Chicken Handi, Crab Masala",
          "Kombdi Vade, Bhakri & Ghee Rice",
          "Desserts: Kharvas, Shahi Tukda, Modak"
        ]
      }
    },
    reviews: [
      {
        id: "rev-21",
        author: "Milind Salvi",
        rating: 5,
        date: "23 Jul 2026",
        eventType: "Birthday Celebration",
        comment: "Authentic Konkani flavours. The Kombdi Vade and Solkadhi were 10 on 10."
      }
    ]
  },
  {
    id: "th-05",
    name: "Hiranandani Estate Caterers",
    city: "Thane",
    area: "Hiranandani Estate",
    fullAddress: "The Walk, Hiranandani Estate, Ghodbunder Road, Thane West - 400607",
    phone: "+91 98198 12345",
    rating: 4.7,
    reviewCount: 115,
    foodType: "Veg + Non-Veg",
    startingPrice: 250,
    isVerified: true,
    waiterAvailable: true,
    perWaiterCost: 750,
    imageUrl: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=900&q=80",
    specialities: ["Fusion Menus", "Boutique Corporate Events", "Continental & Mughlai"],
    description: "High-end boutique catering outfit based inside Hiranandani Estate, serving premium parties, private villas, and terrace celebrations.",
    packages: {
      normal: {
        name: "Normal Package",
        indicativePrice: "₹250 - ₹290 / plate",
        description: "Chic dinner buffet with veg & chicken mains.",
        items: [
          "Butter Naan & Garlic Roti",
          "Chicken Lababdar & Paneer Makhani",
          "Dal Makhani & Jeera Basmati Rice",
          "Fresh Caesar Salad & Mint Raita",
          "Warm Gulab Jamun"
        ]
      },
      premium: {
        name: "Premium Package",
        indicativePrice: "₹380 - ₹450 / plate",
        description: "Boutique cocktail & dinner menu with live appetisers.",
        items: [
          "Starters: Murgh Malai Tikka, Fish Fingers, Paneer Tikka",
          "Mains: Butter Chicken, Paneer Pasanda, Veg Jalfrezi",
          "Assorted Breads & Chicken Dum Biryani",
          "Dal Bukhara & Peas Pulao",
          "Desserts: Belgian Chocolate Mousse & Rasmalai"
        ]
      },
      lavish: {
        name: "Lavish Package",
        indicativePrice: "₹550 - ₹650 / plate",
        description: "Ultra-luxury banquet spread with live barbecue and gourmet desserts.",
        items: [
          "Welcome Drinks: Passion Fruit Cooler & Blue Lagoon",
          "Live Barbecue Grill: Mutton Seekh, Grilled Prawns, Tandoori Paneer",
          "Mains: Gosht Awadhi Biryani, Mutton Rogan Josh, Murgh Tikka Masala, Kaju Paneer",
          "Dal Maharani & Fragrant Saffron Rice",
          "Desserts: Live Churros, Tiramisu, Malai Kulfi with Falooda"
        ]
      }
    },
    reviews: [
      {
        id: "rev-22",
        author: "Devendra Kulkarni",
        rating: 5,
        date: "01 Sep 2026",
        eventType: "25th Silver Anniversary",
        comment: "Top notch food and presentation. The live barbecue on our terrace was a huge hit."
      }
    ]
  },
  {
    id: "th-06",
    name: "Vartak Nagar Community Caterers",
    city: "Thane",
    area: "Vartak Nagar",
    fullAddress: "Pokhran Road No. 1, Near Korum Mall, Vartak Nagar, Thane West - 400606",
    phone: "+91 97691 66543",
    rating: 4.4,
    reviewCount: 58,
    foodType: "Pure Veg",
    startingPrice: 155,
    isVerified: true,
    waiterAvailable: false,
    perWaiterCost: null,
    imageUrl: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=900&q=80",
    specialities: ["Budget Friendly", "Homestyle North Indian", "Religious Poojas"],
    description: "Pocket-friendly pure veg caterers known for bulk deliveries, pooja thalis, and self-buffet events across Pokhran Road 1 & 2.",
    packages: {
      normal: {
        name: "Normal Package",
        indicativePrice: "₹155 - ₹195 / plate",
        description: "Economical and tasty traditional vegetarian lunch.",
        items: [
          "Puri & Chapati",
          "Chole Masala & Aloo Jeera",
          "Dal Fry & Steamed Rice",
          "Papad & Mango Pickle",
          "Boondi Ladoo (2 pcs)"
        ]
      },
      premium: {
        name: "Premium Package",
        indicativePrice: "₹255 - ₹310 / plate",
        description: "Includes paneer gravy and 2 traditional sweets.",
        items: [
          "Starters: Veg Cutlet & Kothimbir Vadi",
          "Puri, Phulka & Naan",
          "Paneer Butter Masala & Veg Kolhapuri",
          "Dal Tadka & Veg Pulao with Raita",
          "Desserts: Gulab Jamun & Shrikhand"
        ]
      },
      lavish: {
        name: "Lavish Package",
        indicativePrice: "₹390 - ₹460 / plate",
        description: "Special event vegetarian buffet with rich sweets.",
        items: [
          "Welcome Drinks: Chaas & Jaljeera",
          "Starters: Paneer Crispy, Hara Bhara Kebab",
          "Mains: Kaju Curry, Paneer Handi, Subz Diwani Handi",
          "Dal Makhani & Kashmiri Pulao",
          "Desserts: Rasmalai, Moong Dal Halwa"
        ]
      }
    },
    reviews: [
      {
        id: "rev-23",
        author: "Sanjay Tawde",
        rating: 4.4,
        date: "12 May 2026",
        eventType: "Satyanarayan Maha Pooja",
        comment: "Very economical and genuine homestyle food. The Chole and Puri were fresh and non-oily."
      }
    ]
  },
  {
    id: "th-07",
    name: "Kalwa Kitchen & Biryani House",
    city: "Thane",
    area: "Kalwa",
    fullAddress: "Station Road, Near Kalwa Bridge, Kalwa, Thane - 400605",
    phone: "+91 98204 11789",
    rating: 4.5,
    reviewCount: 72,
    foodType: "Veg + Non-Veg",
    startingPrice: 210,
    isVerified: true,
    waiterAvailable: true,
    perWaiterCost: 550,
    imageUrl: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=900&q=80",
    specialities: ["Chicken Biryani Degs", "Agri & Koli Style Curries", "Affordable Parties"],
    description: "Famous for spicy Agri style chicken and authentic dum biryani delivered hot in traditional sealed degs for parties in Kalwa and Kharegaon.",
    packages: {
      normal: {
        name: "Normal Package",
        indicativePrice: "₹210 - ₹250 / plate",
        description: "Agri style spicy chicken meal with bhakri.",
        items: [
          "Tandalachi Bhakri & Chapati",
          "Agri Chicken Sukka",
          "Spicy Chicken Rassa",
          "Jeera Rice & Onion Salad",
          "Gulab Jamun"
        ]
      },
      premium: {
        name: "Premium Package",
        indicativePrice: "₹320 - ₹380 / plate",
        description: "Chicken Biryani deg and starter package.",
        items: [
          "Starters: Chicken Koliwada & Veg Manchurian",
          "Assorted Roti & Bhakri",
          "Agri Chicken Handi & Paneer Kadai",
          "Dum Murgh Biryani with Raita & Salan",
          "Desserts: Shahi Tukda"
        ]
      },
      lavish: {
        name: "Lavish Package",
        indicativePrice: "₹460 - ₹550 / plate",
        description: "Agri special feast with Mutton Sukka and Fish Koliwada.",
        items: [
          "Welcome Drink: Solkadhi",
          "Starters: Bangda / Surmai Rava Fry & Chicken Sukka",
          "Mains: Agri Mutton Gravy, Chicken Handi, Paneer Butter Masala",
          "Rice Bhakri, Chapati & Steamed Rice",
          "Desserts: Gulab Jamun with Ice Cream & Basundi"
        ]
      }
    },
    reviews: [
      {
        id: "rev-24",
        author: "Sachin Patil",
        rating: 4.6,
        date: "04 Aug 2026",
        eventType: "Get-Together",
        comment: "Real Agri taste! Chicken sukka and bhakri were hot and delicious."
      }
    ]
  },
  {
    id: "th-08",
    name: "Thane Royal Darbar Caterers",
    city: "Thane",
    area: "Thane West",
    fullAddress: "Opposite Talao Pali, Shivaji Road, Thane West - 400601",
    phone: "+91 98197 55432",
    rating: 4.8,
    reviewCount: 149,
    foodType: "Veg + Non-Veg",
    startingPrice: 225,
    isVerified: true,
    waiterAvailable: true,
    perWaiterCost: 650,
    imageUrl: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=900&q=80",
    specialities: ["Talao Pali Heritage Banquets", "Dum Biryani", "Mughlai & North Indian"],
    description: "Premier wedding and reception catering brand overlooking scenic Talao Pali, serving high quality Mughlai, North Indian, and Maharashtrian delicacies.",
    packages: {
      normal: {
        name: "Normal Package",
        indicativePrice: "₹225 - ₹265 / plate",
        description: "Balanced reception buffet with chicken & paneer.",
        items: [
          "Tandoori Roti & Naan",
          "Chicken Handi & Paneer Butter Masala",
          "Dal Tadka & Steamed Rice",
          "Green Salad & Papad",
          "Gulab Jamun"
        ]
      },
      premium: {
        name: "Premium Package",
        indicativePrice: "₹340 - ₹410 / plate",
        description: "Complete reception package with kebabs and Dum Biryani.",
        items: [
          "Welcome Drink: Royal Rooh Afza & Nimbu Pani",
          "Starters: Murgh Seekh Kebab & Paneer Tikka",
          "Breads: Butter Naan, Garlic Kulcha, Roomali Roti",
          "Mains: Butter Chicken, Paneer Lababdar, Veg Kolhapuri",
          "Dal Makhani & Chicken Dum Biryani",
          "Desserts: Shahi Tukda & Rasgulla"
        ]
      },
      lavish: {
        name: "Lavish Package",
        indicativePrice: "₹490 - ₹590 / plate",
        description: "Grand Royal Feast with Mutton Rogan Josh and live desserts.",
        items: [
          "Welcome Drinks & Mocktails: 3 Varieties",
          "Starters: Mutton Galouti Kebab, Tandoori Fish, Paneer Malai Tikka",
          "Mains: Gosht Rogan Josh, Murgh Musallam, Kaju Paneer",
          "Lucknowi Dum Biryani & Dal Bukhara",
          "Desserts: Hot Jalebi with Rabdi, Malai Kulfi, Matka Phirni"
        ]
      }
    },
    reviews: [
      {
        id: "rev-25",
        author: "Yogesh Bhave",
        rating: 5,
        date: "19 Aug 2026",
        eventType: "Wedding Reception",
        comment: "Excellent service and food quality. The staff was attentive and handled 450 guests without any delay."
      }
    ]
  },

  // ================= ADDITIONAL MUMBAI (3 listings) =================
  {
    id: "mum-09",
    name: "Kailash Parbat Event Caterers",
    city: "Mumbai",
    area: "Colaba",
    fullAddress: "1st Floor, Colaba Causeway, Near Regal Cinema, Colaba, Mumbai - 400005",
    phone: "+91 98203 15890",
    rating: 4.8,
    reviewCount: 165,
    foodType: "Pure Veg",
    startingPrice: 210,
    isVerified: true,
    waiterAvailable: true,
    perWaiterCost: 700,
    imageUrl: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=80",
    specialities: ["Sindhi Specialties", "Live Chaat Counter", "North Indian"],
    description: "Famous for authentic Sindhi delicacies, royal street chaat counters, and elaborate North Indian vegetarian wedding spreads in South Mumbai.",
    packages: {
      normal: {
        name: "Normal Package",
        indicativePrice: "₹210 - ₹250 / plate",
        description: "Classic North Indian & Sindhi vegetarian buffet.",
        items: [
          "Phulka & Masala Puri",
          "Paneer Butter Masala",
          "Sindhi Sai Bhaji / Chana Masala",
          "Yellow Dal Fry & Bhuga Chawal",
          "Boondi Raita & Masala Papad",
          "Gulab Jamun (2 pcs)"
        ]
      },
      premium: {
        name: "Premium Package",
        indicativePrice: "₹320 - ₹380 / plate",
        description: "Popular wedding package with live chaat and starter counter.",
        items: [
          "Welcome Drink: Kesar Thandai & Jaljeera",
          "Live Chaat: Sev Puri, Pani Puri & Dahi Vada",
          "Starters: Veg Crispy & Paneer Tikka",
          "Butter Naan & Laccha Paratha",
          "Paneer Lababdar & Veg Kolhapuri",
          "Dal Makhani & Veg Dum Biryani",
          "Desserts: Sindhi Koki, Malai Kulfi & Jalebi with Rabdi"
        ]
      },
      lavish: {
        name: "Lavish Package",
        indicativePrice: "₹480 - ₹580 / plate",
        description: "Royal South Mumbai feast with 4 starters, live pasta, and 3 sweets.",
        items: [
          "Welcome Drinks & Mocktails: 3 Varieties",
          "Live Counters: Delhi Chaat, Pasta Station, Pav Bhaji",
          "Starters: Paneer Angara, Hara Bhara Kebab, Cheese Corn Balls",
          "Mains: Kaju Paneer Curry, Sindhi Kadhi, Dum Aloo Kashmiri",
          "Dal Bukhara & Dry Fruit Pulao",
          "Desserts: Angoori Rasmalai, Moong Dal Halwa, Rabdi Falooda"
        ]
      }
    },
    reviews: [
      {
        id: "rev-26",
        author: "Karan Lalwani",
        rating: 5,
        date: "24 Aug 2026",
        eventType: "Engagement Ceremony",
        comment: "The Sindhi Kadhi and live chaat counter were outstanding. Professional waitstaff and prompt service."
      }
    ]
  },
  {
    id: "mum-10",
    name: "Malad Feast & Tandoor Caterers",
    city: "Mumbai",
    area: "Malad West",
    fullAddress: "Shop 5, Link Road, Near Inorbit Mall, Malad West, Mumbai - 400064",
    phone: "+91 98208 77654",
    rating: 4.6,
    reviewCount: 92,
    foodType: "Veg + Non-Veg",
    startingPrice: 220,
    isVerified: true,
    waiterAvailable: true,
    perWaiterCost: 650,
    imageUrl: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=900&q=80",
    specialities: ["Tandoori Platters", "Mughlai Curries", "Outdoor Buffets"],
    description: "Specialized in outdoor party catering, charcoal tandoor appetizers, and aromatic chicken and mutton gravies across Malad and Kandivali.",
    packages: {
      normal: {
        name: "Normal Package",
        indicativePrice: "₹220 - ₹260 / plate",
        description: "Standard feast with chicken and paneer curries.",
        items: [
          "Tandoori Roti & Naan",
          "Chicken Masala Gravy",
          "Paneer Kadhai",
          "Dal Tadka & Steamed Jeera Rice",
          "Salad & Boondi Raita",
          "Gulab Jamun"
        ]
      },
      premium: {
        name: "Premium Package",
        indicativePrice: "₹340 - ₹410 / plate",
        description: "High-demand party menu with live charcoal kebabs.",
        items: [
          "Starters: Murgh Seekh Kebab & Paneer Hariyali Tikka",
          "Breads: Butter Naan & Laccha Paratha",
          "Mains: Butter Chicken & Paneer Tikka Masala",
          "Chicken Dum Biryani & Veg Pulao",
          "Dal Makhani",
          "Desserts: Shahi Tukda & Rasgulla"
        ]
      },
      lavish: {
        name: "Lavish Package",
        indicativePrice: "₹490 - ₹590 / plate",
        description: "Grand lawn buffet with live tandoor and mutton specialties.",
        items: [
          "Welcome Drinks: Virgin Mojito & Fruit Punch",
          "Live Tandoor: Mutton Boti Kebab, Chicken Tikka, Paneer Achari",
          "Mains: Mutton Rogan Josh, Chicken Handi, Paneer Pasanda",
          "Awadhi Mutton Biryani & Veg Biryani",
          "Dal Sultani & Assorted Breads",
          "Desserts: Live Jalebi with Rabdi, Matka Kulfi"
        ]
      }
    },
    reviews: [
      {
        id: "rev-27",
        author: "Rakesh Sharma",
        rating: 4.8,
        date: "09 Jul 2026",
        eventType: "Birthday Party",
        comment: "Kebabs were served smoking hot right off the tandoor. Everyone loved the Butter Chicken."
      }
    ]
  },
  {
    id: "mum-11",
    name: "Matunga South Indian Caterers",
    city: "Mumbai",
    area: "Matunga East",
    fullAddress: "Bhandarkar Road, Near King's Circle, Matunga East, Mumbai - 400019",
    phone: "+91 98195 44231",
    rating: 4.9,
    reviewCount: 180,
    foodType: "Pure Veg",
    startingPrice: 170,
    isVerified: true,
    waiterAvailable: true,
    perWaiterCost: 600,
    imageUrl: "https://images.unsplash.com/photo-1617692855027-33b14f061079?auto=format&fit=crop&w=900&q=80",
    specialities: ["Authentic Brahmin Tamil Feasts", "Filter Coffee Stalls", "Banana Leaf Service"],
    description: "Matunga's revered traditional caterers delivering authentic Tamil Brahmin wedding feasts, banana leaf satvik meals, and live filter coffee.",
    packages: {
      normal: {
        name: "Normal Package",
        indicativePrice: "₹170 - ₹210 / plate",
        description: "Homestyle South Indian meals with sambar, rasam, and sides.",
        items: [
          "Poori & Potato Masala",
          "Vegetable Korma",
          "Traditional Sambar & Tomato Rasam",
          "Steamed Sona Masoori Rice & Curd Rice",
          "Appalam & Lemon Pickle",
          "Semiya Payasam"
        ]
      },
      premium: {
        name: "Premium Package",
        indicativePrice: "₹270 - ₹330 / plate",
        description: "Festive feast with traditional appetizers and filter coffee.",
        items: [
          "Welcome Drink: Panakam / Neer Mor (Spiced Buttermilk)",
          "Starters: Medu Vada & Mysore Bonda with Chutneys",
          "Poori, Chapati & Avial",
          "Paneer Butter Masala & Poriyal",
          "Bisibelebath with Boondi & Ghee Rice",
          "Desserts: Palada Payasam, Mysore Pak & Filter Coffee Counter"
        ]
      },
      lavish: {
        name: "Lavish Package",
        indicativePrice: "₹430 - ₹520 / plate",
        description: "Grand traditional Kalyana Sappadu with 21 items served on fresh banana leaf.",
        items: [
          "Traditional Banana Leaf Sappadu: Appalam, Pickle, Paruppu with Ghee",
          "Curries: Sambar, Milagu Rasam, Avial, Cabbage Poriyal, Mor Kuzhambu",
          "Tiffin Starters: Mini Idli with Podi, Vazhaipoo Vada",
          "Rices: White Rice, Bisi Bele Bath, Curd Rice",
          "Desserts: Akkaravadisal, Badam Halwa, Paal Payasam, Kumbakonam Degree Coffee"
        ]
      }
    },
    reviews: [
      {
        id: "rev-28",
        author: "Lakshmi Narayanan",
        rating: 5,
        date: "14 Sep 2026",
        eventType: "Shashtiapthapoorthi (60th Birthday)",
        comment: "Flawless authentic Kalyana Sappadu served on banana leaves. Filter coffee was heavenly."
      }
    ]
  },

  // ================= ADDITIONAL NAVI MUMBAI (3 listings) =================
  {
    id: "nm-09",
    name: "Khandesh & Marathwada Swad Caterers",
    city: "Navi Mumbai",
    area: "Panvel",
    fullAddress: "Opposite Shivaji Chowk, Old Panvel, Navi Mumbai - 410206",
    phone: "+91 98206 90812",
    rating: 4.6,
    reviewCount: 88,
    foodType: "Veg + Non-Veg",
    startingPrice: 195,
    isVerified: true,
    waiterAvailable: true,
    perWaiterCost: 550,
    imageUrl: "https://images.unsplash.com/photo-1625398407796-82650a8c135f?auto=format&fit=crop&w=900&q=80",
    specialities: ["Khandeshi Shev Bhaji", "Gavran Chicken", "Traditional Bhakri"],
    description: "Authentic spicy Khandeshi and Marathwada rustic feasts popular in Old Panvel and New Panvel for hearty family gatherings.",
    packages: {
      normal: {
        name: "Normal Package",
        indicativePrice: "₹195 - ₹235 / plate",
        description: "Homestyle Khandeshi meal with bhakri and dal.",
        items: [
          "Jowar & Bajra Bhakri with Chapati",
          "Khandeshi Shev Bhaji (Spicy Kala Masala)",
          "Varan Bhat with Pure Ghee",
          "Thecha (Green Chilli Chutney) & Onion Salad",
          "Roasted Papad & Pickle",
          "Gulab Jamun (2 pcs)"
        ]
      },
      premium: {
        name: "Premium Package",
        indicativePrice: "₹310 - ₹370 / plate",
        description: "Spicy Gavran chicken and vegetarian combo feast.",
        items: [
          "Starters: Kothimbir Vadi & Chicken Sukka",
          "Bhakri & Tandoori Roti",
          "Gavran Chicken Rassa (Spicy thin gravy)",
          "Paneer Kolhapuri & Shev Bhaji",
          "Indrayani Rice & Dal Tadka",
          "Desserts: Shrikhand & Hot Jalebi"
        ]
      },
      lavish: {
        name: "Lavish Package",
        indicativePrice: "₹460 - ₹550 / plate",
        description: "Grand rural feast with Mutton Sukka, Chicken Handi, and Puran Poli.",
        items: [
          "Welcome Drink: Spiced Buttermilk (Taak) & Solkadhi",
          "Starters: Mutton Sukka, Chicken Koliwada, Paneer Tikka",
          "Breads: Hot Puran Poli, Jowar Bhakri, Puri",
          "Mains: Gavran Mutton Rassa, Butter Chicken, Kaju Curry",
          "Varan Bhat, Katachi Amti & Jeera Rice",
          "Desserts: Ukadiche Modak, Basundi, Kulfi"
        ]
      }
    },
    reviews: [
      {
        id: "rev-29",
        author: "Dnyaneshwar Patil",
        rating: 4.8,
        date: "11 Aug 2026",
        eventType: "Family Get-Together",
        comment: "Real village style taste! The Kala Masala Shev Bhaji and Gavran Chicken were delicious."
      }
    ]
  },
  {
    id: "nm-10",
    name: "Ghansoli Green Leaf Caterers",
    city: "Navi Mumbai",
    area: "Ghansoli",
    fullAddress: "Sector 5, Near Reliance Corporate Park, Ghansoli, Navi Mumbai - 400701",
    phone: "+91 97698 22340",
    rating: 4.5,
    reviewCount: 64,
    foodType: "Pure Veg",
    startingPrice: 160,
    isVerified: true,
    waiterAvailable: false,
    perWaiterCost: null,
    imageUrl: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=900&q=80",
    specialities: ["Budget Box Buffets", "North Indian Thali", "Corporate Office Luncheons"],
    description: "Reliable, economical pure veg catering company serving tech offices, team parties, and society poojas across Ghansoli and Mahape.",
    packages: {
      normal: {
        name: "Normal Package",
        indicativePrice: "₹160 - ₹195 / plate",
        description: "Budget vegetarian meal suitable for office events and poojas.",
        items: [
          "Phulka & Puri",
          "Chole Masala & Aloo Jeera",
          "Dal Fry & Steamed Basmati Rice",
          "Salad, Papad & Pickle",
          "Suji Halwa"
        ]
      },
      premium: {
        name: "Premium Package",
        indicativePrice: "₹260 - ₹310 / plate",
        description: "Paneer specialty party buffet with Chinese starter.",
        items: [
          "Starter: Veg Spring Roll & Hara Bhara Kebab",
          "Puri, Phulka & Naan",
          "Paneer Butter Masala & Veg Kolhapuri",
          "Dal Tadka & Veg Pulao with Boondi Raita",
          "Desserts: Gulab Jamun & Ice Cream"
        ]
      },
      lavish: {
        name: "Lavish Package",
        indicativePrice: "₹390 - ₹470 / plate",
        description: "Deluxe office banquet with live chaat and multi-cuisine mains.",
        items: [
          "Welcome Drink: Blue Lagoon & Fresh Lime Soda",
          "Live Chaat: Sev Puri & Pani Puri",
          "Starters: Paneer 65 & Crispy Corn",
          "Mains: Kaju Paneer Makhani, Veg Handi, Dal Makhani",
          "Kashmiri Pulao & Assorted Breads",
          "Desserts: Angoori Rasmalai & Hot Chocolate Brownie"
        ]
      }
    },
    reviews: [
      {
        id: "rev-30",
        author: "Amitabh Sen",
        rating: 4.5,
        date: "19 Jul 2026",
        eventType: "Team Milestone Lunch",
        comment: "Delivered right on time at Ghansoli MIDC. The food was hot and very well packed."
      }
    ]
  },
  {
    id: "nm-11",
    name: "Ulwe Coastal & Tandoor Caterers",
    city: "Navi Mumbai",
    area: "Ulwe",
    fullAddress: "Sector 19, Near Bamandongri Railway Station, Ulwe, Navi Mumbai - 410206",
    phone: "+91 98211 44567",
    rating: 4.7,
    reviewCount: 79,
    foodType: "Non-Veg",
    startingPrice: 240,
    isVerified: true,
    waiterAvailable: true,
    perWaiterCost: 650,
    imageUrl: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=900&q=80",
    specialities: ["Agri Koli Seafood", "Tandoori Surmai", "Spicy Crab Masala"],
    description: "Leading coastal and non-veg caterers in Ulwe, famous for fresh seafood platters, spicy chicken degs, and Agri-Koli culinary traditions.",
    packages: {
      normal: {
        name: "Normal Package",
        indicativePrice: "₹240 - ₹280 / plate",
        description: "Agri chicken curry feast with hot bhakri.",
        items: [
          "Tandalachi Bhakri & Chapati",
          "Agri Chicken Sukka",
          "Chicken Rassa (Spicy gravy)",
          "Indrayani Steamed Rice & Solkadhi",
          "Onion Lemon Salad & Papad",
          "Gulab Jamun"
        ]
      },
      premium: {
        name: "Premium Package",
        indicativePrice: "₹360 - ₹430 / plate",
        description: "Seafood and chicken starter buffet with Surmai fish curry.",
        items: [
          "Starters: Prawns Koliwada & Chicken Sukka",
          "Bhakri, Vade & Chapati",
          "Surmai Fish Curry & Chicken Masala",
          "Steamed Basmati Rice & Solkadhi",
          "Desserts: Ukadiche Modak with Ghee"
        ]
      },
      lavish: {
        name: "Lavish Package",
        indicativePrice: "₹510 - ₹620 / plate",
        description: "Grand coastal feast with Crab Masala, Pomfret Fry, and Mutton Sukka.",
        items: [
          "Welcome Drink: Solkadhi & Kokum Cooler",
          "Starters: Pomfret Rava Fry, Prawns Butter Garlic, Mutton Sukka",
          "Mains: Crab Masala, Agri Chicken Handi, Mutton Gravy",
          "Rice Bhakri, Kombdi Vade & Ghee Rice",
          "Desserts: Shahi Modak Platter & Kharvas"
        ]
      }
    },
    reviews: [
      {
        id: "rev-31",
        author: "Siddhesh Gharat",
        rating: 5,
        date: "03 Aug 2026",
        eventType: "Housewarming Celebration",
        comment: "Seafood was super fresh! The Surmai Rava Fry was the highlight of the event."
      }
    ]
  },

  // ================= ADDITIONAL THANE (3 listings) =================
  {
    id: "th-09",
    name: "Kalyan Heritage Caterers",
    city: "Thane",
    area: "Kalyan West",
    fullAddress: "Shivaji Chowk, M.G. Road, Kalyan West, Thane District - 421301",
    phone: "+91 98193 88102",
    rating: 4.7,
    reviewCount: 114,
    foodType: "Pure Veg",
    startingPrice: 170,
    isVerified: true,
    waiterAvailable: true,
    perWaiterCost: 550,
    imageUrl: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=900&q=80",
    specialities: ["Traditional Wedding Buffets", "Gujarati & Marwari Rasoi", "Live Jalebi Stalls"],
    description: "Kalyan's trusted traditional catering team handling wedding halls, community poojas, and birthday parties with authentic vegetarian recipes.",
    packages: {
      normal: {
        name: "Normal Package",
        indicativePrice: "₹170 - ₹210 / plate",
        description: "Homestyle vegetarian feast for poojas and family lunches.",
        items: [
          "Puri & Phulka",
          "Paneer Butter Masala",
          "Mix Veg Korma",
          "Dal Fry & Jeera Rice",
          "Papad, Salad & Mango Pickle",
          "Gulab Jamun (2 pcs)"
        ]
      },
      premium: {
        name: "Premium Package",
        indicativePrice: "₹270 - ₹330 / plate",
        description: "Popular wedding package with Gujarati farsan and paneer gravy.",
        items: [
          "Farsan: Nylon Khaman Dhokla & Veg Cutlet",
          "Puri, Phulka & Naan",
          "Paneer Pasanda & Veg Kolhapuri",
          "Dal Makhani & Veg Dum Biryani with Raita",
          "Desserts: Shrikhand & Hot Jalebi with Rabdi"
        ]
      },
      lavish: {
        name: "Lavish Package",
        indicativePrice: "₹430 - ₹510 / plate",
        description: "Grand marriage banquet with live counters and 3 signature sweets.",
        items: [
          "Welcome Drinks: Mocktails & Kesar Thandai",
          "Live Counters: Chaat Station, Pav Bhaji, Pasta",
          "Starters: Paneer Tikka, Hara Bhara Kebab, Spring Rolls",
          "Mains: Kaju Curry, Paneer Lababdar, Subz Diwani Handi",
          "Dal Tadka & Kashmiri Pulao",
          "Desserts: Angoori Rasmalai, Moong Dal Halwa, Malai Kulfi"
        ]
      }
    },
    reviews: [
      {
        id: "rev-32",
        author: "Manoj Joshi",
        rating: 4.8,
        date: "28 Aug 2026",
        eventType: "Wedding Reception",
        comment: "Excellent service in Kalyan West. Guests loved the live jalebi counter and paneer pasanda."
      }
    ]
  },
  {
    id: "th-10",
    name: "Dombivli Swad Sanskruti Caterers",
    city: "Thane",
    area: "Dombivli East",
    fullAddress: "Phadke Road, Near Appa Pendse Chowk, Dombivli East, Thane District - 421201",
    phone: "+91 98207 33451",
    rating: 4.8,
    reviewCount: 140,
    foodType: "Pure Veg",
    startingPrice: 175,
    isVerified: true,
    waiterAvailable: true,
    perWaiterCost: 600,
    imageUrl: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=900&q=80",
    specialities: ["Konkanastha Brahmin Pangats", "Puran Poli & Ukadiche Modak", "Temple Prasadam"],
    description: "Famous on Phadke Road for traditional Maharashtrian pangat feasts, pure ghee puran poli, and satvik temple prasad meals.",
    packages: {
      normal: {
        name: "Normal Package",
        indicativePrice: "₹175 - ₹215 / plate",
        description: "Homestyle traditional Maharashtrian lunch.",
        items: [
          "Puri & Chapati",
          "Batata Sukhi Bhaji & Chana Masala",
          "Varan Bhat with Pure Ghee",
          "Kakdi Koshimbir & Papad",
          "Mango Pickle & Fried Mirchi",
          "Gulab Jamun (2 pcs)"
        ]
      },
      premium: {
        name: "Premium Package",
        indicativePrice: "₹280 - ₹340 / plate",
        description: "Special festive meal with unlimited Puran Poli and Shrikhand.",
        items: [
          "Welcome Drink: Kairi Panha / Kokum Sharbat",
          "Starters: Kothimbir Vadi & Aluvadi",
          "Puri, Chapati & Hot Puran Poli with Ghee",
          "Katachi Amti, Paneer Kolhapuri & Masale Bhat",
          "Mattha (Spiced Buttermilk)",
          "Desserts: Kesar Shrikhand & Ukadiche Modak"
        ]
      },
      lavish: {
        name: "Lavish Package",
        indicativePrice: "₹440 - ₹530 / plate",
        description: "Grand traditional 5-course wedding pangat meal.",
        items: [
          "Welcome Drinks: Panha, Kokum Cooler, Thandai",
          "Starters: Paneer Tikka, Kothimbir Vadi, Bhajiya Platter",
          "Breads: Puri, Chapati, Puran Poli",
          "Mains: Kaju Paneer, Bharli Vangi, Valache Birde",
          "Dal Maharani, Varan Bhat & Dry Fruit Masale Bhat",
          "Desserts: Basundi, Gulab Jamun, Mango Mastani, Modak"
        ]
      }
    },
    reviews: [
      {
        id: "rev-33",
        author: "Sunil Kulkarni",
        rating: 5,
        date: "07 Sep 2026",
        eventType: "Ganesh Festival Prasad Lunch",
        comment: "Arranged lunch for 220 guests. The Puran Poli and Katachi Amti were top notch."
      }
    ]
  },
  {
    id: "th-11",
    name: "Wagle Estate Corporate & Banquet Caterers",
    city: "Thane",
    area: "Wagle Estate",
    fullAddress: "Road No. 16, Near Passport Office, Wagle Estate, Thane West - 400604",
    phone: "+91 97695 66782",
    rating: 4.7,
    reviewCount: 102,
    foodType: "Veg + Non-Veg",
    startingPrice: 230,
    isVerified: true,
    waiterAvailable: true,
    perWaiterCost: 700,
    imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",
    specialities: ["Corporate Lunches", "Continental & Pan Asian Counters", "Tandoori Starters"],
    description: "Preferred catering partner for IT and commercial companies in Wagle Estate, specializing in seamless buffet logistics and fusion menus.",
    packages: {
      normal: {
        name: "Normal Package",
        indicativePrice: "₹230 - ₹270 / plate",
        description: "Balanced corporate luncheon with chicken & paneer mains.",
        items: [
          "Butter Naan & Laccha Paratha",
          "Chicken Kadhai & Paneer Makhani",
          "Dal Makhani & Steamed Basmati Rice",
          "Tossed Salad & Mint Raita",
          "Gulab Jamun"
        ]
      },
      premium: {
        name: "Premium Package",
        indicativePrice: "₹350 - ₹420 / plate",
        description: "Corporate gala dinner with live tandoori starters.",
        items: [
          "Starters: Murgh Malai Tikka & Paneer Hariyali Kebab",
          "Mains: Butter Chicken, Paneer Tikka Masala, Veg Jalfrezi",
          "Assorted Breads & Chicken Dum Biryani",
          "Dal Tadka & Jeera Rice",
          "Desserts: Walnut Brownie with Ice Cream & Rasmalai"
        ]
      },
      lavish: {
        name: "Lavish Package",
        indicativePrice: "₹490 - ₹590 / plate",
        description: "Luxury corporate banquet with live pasta counter and Mughlai gravies.",
        items: [
          "Welcome Drinks & Mocktails: 3 Varieties",
          "Live Pasta & Pizza Counter",
          "Starters: Mutton Seekh, Fish Amritsari, Dahi Ke Kebab",
          "Mains: Gosht Rogan Josh, Murgh Lababdar, Kaju Paneer Butter Masala",
          "Dum Gosht Biryani & Veg Awadhi Biryani",
          "Desserts: Live Jalebi with Rabdi, Tiramisu Cups, Kulfi"
        ]
      }
    },
    reviews: [
      {
        id: "rev-34",
        author: "Deepak Shinde",
        rating: 4.8,
        date: "21 Aug 2026",
        eventType: "Annual Corporate Party",
        comment: "Excellent food and great setup in Wagle Estate. The live pasta counter was a big hit with our team."
      }
    ]
  }
];
