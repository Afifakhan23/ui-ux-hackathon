export interface Product {
    _id: string;
    name: string;
    imagePath: string;
    price: number;
    description: string;
    discountPercentage?: number;
    isFeaturedProduct?: boolean;
    stockLevel?: number;
    category?: string;
  }
  