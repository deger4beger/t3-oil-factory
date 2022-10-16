// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";
import { operationRouter } from "./operation";
import { statisticsRouter } from "./statistics";

export const appRouter = createRouter()
  .transformer(superjson)
    .merge("operation.", operationRouter)
    .merge("statistics.", statisticsRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
