import { NextPage } from "next"
import React from "react"
import PageShell from "../components/page-shell"


const Sales: NextPage = () => {
	return (
		<PageShell title="Продажи" isProtected>
			Sales
		</PageShell>
	)
}

export default Sales