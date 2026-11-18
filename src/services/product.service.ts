import type { Product } from "../schemas/product.schema";

export interface ProductRecord extends Product {
  id: number;
}

const products: ProductRecord[] = [];

let nextId = 1;

export const createProduct = (data: Product): ProductRecord => {
  const newProduct: ProductRecord = {
    id: nextId++,
    ...data,
  };

  products.push(newProduct);

  return newProduct;
};

export const getAllProducts = (): ProductRecord[] => {
  return products;
};


export const getProductById = (id: number): ProductRecord | undefined => {
  return products.find((product) => product.id === id);
};