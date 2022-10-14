import Modal from "../../components/modal"
import Button from "../../components/button"
import InputDatalist from "../../components/input-datalist"

const MutateForm = ({
	isCreatingNewPurchase,
	setIsCreatingNewPurchase,
	onMutatePurchase,
	isLoading,
	purchasePayload,
	onSetPurchasePayload,
	purchaseNames
}: {
	isCreatingNewPurchase: boolean,
	setIsCreatingNewPurchase: (value: boolean) => void,
	onMutatePurchase: () => void,
	isLoading: boolean,
	purchasePayload: {
		name?: string,
		price?: number,
		count?: number,
		createdAt?: string
	},
	onSetPurchasePayload: (field: keyof typeof purchasePayload) => (value: string) => void,
	purchaseNames?: string[]
}) => {

	return (
		<Modal
				showModal={isCreatingNewPurchase}
				setShowModal={setIsCreatingNewPurchase}
				title="Оформление новой закупки"
				successBtn={
					<Button
						text="Подтвердить"
						onClick={ onMutatePurchase }
						isLoading={ isLoading }
					/>
				}
			>
				<InputDatalist
					title="Название закупки"
					value={ purchasePayload.name }
					onChange={ onSetPurchasePayload("name") }
					datalist={ purchaseNames }
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

export default MutateForm