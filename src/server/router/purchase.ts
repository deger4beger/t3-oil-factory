import { z } from "zod";
import { createProtectedRouter } from "./context";

export const purchaseRouter = createProtectedRouter()
	.query("getAll", {
		async resolve({ ctx }) {
			return await ctx.prisma.purchase.findMany({
				include: { user: { select: { name: true } } }
			});
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
	.mutation("update", {
		input: z.object({
			id: z.string().optional(),
			name: z.string().optional(),
			price: z.number().optional(),
			count: z.number().optional(),
			createdAt: z.date().optional(),
		}),
		async resolve({ input: { id, ...payload }, ctx }) {
			const purchase = await ctx.prisma.purchase.update({
				where: {
					id: id
				},
				data: payload
			});
			return purchase;
		}
	})
	.mutation("delete", {
		input: z.object({
			id: z.string()
		}),
		async resolve({ ctx, input: { id } }) {
			await ctx.prisma.purchase.delete({
				where: { id }
			})
			return null
		}
	})