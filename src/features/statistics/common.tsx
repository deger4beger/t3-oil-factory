const Common = ({
	purchasesCount,
	purchasesPrice,
	salesCount,
	salesPrice,
	outcome,
}: {
	purchasesCount?: number
	purchasesPrice?: number
	salesCount?: number
	salesPrice?: number
	outcome?: number
}) => {
	return (
		<div className="mt-2 font-semibold text-zinc-300">
			<p className="flex justify-between items-center border-2 border-b-0 border-zinc-700 p-2 mb-2 rounded">
				<span>Количество закупок</span>{ purchasesCount }
			</p>
			<p className="flex justify-between items-center border-2 border-t-0 border-zinc-700 p-2 mb-6 rounded">
				<span>Количество продаж</span>{ salesCount }
			</p>
			<p className="flex justify-between items-center border-2 border-b-0 border-zinc-700 p-2 mb-2 rounded">
				<span>Сумма закупок</span>- { purchasesPrice }
			</p>
			<p className="flex justify-between items-center border-2 border-t-0 border-zinc-700 p-2 mb-6 rounded">
				<span>Сумма продаж</span>+ { salesPrice }
			</p>
			<p className={ "flex justify-between items-center border-[3px] p-2 mb-2 rounded" + ( outcome ?? 0 > 0 ? " border-emerald-700" : " border-red-700" )}>
				<span>Общий доход за указанный период</span>{ outcome ?? 0 > 0 ? "+ " : "- " }{ outcome }
			</p>
		</div>
	)
}

export default Common