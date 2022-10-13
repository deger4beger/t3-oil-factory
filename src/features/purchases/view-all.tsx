import React from "react"
import ControlPanel from "../../components/control-panel"
import PurchaseCard from "../../components/purchase-card"
import { trpc } from "../../utils/trpc"

const ViewAll = () => {

	const { data, isLoading, isFetching } = trpc.useQuery(["purchase.getAll"])

	return (
		<div className="mt-4">
			<ControlPanel
				totalItemsCount={data?.length || 0}
				isFetchingStatus={isFetching}
				isLoadingStatus={isLoading}
			/>
			<div className="flex flex-wrap mt-4 p-2">
				{ data?.map((purchase, id) =>
					<PurchaseCard
						key={ purchase.id }
						index={ id }
						{ ...purchase }
					/>
				) }
			</div>
		</div>
	)
}

export default ViewAll