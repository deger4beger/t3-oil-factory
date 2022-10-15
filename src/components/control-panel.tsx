import React from "react"

const ControlPanel = ({
	totalItemsCount,
	isFetchingStatus,
	isLoadingStatus,
	children
}: {
	totalItemsCount: number
	isFetchingStatus: boolean
	isLoadingStatus: boolean
	children?: React.ReactNode
}) => {
	return (
		<div className="inline-flex justify-end pb-2 items-center text-zinc-400 font-semibold">
			<div className="mr-4">{ children }</div>
			<div className="mr-6 pl-2">Найдено элементов - { totalItemsCount }</div>
			<div>{ isFetchingStatus && !isLoadingStatus && <p>Синхронизация...</p> }</div>
			<div>{ isLoadingStatus && <p>Загрузка данных...</p> }</div>
		</div>
	)
}

export default ControlPanel