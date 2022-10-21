const UserStats = ({
	purchasesCount,
	salesCount
}: {
	purchasesCount: number;
	salesCount: number;
}) => {
	return (
		<div>
			<h2>Количество оформленных вами закупок</h2> { purchasesCount }
			<h2>Количество оформленных вами продаж</h2> { salesCount }
		</div>
	)
}

export default UserStats