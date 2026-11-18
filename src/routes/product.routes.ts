import type { FastifyPluginAsync } from "fastify";
import { z } from "zod";

import { ProductSchema } from "../schemas/product.schema";

import {
  createProduct,
  getAllProducts,
  getProductById,
} from "../services/product.service";

const ProductParamsSchema = z.object({
  id: z.coerce.number().int().positive(),
});

const productRoutes: FastifyPluginAsync = async (app) => {

  app.post("/products", async (request, reply) => {

    const result = ProductSchema.safeParse(request.body);


    if (!result.success) {
      return reply.code(400).send({
        success: false,
        message: "Product validation failed",
        errors: result.error.issues,
      });
    }

    const product = createProduct(result.data);

    return reply.code(201).send({
      success: true,
      message: "Product created successfully",
      data: product,
    });
  });

  
  app.get("/products", async () => {

    const products = getAllProducts();

    return {
      success: true,
      count: products.length,
      data: products,
    };
  });

  app.get("/products/:id", async (request, reply) => {

    const result = ProductParamsSchema.safeParse(request.params);

    if (!result.success) {
      return reply.code(400).send({
        success: false,
        message: "Invalid product ID",
        errors: result.error.issues,
      });
    }

    const product = getProductById(result.data.id);

    if (!product) {
      return reply.code(404).send({
        success: false,
        message: "Product not found",
      });
    }

    return {
      success: true,
      data: product,
    };
  });

};

export default productRoutes;