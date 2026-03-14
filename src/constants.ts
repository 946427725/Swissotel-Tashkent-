export const HOTEL_INFO = {
  name: "Swissôtel Tashkent",
  address: "Shakhrisabz Passage 4, 100060 Tashkent, Uzbekistan",
  phone: "+998 55 515 23 32",
  email: "HC093@Accor.com",
};

export const ROOM_CATEGORIES = {
  STANDARD: "standard",
  LUX: "lux",
  ACCESSIBLE: "accessible"
} as const;

export const ROOMS = [
  // SECTION 1: NUMBER (Standard Rooms)
  {
    id: "advantage-king",
    key: "advantage_king",
    category: ROOM_CATEGORIES.STANDARD,
    size: "35 m² / 376 sq ft",
    bedding: "1 King bed",
    maxGuests: 2,
    images: [
      "https://www.ahstatic.com/photos/c093_rokga_00_p_2048x1536.jpg",
      "https://www.ahstatic.com/photos/c093_rokga_01_p_2048x1536.jpg",
      "https://www.ahstatic.com/photos/c093_rokga_02_p_2048x1536.jpg",
      "https://www.ahstatic.com/photos/c093_rokga_07_p_2048x1536.jpg"
    ],
  },
  {
    id: "advantage-twin",
    key: "advantage_twin",
    category: ROOM_CATEGORIES.STANDARD,
    size: "37 m² / 398 sq ft",
    bedding: "2 Twin beds",
    maxGuests: 2,
    images: [
      "https://www.ahstatic.com/photos/c093_rotwa_00_p_2048x1536.jpg",
      "https://www.ahstatic.com/photos/c093_rotwa_01_p_2048x1536.jpg",
      "https://www.ahstatic.com/photos/c093_rotwa_03_p_2048x1536.jpg",
      "https://www.ahstatic.com/photos/c093_rotwa_07_p_2048x1536.jpg"
    ],
  },
  {
    id: "executive-king",
    key: "executive_king",
    category: ROOM_CATEGORIES.STANDARD,
    size: "35 m² / 376 sq ft",
    bedding: "1 King bed",
    maxGuests: 2,
    images: [
      "https://www.ahstatic.com/photos/c093_rokgaef_02_p_2048x1536.jpg",
      "https://www.ahstatic.com/photos/c093_rokgaef_05_p_2048x1536.jpg",
      "https://www.ahstatic.com/photos/c093_rokgaef_07_p_2048x1536.jpg",
      "https://www.ahstatic.com/photos/c093_rokgaef_09_p_2048x1536.jpg"
    ],
  },
  {
    id: "executive-twin",
    key: "executive_twin",
    category: ROOM_CATEGORIES.STANDARD,
    size: "37 m² / 398 sq ft",
    bedding: "2 Twin beds",
    maxGuests: 3,
    images: [
      "https://www.ahstatic.com/photos/c093_rotwaef_01_p_2048x1536.jpg",
      "https://www.ahstatic.com/photos/c093_rotwaef_02_p_2048x1536.jpg",
      "https://www.ahstatic.com/photos/c093_rotwaef_03_p_2048x1536.jpg",
      "https://www.ahstatic.com/photos/c093_rotwaef_06_p_2048x1536.jpg"
    ],
  },
  {
    id: "superior-king",
    key: "superior_king",
    category: ROOM_CATEGORIES.STANDARD,
    size: "48 m² / 516 sq ft",
    bedding: "1 King bed",
    maxGuests: 2,
    images: [
      "https://www.ahstatic.com/photos/c093_rokgb_02_p_2048x1536.jpg",
      "https://www.ahstatic.com/photos/c093_rokgb_01_p_2048x1536.jpg",
      "https://www.ahstatic.com/photos/c093_rokgb_07_p_2048x1536.jpg",
      "https://www.ahstatic.com/photos/c093_rokgb_06_p_2048x1536.jpg"
    ],
  },
  {
    id: "superior-executive-king",
    key: "superior_executive_king",
    category: ROOM_CATEGORIES.STANDARD,
    size: "48 m² / 516 sq ft",
    bedding: "1 King bed",
    maxGuests: 2,
    images: [
      "https://www.ahstatic.com/photos/c093_rokgbef_00_p_2048x1536.jpg",
      "https://www.ahstatic.com/photos/c093_rokgbef_01_p_2048x1536.jpg",
      "https://www.ahstatic.com/photos/c093_rokgbef_02_p_2048x1536.jpg",
      "https://www.ahstatic.com/photos/c093_rokgbef_04_p_2048x1536.jpg"
    ],
  },
  {
    id: "vitality-room",
    key: "vitality_room",
    category: ROOM_CATEGORIES.STANDARD,
    size: "50 m² / 538 sq ft",
    bedding: "1 King bed",
    maxGuests: 2,
    images: [
      "https://www.ahstatic.com/photos/c093_roalb_00_p_2048x1536.jpg",
      "https://www.ahstatic.com/photos/c093_roalb_01_p_2048x1536.jpg",
      "https://www.ahstatic.com/photos/c093_roalb_03_p_2048x1536.jpg",
      "https://www.ahstatic.com/photos/c093_roalb_06_p_2048x1536.jpg"
    ],
  },
  // SECTION 2: LUX (Luxury Suites)
  {
    id: "junior-suite",
    key: "junior_suite",
    category: ROOM_CATEGORIES.LUX,
    size: "90 m² / 968 sq ft",
    bedding: "1 King bed",
    maxGuests: 2,
    images: [
      "https://www.ahstatic.com/photos/c093_roskd_00_p_2048x1536.jpg",
      "https://www.ahstatic.com/photos/c093_roskd_01_p_2048x1536.jpg",
      "https://www.ahstatic.com/photos/c093_roskd_02_p_2048x1536.jpg",
      "https://www.ahstatic.com/photos/c093_roskd_03_p_2048x1536.jpg",
      "https://www.ahstatic.com/photos/c093_roskd_05_p_2048x1536.jpg"
    ],
  },
  {
    id: "executive-suite",
    key: "executive_suite",
    category: ROOM_CATEGORIES.LUX,
    size: "87 m² / 936 sq ft",
    bedding: "1 King bed",
    maxGuests: 2,
    images: [
      "https://www.ahstatic.com/photos/c093_roska_00_p_2048x1536.jpg",
      "https://www.ahstatic.com/photos/c093_roska_01_p_2048x1536.jpg",
      "https://www.ahstatic.com/photos/c093_roska_02_p_2048x1536.jpg",
      "https://www.ahstatic.com/photos/c093_roska_04_p_2048x1536.jpg",
      "https://www.ahstatic.com/photos/c093_roska_05_p_2048x1536.jpg"
    ],
  },
  {
    id: "vitality-executive-junior-suite",
    key: "vitality_executive_junior_suite",
    category: ROOM_CATEGORIES.LUX,
    size: "87 m² / 936 sq ft",
    bedding: "1 King bed",
    maxGuests: 2,
    images: [
      "https://www.ahstatic.com/photos/c093_roskda_00_p_2048x1536.jpg",
      "https://www.ahstatic.com/photos/c093_roskda_01_p_2048x1536.jpg",
      "https://www.ahstatic.com/photos/c093_roskda_02_p_2048x1536.jpg",
      "https://www.ahstatic.com/photos/c093_roskda_03_p_2048x1536.jpg",
      "https://www.ahstatic.com/photos/c093_roskda_06_p_2048x1536.jpg"
    ],
  },
  // SECTION 3: AVAILABLE ACCOMMODATION
  {
    id: "advantage-king-accessible",
    key: "advantage_king_accessible",
    category: ROOM_CATEGORIES.ACCESSIBLE,
    size: "50 m² / 538 sq ft",
    bedding: "1 King bed",
    maxGuests: 2,
    images: [
      "https://www.ahstatic.com/photos/c093_rokgah_00_p_2048x1536.jpg",
      "https://www.ahstatic.com/photos/c093_rokgah_01_p_2048x1536.jpg",
      "https://www.ahstatic.com/photos/c093_roalb_03_p_2048x1536.jpg",
      "https://www.ahstatic.com/photos/c093_rokgah_06_p_2048x1536.jpg"
    ],
  },
];

export const DINING = [
  {
    key: "saffron",
    image: "https://i.postimg.cc/1zS8ntg0/0b689154-bcf7-4986-ae8e-5ed9a4f01e7a.jpg",
  },
  {
    key: "silk",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    key: "spa",
    image: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1200&q=80",
  },
];

export const SPA_FEATURES_KEYS = [
  "pool",
  "hammam",
  "fitness",
  "vitality"
];
