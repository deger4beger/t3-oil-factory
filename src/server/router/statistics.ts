import { createProtectedRouter } from "./context";


export const statisticsRouter = createProtectedRouter()
	.query("getTotal", {
		async resolve({ ctx }) {
			const operations = await ctx.prisma.operation.findMany()
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

			const operationsByDate = await ctx.prisma.operation.groupBy({
				by: ["createdAt", "operation"],
				_sum: {
					price: true
				}
			})

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