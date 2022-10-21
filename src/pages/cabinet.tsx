import { NextPage } from "next"
import PageShell from "../components/page-shell"
import UserInfo from "../features/cabinet/user-info"
import { trpc } from "../utils/trpc"


const Cabinet: NextPage = () => {

	const { data } = trpc.useQuery(["cabinet.getInfo"])

	console.log(data)

	return (
		<PageShell title="Мой кабинет" isProtected>
			<UserInfo />
		</PageShell>
	)
}

export default Cabinet