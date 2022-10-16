import { createProtectedRouter } from "./context";


export const cabinetRouter = createProtectedRouter()
	.query("getInfo", {
		async resolve({ ctx }) {
			return "hello from cabinet"
		}
	})