import React, { useState } from "react"
import MutateForm from "./mutate-form"
import { trpc } from '../../utils/trpc'

const CreateNew = ({
	isCreatingNew,
	setIsCreatingNew,
	operationType
}: {
	isCreatingNew: boolean,
	setIsCreatingNew: (value: boolean) => void,
	operationType: "PURCHASE" | "SALE"
}) => {

	const [payload, setPayload] = useState({
		name: "",
		price: 0,
		count: 0,
		createdAt: ""
	})
	const { mutate, isLoading } = trpc.useMutation(["operation.create"])
	const { data: namesList } = trpc.useQuery(["operation.getAll"], {
		select(data) {
		  return data
		  	.filter(operation => operation.operation === operationType)
		  	.map(operation => operation.name)
		  	.filter((v, i, a) => a.indexOf(v) === i)
		},
		refetchOnWindowFocus: false
	})
	const utils = trpc.useContext()

	const onSetPayload = (field: keyof typeof payload) => (value: string) => {
		setPayload({
			...payload,
			[field]: value
		})
	}

	const onCreateNew = () => {
		mutate({
			...payload,
			price: Number(payload.price),
			count: Number(payload.count),
			operation: operationType,
			createdAt: new Date(payload.createdAt)
		}, {
			onSuccess: () => {
				setIsCreatingNew(false)
				setPayload({
					name: "",
					price: 0,
					count: 0,
					createdAt: ""
				})
				utils.invalidateQueries(["operation.getAll"])
			}
		})
	}

	return (
		<MutateForm
			isCreatingNew={ isCreatingNew }
			setIsCreatingNew={ setIsCreatingNew }
			onMutate={onCreateNew}
			isLoading={ isLoading }
			payload={ payload }
			onSetPayload={ onSetPayload }
			namesList={ namesList }
		/>
	)
}

export default CreateNew