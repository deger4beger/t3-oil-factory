import React, { useState } from "react"
import { NextPage } from "next"
import GroupControl from "../components/group-control"
import PageShell from "../components/page-shell"
import Button from "../components/button"
import CreateNewPurchase from "../features/operations/create-new"
import ViewAll from "../features/operations/view-all"


const Operations: NextPage = () => {

	const [isCreatingNewOperation, setIsCreatingNewOperation] = useState(false)
	const [operationType, setOperationType] = useState<"Закупка" | "Продажа">()

	return (
		<PageShell title="Закупки" isProtected>
			<GroupControl title="Ваши операции">
				<Button
					text="+ Оформить новую закупку"
					style="light"
					onClick={ () => setIsCreatingNewOperation(true) }
				/>
			</GroupControl>
			<CreateNewPurchase
				isCreatingNewPurchase={ isCreatingNewOperation }
				setIsCreatingNewPurchase={ setIsCreatingNewOperation }
			/>
			<ViewAll />
		</PageShell>
	)
}

export default Operations