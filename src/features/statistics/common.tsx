import React from 'react'

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
		<div className="mt-2">
			common
		</div>
	)
}

export default Common