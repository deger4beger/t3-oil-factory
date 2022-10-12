// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";
import { purchaseRouter } from "./purchase";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("purchase.", purchaseRouter)

// export type definition of API
export type AppRouter = typeof appRouter;
