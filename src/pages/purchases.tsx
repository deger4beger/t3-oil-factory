import React, { useState } from "react"
import { NextPage } from "next"
import GroupControl from "../components/group-control"
import PageShell from "../components/page-shell"
import Button from "../components/button"
import Modal from "../components/modal"
import InputDatalist from "../components/input-datalist"


const Purchases: NextPage = () => {

	const [isCreatingNewPurchase, setIsCreatingNewPurchase] = useState(false)
	const [purchasePayload, setPurchasePayload] = useState({
		name: "",
		price: "",
		count: "",
		date: ""
	})

	const onSetPurchasePayload = (field: string) => (value: string) => {
		setPurchasePayload({
			...purchasePayload,
			[field]: value
		})
	}

	const onCreateNewPurchase = () => {
		console.log(purchasePayload)
	}

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
						onClick={ onCreateNewPurchase }
					/>
				}
			>
				<InputDatalist
					title="Название закупки"
					value={ purchasePayload.name }
					onChange={ onSetPurchasePayload("name") }
				/>
				<InputDatalist
					title="Цена"
					value={ purchasePayload.price }
					onChange={ onSetPurchasePayload("price") }
				/>
				<InputDatalist
					title="Количество"
					value={ purchasePayload.count }
					onChange={ onSetPurchasePayload("count") }
				/>
				<InputDatalist
					title="Дата"
					value={ purchasePayload.date }
					onChange={ onSetPurchasePayload("date") }
					type="date"
				/>
			</Modal>
		</PageShell>
	)
}

export default Purchases