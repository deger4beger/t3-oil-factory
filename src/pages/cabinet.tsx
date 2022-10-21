import { NextPage } from "next"
import PageShell from "../components/page-shell"
import UserInfo from "../features/cabinet/user-info"
import UserStats from "../features/cabinet/user-stats"
import { trpc } from "../utils/trpc"


const Cabinet: NextPage = () => {

	const { data } = trpc.useQuery(["cabinet.getInfo"])

	return (
		<PageShell title="Мой кабинет" isProtected>
			<UserInfo />
			<UserStats { ...data } />
		</PageShell>
	)
}

export default Cabinet