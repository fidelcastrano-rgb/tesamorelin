export interface ProductVariant {
  size: string;
  price: number;
  originalPrice?: number;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  description: string;
  longDescription?: string;
  image: string;
  variants: ProductVariant[];
  tags?: string[];
  isBestSeller?: boolean;
  isBundleDeal?: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: string;
  author: string;
  date: string;
  excerpt: string;
  content: string;
  image: string;
}

export interface CartItem {
  productId: string;
  variantSize: string;
  quantity: number;
  price: number;
  name: string;
}
