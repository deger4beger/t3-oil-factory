import { NextPage } from "next"
import React from "react"
import PageShell from "../components/page-shell"


const Purchases: NextPage = () => {
	return (
		<PageShell title="Закупки" isProtected>
			Страница закупок сырья
		</PageShell>
	)
}

export default Purchases