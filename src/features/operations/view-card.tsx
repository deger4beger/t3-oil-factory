import React from "react"
import Button from "../../components/button"
import { trpc } from "../../utils/trpc"

const ViewCard = ({
	id,
	name,
	price,
	count,
	user,
	createdAt,
	index
}: {
	id: string
	name: string
	price: number
	count: number
	user: { name: string | null }
	createdAt: Date
	index: number
}) => {

	const utils = trpc.useContext()
	const onSuccess = () => {
		utils.invalidateQueries(["operation.getAll"])
	}
	const {
		mutate: update,
		isLoading: updateLoading
	} = trpc.useMutation(["operation.update"], { onSuccess })
	const {
		mutate: deleteOne,
		isLoading: deleteLoading
	} = trpc.useMutation(["operation.delete"], { onSuccess })

	const styles = "font-semibold text-zinc-400 mr-2 border-b-2 border-zinc-800"
	const styles2 = "flex justify-between"

	return (
		<div className="flex flex-col justify-between text-zinc-200 border-4 border-zinc-700 p-4 m-2 flex-grow rounded-xl">
			<div className="inline-flex font-semibold text-base mb-2 items-center justify-between">
				Операция № { index + 1 }
				<div className="text-xs ml-4">
					<Button
						text="Удалить"
						style="dark"
						onClick={ () => deleteOne({ id }) }
						isLoading={ deleteLoading }
					/>&nbsp;&nbsp;
					<Button text="Изменить" />
				</div>
			</div>
			<div className={ styles2 }><span className={ styles }>Название:</span>{ name }</div>
			<div className={ styles2 }><span className={ styles }>Автор:</span>{ user.name }</div>
			<div className={ styles2 }><span className={ styles }>Цена:</span>{ price }</div>
			<div className={ styles2 }><span className={ styles }>Количество:</span>{ count }</div>
			<div className={ styles2 }><span className={ styles }>Общая цена:</span>{ count * price }</div>
			<div className={ styles2 }><span className={ styles }>Дата оформления:</span>{ createdAt.toLocaleDateString() }</div>
		</div>
	)
}

export default ViewCard