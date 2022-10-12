import React from "react"
import { trpc } from "../../utils/trpc"

const ViewAll = () => {

	const { data, isLoading, isFetching } = trpc.useQuery(["purchase.getAll"])

	return (
		<div>
			{ isLoading && <p>Загрузка...</p> }
			{ isFetching && <p>Обновление...</p> }
			<div className="flex flex-wrap">
				{ data?.map(purchase =>
					<div key={purchase.id}>
						{ purchase.name }
					</div>
				) }
			</div>
		</div>
	)
}

export default ViewAll