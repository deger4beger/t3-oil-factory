import { useState } from "react"

const Paginator = ({
	totalCount,
	pageSize,
	currentPage,
	onPageChanged,
	portionSize
}: {
	totalCount: number,
	pageSize: number,
	currentPage: number,
	onPageChanged: (pageNumber: number) => void,
	portionSize: number
}) => {

	const pagesCount = Math.ceil(totalCount / pageSize)
	const pages = []

	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i)
	}

	const portionCount = Math.ceil(pagesCount / portionSize)
	const [portionNumber, setPortionNumber] = useState(1)
	const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
	const rightPortionPageNumber = portionNumber * portionSize

	return (
	<div className="flex items-center justify-center">
		<div>
			{ portionNumber > 1 &&
			<button onClick={ () => {setPortionNumber(portionNumber - 1)}} className="font-semibold">PREV</button>}
		</div>
		<div className="flex items-center h-[70px]">
			{pages
				.filter(p => p>= leftPortionPageNumber && p <= rightPortionPageNumber)
				.map( p => <span
					className={currentPage === p ? "font-semibold" : "font-normal"}
					key={p}
					onClick={ () => {onPageChanged(p) }}>
						{p}
					</span>
			)}
		</div>
		<div>
			{ portionCount > portionNumber &&
			<button onClick={ () => {setPortionNumber(portionNumber + 1)}} className="font-semibold">NEXT</button>}
		</div>
	</div>
	)
}

export default Paginator