import { createProtectedRouter } from "./context";

export const cabinetRouter = createProtectedRouter().query("getInfo", {
	async resolve({ ctx }) {
		const operations = await ctx.prisma.operation.findMany({
			where: {
				userId: ctx.session.user.id,
			},
		});
		return {
			purchasesCount: operations.filter(
				(operation) => operation.operation === "PURCHASE"
			).length,
			salesCount: operations.filter(
				(operation) => operation.operation === "SALE"
			).length,
		};
	},
});
