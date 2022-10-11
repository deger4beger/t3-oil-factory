import React, { useState } from "react"
import { NextPage } from "next"
import GroupControl from "../components/group-control"
import PageShell from "../components/page-shell"
import Button from "../components/button"
import Modal from "../components/modal"


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
				title="Офоормление новой закупки"
				successBtn={
					<Button
						text="Подтвердить"
					/>
				}
			>
			</Modal>
		</PageShell>
	)
}

export default Purchases