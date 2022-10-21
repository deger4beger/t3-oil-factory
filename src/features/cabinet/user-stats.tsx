const UserStats = ({
	purchasesCount,
	salesCount,
}: {
	purchasesCount?: number;
	salesCount?: number;
}) => {
	return (
		<div className="mt-4">
			<p className="flex justify-center text-zinc-300">
				<h2 className="mr-1">Количество оформленных вами закупок - </h2>{" "}
				{purchasesCount}
			</p>
			<p className="flex justify-center text-zinc-300 mt-2">
				<h2 className="mr-1">Количество оформленных вами продаж - </h2>{" "}
				{salesCount}
			</p>
		</div>
	);
};

export default UserStats;
