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
			date: z.date(),
		}),
		async resolve({ input, ctx }) {
			const purchase = await ctx.prisma.purchase.create({
				data: {
					name: input.name,
					price: input.price,
					count: input.count,
					createdAt: input.date,
					userId: ctx.session.user.id
				},
			});
			return purchase;
		}
	})