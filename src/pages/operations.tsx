import React, { useState } from "react"
import { NextPage } from "next"
import GroupControl from "../components/group-control"
import PageShell from "../components/page-shell"
import Button from "../components/button"
import CreateNew from "../features/operations/create-new"
import ViewAll from "../features/operations/view-all"


const Operations: NextPage = () => {

	const [isCreatingNewOperation, setIsCreatingNewOperation] = useState(false)
	const [operationType, setOperationType] = useState<"PURCHASE" | "SALE">("PURCHASE")

	return (
		<PageShell title="Закупки" isProtected>
			<GroupControl title="Ваши операции">
				<Button
					text="+ Оформить закупку"
					style="light"
					onClick={ () => {
						setIsCreatingNewOperation(true)
						setOperationType("PURCHASE")
					} }
				/>&nbsp;&nbsp;
				<Button
					text="+ Оформить продажу"
					style="standard"
					onClick={ () => {
						setIsCreatingNewOperation(true)
						setOperationType("SALE")
					} }
				/>
			</GroupControl>
			<CreateNew
				isCreatingNew={ isCreatingNewOperation }
				setIsCreatingNew={ setIsCreatingNewOperation }
				operationType={ operationType }
			/>
			<ViewAll />
		</PageShell>
	)
}

export default Operations