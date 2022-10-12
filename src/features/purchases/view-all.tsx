import React from "react"
import ControlPanel from "../../components/control-panel"
import RecordCard from "../../components/record-card"
import { trpc } from "../../utils/trpc"

const ViewAll = () => {

	const { data, isLoading, isFetching } = trpc.useQuery(["purchase.getAll"])
	console.log(data)
	return (
		<div className="mt-4">
			<ControlPanel
				totalItemsCount={data?.length || 0}
				isFetchingStatus={isFetching}
				isLoadingStatus={isLoading}
			/>
			<div className="flex flex-wrap mt-4 p-2">
				{ data?.map((purchase, id) =>
					<RecordCard
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