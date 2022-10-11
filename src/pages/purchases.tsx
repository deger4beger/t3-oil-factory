import React, { useState } from "react"
import { NextPage } from "next"
import GroupControl from "../components/group-control"
import PageShell from "../components/page-shell"
import Button from "../components/button"
import Modal from "../components/modal"
import InputDatalist from "../components/input-datalist"


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
			<Modal
				showModal={isCreatingNewPurchase}
				setShowModal={setIsCreatingNewPurchase}
				title="Оформление новой закупки"
				successBtn={
					<Button
						text="Подтвердить"
					/>
				}
			>
				<InputDatalist />
				<InputDatalist />
			</Modal>
		</PageShell>
	)
}

export default Purchases