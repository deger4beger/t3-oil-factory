import { z } from "zod";
import { createProtectedRouter } from "./context";

const operationKeys = {
	"SALE": "продажи",
	"PURCHASE": "закупки"
}

export const statisticsRouter = createProtectedRouter()
	.query("getTotal", {
		input: z.object({
			from: z.date().optional(),
			to: z.date().optional(),
		}),
		async resolve({ ctx, input }) {
			const operations = await ctx.prisma.operation.findMany({
				where: {
					createdAt: {
						gte: input.from,
						lte: input.to
					}
				}
			})
			const purchases = operations.filter(operation =>
				operation.operation === "PURCHASE")
			const sales = operations.filter(operation =>
				operation.operation === "SALE")
			const purchasesPrice = purchases.reduce((acc, purchase) =>
				acc += purchase.price
			, 0)
			const salesPrice = sales.reduce((acc, sale) =>
				acc += sale.price
			, 0)

			const operationsByDate = (await ctx.prisma.operation.groupBy({
				where: {
					createdAt: {
						gte: input.from,
						lte: input.to
					}
				},
				orderBy: {
					createdAt: "asc"
				},
				by: ["createdAt", "operation"],
				_sum: {
					price: true
				}
			})).map(operations => ({
				date: operations.createdAt.toLocaleDateString(),
				[operationKeys[operations.operation]]: operations._sum.price
			})).reduce((acc, operations) => {
				const existed = acc.find(operation =>
					operation.date === operations.date)
				if (!existed) acc.push({
					"закупки": 0,
					"продажи": 0,
					...operations
				})
				if (existed) {
					Object.assign(existed, operations)
				}
				return acc
			}, [] as {
				date: string
				"закупки": number
				"продажи": number
			}[])

			return {
				purchasesCount: purchases.length,
				purchasesPrice,
				salesCount: sales.length,
				salesPrice,
				outcome: salesPrice - purchasesPrice,
				operationsByDate
			}
		}
	})