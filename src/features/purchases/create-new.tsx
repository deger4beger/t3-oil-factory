import React, { useState } from 'react'
import Modal from "../../components/modal"
import Button from "../../components/button"
import InputDatalist from "../../components/input-datalist"

const CreateNewPurchase = ({
	isCreatingNewPurchase,
	setIsCreatingNewPurchase,
}: {
	isCreatingNewPurchase: boolean,
	setIsCreatingNewPurchase: (value: boolean) => void,
}) => {

	const [purchasePayload, setPurchasePayload] = useState({
		name: "",
		price: "",
		count: "",
		createdAt: ""
	})

	const onSetPurchasePayload = (field: keyof typeof purchasePayload) => (value: string) => {
		setPurchasePayload({
			...purchasePayload,
			[field]: value
		})
	}

	const onCreateNewPurchase = () => {
		console.log(purchasePayload)
	}

	return (
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
					title="Стоимость"
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
					value={ purchasePayload.createdAt }
					onChange={ onSetPurchasePayload("createdAt") }
					type="date"
				/>
			</Modal>
	)
}

export default CreateNewPurchase