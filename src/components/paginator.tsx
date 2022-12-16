import { useState } from "react";

const Paginator = ({
	totalCount,
	pageSize,
	currentPage,
	onPageChanged,
	portionSize,
}: {
	totalCount: number;
	pageSize: number;
	currentPage: number;
	onPageChanged: (pageNumber: number) => void;
	portionSize: number;
}) => {
	const pagesCount = Math.ceil(totalCount / pageSize);
	const pages = [];

	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}

	const portionCount = Math.ceil(pagesCount / portionSize);
	const [portionNumber, setPortionNumber] = useState(
		Math.ceil(currentPage / portionSize)
	);
	const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
	const rightPortionPageNumber = portionNumber * portionSize;

	return (
		<div className="flex items-center justify-center border-t-2 border-zinc-800 w-full mt-4">
			<div>
				{portionNumber > 1 && (
					<button
						onClick={() => {
							setPortionNumber(portionNumber - 1);
						}}
						className="font-bold mr-2"
					>
						←
					</button>
				)}
			</div>
			<div className="flex items-center h-[60px]">
				{pages
					.filter(
						(p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber
					)
					.map((p) => (
						<span
							className={
								"px-3 py-1 text-xl cursor-pointer text-zinc-400" +
								(currentPage === p ? " bg-zinc-800 text-zinc-50" : "")
							}
							key={p}
							onClick={() => {
								onPageChanged(p);
							}}
						>
							{p}
						</span>
					))}
			</div>
			<div>
				{portionCount > portionNumber && (
					<button
						onClick={() => {
							setPortionNumber(portionNumber + 1);
						}}
						className="font-bold ml-4"
					>
						→
					</button>
				)}
			</div>
		</div>
	);
};

export default Paginator;
