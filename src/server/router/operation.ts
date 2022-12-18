import { z } from "zod";
import { createProtectedRouter } from "./context";

export const operationRouter = createProtectedRouter()
	.query("getAll", {
		input: z.object({
			page: z.number(),
			take: z.number(),
			name: z.string().optional(),
		}),
		async resolve({ ctx, input }) {
			const current = await ctx.prisma.operation.findMany({
				where: { name: { contains: input.name ?? "", mode: "insensitive" } },
				include: { user: { select: { name: true } } },
				skip: input.take * (input.page - 1),
				take: input.take,
			});
			const totalCount = await ctx.prisma.operation.count({
				where: { name: { contains: input.name ?? "", mode: "insensitive" } },
			});
			const totalPages = totalCount / input.take;
			const uniqueNames = await ctx.prisma.operation.findMany({
				select: { name: true, operation: true },
				distinct: ["name"],
			});
			return {
				operations: current,
				totalCount,
				totalPages,
				uniqueNames,
			};
		},
	})
	.mutation("create", {
		input: z.object({
			name: z.string(),
			price: z.number(),
			count: z.number(),
			createdAt: z.date(),
			operation: z.enum(["PURCHASE", "SALE"]),
		}),
		async resolve({ input, ctx }) {
			const purchase = await ctx.prisma.operation.create({
				data: {
					...input,
					userId: ctx.session.user.id,
				},
			});
			return purchase;
		},
	})
	.mutation("update", {
		input: z.object({
			id: z.string().optional(),
			name: z.string().optional(),
			price: z.number().optional(),
			count: z.number().optional(),
			opreation: z.enum(["PURCHASE", "SALE"]).optional(),
			createdAt: z.date().optional(),
		}),
		async resolve({ input: { id, ...payload }, ctx }) {
			const purchase = await ctx.prisma.operation.update({
				where: {
					id: id,
				},
				data: payload,
			});
			return purchase;
		},
	})
	.mutation("delete", {
		input: z.object({
			id: z.string(),
		}),
		async resolve({ ctx, input: { id } }) {
			await ctx.prisma.operation.delete({
				where: { id },
			});
			return null;
		},
	});
