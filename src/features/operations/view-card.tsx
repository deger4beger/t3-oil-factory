import React, { useState } from "react"
import Button from "../../components/button"
import { trpc } from "../../utils/trpc"
import MutateForm from "./mutate-form"

const ViewCard = ({
	id,
	name,
	price,
	count,
	user,
	createdAt,
	index,
	operation
}: {
	id: string
	name: string
	price: number
	count: number
	user: { name: string | null }
	createdAt: Date
	index: number
	operation: "PURCHASE" | "SALE"
}) => {

	const [data, setData] = useState({
		name, price, count, createdAt
	})
	const [isUpdating, setIsUpdating] = useState(false)

	const utils = trpc.useContext()
	const onSuccess = () => {
		utils.invalidateQueries(["operation.getAll"])
	}
	const {
		mutateAsync: update,
		isLoading: updateLoading
	} = trpc.useMutation(["operation.update"], { onSuccess })
	const {
		mutate: deleteOne,
		isLoading: deleteLoading
	} = trpc.useMutation(["operation.delete"], { onSuccess })

	const styles = "font-semibold text-zinc-400 mr-2 border-b-2 border-zinc-800"
	const styles2 = "flex justify-between"

	const onSetData = (field: keyof typeof data) => (value: string) => {
		setData({
			...data,
			[field]: value
		})
	}
	const onMutate = async () => {
		await update({
			...data,
			id,
			price: Number(data.price),
			count: Number(data.count),
			createdAt: new Date(data.createdAt)
		})
		setIsUpdating(false)
	}

	return (
		<div className={ "flex flex-col justify-between text-zinc-200 border-4 border-zinc-700 p-4 m-2 flex-grow rounded-xl" + ( operation === "SALE" ? " bg-zinc-800" : "" ) }>
			<div className="inline-flex font-semibold text-base mb-2 items-center justify-between">
				<div>
					Операция № { index + 1 } <span className="text-xs text-zinc-300">
						({ operation === "PURCHASE" ? "Покупка" : "Продажа" })
					</span>
				</div>
				<div className="text-xs ml-4">
					<Button
						text="Удалить"
						style="dark"
						onClick={ () => deleteOne({ id }) }
						isLoading={ deleteLoading }
					/>&nbsp;&nbsp;
					<Button text="Изменить" onClick={ () => setIsUpdating(true) } />
				</div>
			</div>
			<div className={ styles2 }><span className={ styles }>Название:</span>{ name }</div>
			<div className={ styles2 }><span className={ styles }>Автор:</span>{ user.name }</div>
			<div className={ styles2 }><span className={ styles }>Цена:</span>{ price }</div>
			<div className={ styles2 }><span className={ styles }>Количество:</span>{ count }</div>
			<div className={ styles2 }><span className={ styles }>Общая цена:</span>{ count * price }</div>
			<div className={ styles2 }><span className={ styles }>Дата оформления:</span>{ createdAt.toLocaleDateString() }</div>
			<MutateForm
				isCreatingNew={ isUpdating }
				setIsCreatingNew={ setIsUpdating }
				onMutate={ onMutate }
				isLoading={ updateLoading }
				onSetPayload={ onSetData }
				payload={{
					...data,
					createdAt: typeof data.createdAt === "string" ? data.createdAt : data.createdAt.toString()
				}}
			/>
		</div>
	)
}

export default ViewCard