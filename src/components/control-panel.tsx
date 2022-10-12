import React from "react"

const ControlPanel = ({
	totalItemsCount,
	isFetchingStatus,
	isLoadingStatus
}: {
	totalItemsCount: number
	isFetchingStatus: boolean
	isLoadingStatus: boolean
}) => {
	return (
		<div className="inline-flex justify-end pb-2 items-center text-zinc-400 font-semibold">
			<div className="mr-6 pl-2">Найдено элементов - { totalItemsCount }</div>
			<div>{ isFetchingStatus && <p>Синхронизация...</p> }</div>
			<div>{ isLoadingStatus && <p>Загрузка данных...</p> }</div>
		</div>
	)
}

export default ControlPanel