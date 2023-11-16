// import prisma from "~/config/Prisma";
// import z from "zod";

import { router, publicProcedure } from "../trpc";

export const messageRouter = router({
  getHello: publicProcedure.query(() => {
    return "Hello madlang people mabuhay! tRPC API IS READY...";
  }),
});
