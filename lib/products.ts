export * from './products-cars';
export * from './products-bicycles';

import { cars } from './products-cars';
import { bicycles } from './products-bicycles';

export const allProducts = [...cars, ...bicycles];

export function getProductById(id: string) {
  return allProducts.find(p => p.id === id);
}

export function getProductsByCategory(category: string) {
  return allProducts.filter(p => p.category === category);
}

export function getProductsByType(type: string) {
  return allProducts.filter(p => p.type === type);
}

export function getProductsByBrand(brand: string) {
  return allProducts.filter(p => p.brand === brand);
}
