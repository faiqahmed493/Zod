import { ProductSchema } from "./schemas/product.schema";

const productData = {
  name: "Gaming Laptop",
  price: 150000,
  quantity: 5,
  category: "electronics",
  description: "High-performance laptop"
};

// TODO 1: Validate productData using safeParse()
const result = ProductSchema.safeParse(productData);

if(result.success){
  console.log("Validation successful:", result.data);
}else{
  console.log("Validation successful:", result.data);
}