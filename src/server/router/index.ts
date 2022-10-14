// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";
import { operationRouter } from "./operation";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("operation.", operationRouter)

// export type definition of API
export type AppRouter = typeof appRouter;
