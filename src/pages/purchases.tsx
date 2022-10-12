import React, { useState } from "react"
import { NextPage } from "next"
import GroupControl from "../components/group-control"
import PageShell from "../components/page-shell"
import Button from "../components/button"
import CreateNewPurchase from "../features/purchases/create-new"
import { trpc } from "../utils/trpc"


const Purchases: NextPage = () => {

	const [isCreatingNewPurchase, setIsCreatingNewPurchase] = useState(false)
	const { data, isLoading, isFetching } = trpc.useQuery(["purchase.getAll"])

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
			{ isLoading && <p>Загрузка...</p> }
			{ isFetching && <p>Обновление...</p> }
			{ JSON.stringify(data) }
		</PageShell>
	)
}

export default Purchases