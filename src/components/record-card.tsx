import React from "react"

const RecordCard = ({
	name,
	price,
	count,
	user,
	createdAt,
	index
}: {
	name: string
	price: number
	count: number
	user: { name: string | null }
	createdAt: Date
	index: number
}) => {
	const styles = "font-semibold text-zinc-400 mr-2"
	const styles2 = "flex justify-between"
	return (
		<div className="flex flex-col justify-between text-zinc-200 border-4 border-zinc-700 p-4 m-2 flex-grow rounded-lg">
			<div className="font-semibold text-base pb-2">Заказ № { index + 1 }</div>
			<div className={ styles2 }><span className={ styles }>Название:</span>{ name }</div>
			<div className={ styles2 }><span className={ styles }>Автор:</span>{ user.name }</div>
			<div className={ styles2 }><span className={ styles }>Цена:</span>{ price }</div>
			<div className={ styles2 }><span className={ styles }>Количество:</span>{ count }</div>
			<div className={ styles2 }><span className={ styles }>Общая цена:</span>{ count * price }</div>
			<div className={ styles2 }><span className={ styles }>Дата оформления:</span>{ createdAt.toLocaleDateString() }</div>
		</div>
	)
}

export default RecordCard