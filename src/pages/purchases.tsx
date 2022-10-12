import React, { useState } from "react"
import { NextPage } from "next"
import GroupControl from "../components/group-control"
import PageShell from "../components/page-shell"
import Button from "../components/button"
import CreateNewPurchase from "../features/purchases/create-new"
import ViewAll from "../features/purchases/view-all"


const Purchases: NextPage = () => {

	const [isCreatingNewPurchase, setIsCreatingNewPurchase] = useState(false)

	return (
		<PageShell title="Закупки" isProtected>
			<GroupControl title="Ваши закупки">
				<Button
					text="+ Оформить новую закупку"
					style="light"
					onClick={ () => setIsCreatingNewPurchase(true) }
				/>
			</GroupControl>
			<CreateNewPurchase
				isCreatingNewPurchase={isCreatingNewPurchase}
				setIsCreatingNewPurchase={setIsCreatingNewPurchase}
			/>
			<ViewAll />
		</PageShell>
	)
}

export default Purchases