import { NextPage } from "next"
import { useSession } from "next-auth/react"
import React from "react"
import PageShell from "../components/page-shell"


const Purchases: NextPage = () => {

	const { data } = useSession()

	return (
		<PageShell title="Закупки" isProtected>
			Страница закупок сырья
		</PageShell>
	)
}

export default Purchases