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
		<div className="mt-2 font-semibold text-zinc-300 bg-zinc-800 p-2 rounded border-zinc-700 border-4">
			<p className="flex justify-between items-center border-b-2 border-zinc-700 p-2 mb-2">
				<span>Количество закупок</span>{ purchasesCount }
			</p>
			<p className="flex justify-between items-center border-b-2 border-zinc-700 p-2 mb-6">
				<span>Количество продаж</span>{ salesCount }
			</p>
			<p className="flex justify-between items-center border-b-2 border-zinc-700 p-2 mb-2">
				<span>Сумма закупок</span>- { purchasesPrice }
			</p>
			<p className="flex justify-between items-center border-b-2 border-zinc-700 p-2 mb-6">
				<span>Сумма продаж</span>+ { salesPrice }
			</p>
			<p className={ "flex justify-between items-center border-b-[3px] p-2 mb-2" + ( outcome ?? 0 > 0 ? " border-emerald-700" : " border-red-700" )}>
				<span>Общий доход за указанный период</span>{ outcome ?? 0 > 0 ? "+ " : "- " }{ outcome }
			</p>
		</div>
	)
}

export default Common