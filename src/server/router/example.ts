import { createRouter } from "./context";
import { z } from "zod";

export const exampleRouter = createRouter()
  .query("hello", {
    input: z
      .object({
        text: z.string().nullish(),
      })
      .nullish(),
    resolve({ input }) {
      return {
        greeting: `Hello ${input?.text ?? "world"}`,
      };
    },
  })
  .query("test", {
    input: z.object({
      someData: z.string()
    }),
    async resolve({ input, ctx }) {
      const someData = await ctx.prisma.example.findFirst()
      return {
        ...someData,
        customKey: input
      }
    }
  })
  .query("getAll", {
    async resolve({ ctx }) {
      return await ctx.prisma.example.findMany();
    },
  });
