import React, { useState } from "react"
import MutateForm from "./mutate-form"
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
	const { data: purchaseNames } = trpc.useQuery(["purchase.getAll"], {
		select(data) {
		  return data.map(purchase => purchase.name).filter((v, i, a) => a.indexOf(v) === i)
		},
		refetchOnWindowFocus: false
	})
	const utils = trpc.useContext()

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
				utils.invalidateQueries(["purchase.getAll"])
			}
		})
	}

	return (
		<MutateForm
			isCreatingNewPurchase={isCreatingNewPurchase}
			setIsCreatingNewPurchase={setIsCreatingNewPurchase}
			onMutatePurchase={onCreateNewPurchase}
			isLoading={isLoading}
			purchasePayload={purchasePayload}
			onSetPurchasePayload={onSetPurchasePayload}
			purchaseNames={purchaseNames}
		/>
	)
}

export default CreateNewPurchase