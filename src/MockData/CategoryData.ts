export interface Category {
  id: number;
  name: string;
  slug: string;
  icon: string;
  description?: string;
  image: string;
}

export const categories: Category[] = [
  { 
    id: 1, 
    name: 'Fruits & Vegetables', 
    slug: 'fruits-vegetables', 
    icon: '🥬',
    description: 'Fresh fruits and vegetables delivered daily',
    image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=300&h=300&fit=crop'
  },
  { 
    id: 2, 
    name: 'Dairy, Bread & Eggs', 
    slug: 'dairy-bread-eggs', 
    icon: '🥛',
    description: 'Fresh dairy products, bread and eggs',
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=300&h=300&fit=crop'
  },
  { 
    id: 3, 
    name: 'Atta, Rice & Dal', 
    slug: 'atta-rice-dal', 
    icon: '🌾',
    description: 'Staples for your kitchen',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&h=300&fit=crop'
  },
  { 
    id: 4, 
    name: 'Oil, Ghee & Masala', 
    slug: 'oil-ghee-masala', 
    icon: '🫒',
    description: 'Cooking essentials',
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=300&h=300&fit=crop'
  },
  { 
    id: 5, 
    name: 'Snacks & Beverages', 
    slug: 'snacks-beverages', 
    icon: '🍿',
    description: 'Chips, drinks and more',
    image: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=300&h=300&fit=crop'
  },
  { 
    id: 6, 
    name: 'Masala & Spices', 
    slug: 'masala-spices', 
    icon: '🌶️',
    description: 'Authentic Indian spices',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=300&h=300&fit=crop'
  },
  { 
    id: 7, 
    name: 'Cleaning & Household', 
    slug: 'cleaning-household', 
    icon: '🧹',
    description: 'Home cleaning essentials',
    image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=300&h=300&fit=crop'
  },
  { 
    id: 8, 
    name: 'Personal Care', 
    slug: 'personal-care', 
    icon: '🧴',
    description: 'Beauty and personal care products',
    image: 'https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?w=300&h=300&fit=crop'
  },
];

export const getCategoryById = (id: number): Category | undefined => {
  return categories.find(category => category.id === id);
};

export const getCategoryBySlug = (slug: string): Category | undefined => {
  return categories.find(category => category.slug === slug);
};
