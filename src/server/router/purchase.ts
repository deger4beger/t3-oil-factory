import { z } from "zod";
import { createProtectedRouter } from "./context";

export const purchaseRouter = createProtectedRouter()
	.query("getAll", {
		async resolve({ ctx }) {
			return await ctx.prisma.purchase.findMany();
		}
	})
	.mutation("create", {
		input: z.object({
			name: z.string(),
			price: z.number(),
			count: z.number(),
			createdAt: z.date(),
		}),
		async resolve({ input, ctx }) {
			const purchase = await ctx.prisma.purchase.create({
				data: {
					...input,
					userId: ctx.session.user.id
				},
			});
			return purchase;
		}
	})