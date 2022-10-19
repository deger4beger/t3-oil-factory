import { createProtectedRouter } from "./context";

const operationKeys = {
	"SALE": "продажи",
	"PURCHASE": "закупки"
}

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

			const operationsByDate = (await ctx.prisma.operation.groupBy({
				by: ["createdAt", "operation"],
				_sum: {
					price: true
				}
			})).map(operations => ({
				date: operations.createdAt,
				[operationKeys[operations.operation]]: operations._sum.price
			})).reduce((acc, operations) => {
				const existed = acc.find(operation =>
					operation.date.toLocaleDateString() === operations.date.toLocaleDateString())
				if (!existed) acc.push({
					"закупки": 0,
					"продажи": 0,
					...operations
				})
				if (existed) {
					Object.assign(existed, operations)
				}
				return acc
			}, [] as any[])

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