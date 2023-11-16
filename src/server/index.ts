import { mergeRouters } from "./trpc";

import { messageRouter } from "./routers/hello";

export const appRouter = mergeRouters(messageRouter);

export type AppRouter = typeof appRouter;
