import Fastify from "fastify";
import productRoutes from "./routes/product.routes";

const app = Fastify({
  logger: true,
});

app.register(productRoutes, {
  prefix: "/api",
});

const start = async () => {
  try {
    await app.listen({
      port: 3000,
      host: "0.0.0.0",
    });

    console.log("Server running at http://localhost:3000");
  } catch (error) {
    app.log.error(error);
    process.exit(1);
  }
};

start();