import React, { useState } from 'react'
import Modal from "../../components/modal"
import Button from "../../components/button"
import InputDatalist from "../../components/input-datalist"
import { trpc } from '../../utils/trpc'

const CreateNewPurchase = ({
	isCreatingNewPurchase,
	setIsCreatingNewPurchase,
}: {
	isCreatingNewPurchase: boolean,
	setIsCreatingNewPurchase: (value: boolean) => void,
}) => {

	const [purchasePayload, setPurchasePayload] = useState({
		name: "",
		price: 0,
		count: 0,
		createdAt: ""
	})
	const { mutate, isLoading } = trpc.useMutation(["purchase.create"])

	const onSetPurchasePayload = (field: keyof typeof purchasePayload) => (value: string) => {
		setPurchasePayload({
			...purchasePayload,
			[field]: value
		})
	}

	const onCreateNewPurchase = () => {
		mutate({
			...purchasePayload,
			price: Number(purchasePayload.price),
			count: Number(purchasePayload.count),
			createdAt: new Date(purchasePayload.createdAt)
		}, {
			onSuccess: () => {
				setIsCreatingNewPurchase(false)
				setPurchasePayload({
					name: "",
					price: 0,
					count: 0,
					createdAt: ""
				})
			}
		})
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
						isLoading={ isLoading }
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
					type="number"
					value={ purchasePayload.price }
					onChange={ onSetPurchasePayload("price") }
				/>
				<InputDatalist
					title="Количество"
					type="number"
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