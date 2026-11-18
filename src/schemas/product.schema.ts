import { z } from "zod";

export const ProductSchema = z.object({

    name : z.string().min(3),
    price : z.number().positive(),
    quantity : z.number().int().min(0),
    category: z.enum(['electronics', 'clothing', 'books']),
    description : z.string().optional(),
    isActive : z.boolean().default(true)
})

export type Product = z.infer<typeof ProductSchema>;