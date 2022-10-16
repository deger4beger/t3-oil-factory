import { createProtectedRouter } from "./context";


export const statisticsRouter = createProtectedRouter()
	.query("getTotal", {
		async resolve({ ctx }) {
			return "hello from stats"
		}
	})