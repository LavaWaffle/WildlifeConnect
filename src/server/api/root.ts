import { exampleRouter } from "@/server/api/routers/example";
import { createTRPCRouter } from "@/server/api/trpc";
import { gptRouter } from "./routers/gpt";
import { locationRouter } from "./routers/location";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  gpt: gptRouter,
  location: locationRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
