import React from "react"

const RecordCard = ({
	id,
	name,
	price,
	count,
	user,
	createdAt,
}: {
	id: string
	name: string
	price: number
	count: number
	user: { name: string | null }
	createdAt: Date
}) => {
	const styles = "font-semibold text-zinc-400 mr-2"
	return (
		<div className="flex flex-col justify-between text-zinc-200">
			<div className="font-semibold border-b-2 border-zinc-700 text-base">Заказ № { id }</div>
			<div><span className={ styles }>Название:</span>{ name }</div>
			<div><span className={ styles }>Автор:</span>{ user.name }</div>
			<div><span className={ styles }>Цена:</span>{ price }</div>
			<div><span className={ styles }>Количество:</span>{ count }</div>
			<div><span className={ styles }>Общая цена:</span>{ count * price }</div>
			<div><span className={ styles }>Дата оформления:</span>{ createdAt.toString() }</div>
		</div>
	)
}

export default RecordCard