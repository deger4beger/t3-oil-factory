import { NextPage } from "next"
import React from "react"
import PageShell from "../components/page-shell"
import UserInfo from "../features/cabinet/user-info"


const Cabinet: NextPage = () => {

	return (
		<PageShell title="Мой кабинет" isProtected>
			<UserInfo />
		</PageShell>
	)
}

export default Cabinet