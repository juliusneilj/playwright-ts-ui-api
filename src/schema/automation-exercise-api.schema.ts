import { z } from 'zod';

const UserTypeSchema = z.object({
  usertype: z.string(), // e.g. "Women" | "Men" | "Kids"
});

const CategorySchema = z.object({
  usertype: UserTypeSchema,
  category: z.string(), // e.g. "Tops", "Tshirts", "Dress", "Jeans", "Saree"
});

const ProductSchema = z.object({
  id: z.number(),
  name: z.string(),
  price: z.string().regex(/Rs\.\s?\d+$/, 'Expected format "Rs. <amount>"'),
  brand: z.string(),
  category: CategorySchema,
});

export const ProductsResponseSchema = z.object({
  responseCode: z.number(),
  products: z.array(ProductSchema),
});

export type Product = z.infer<typeof ProductSchema>; // Represents a single product object
export type ProductsResponse = z.infer<typeof ProductsResponseSchema>; // Represents the entire response structure for the products list