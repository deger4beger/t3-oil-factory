import React from "react"
import { NextPage } from "next"
import GroupControl from "../components/group-control"
import PageShell from "../components/page-shell"
import Button from "../components/button"


const Purchases: NextPage = () => {

	return (
		<PageShell title="Закупки" isProtected>
			<GroupControl title="Ваши закупки">
				<Button text="+ Оформить новую закупку" style="light" />
			</GroupControl>
		</PageShell>
	)
}

export default Purchases