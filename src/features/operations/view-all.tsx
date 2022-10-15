import { useEffect, useState } from "react"
import { trpc } from "../../utils/trpc"
import ControlPanel from "../../components/control-panel"
import ViewCard from "./view-card"
import { useRouter } from "next/router"
import Paginator from "../../components/paginator"

const ViewAll = () => {

	const router = useRouter()
	const [filter, setFilter] = useState({
		page: Number(router.query.page) || 1
	})
	const { data, isLoading, isFetching, refetch } = trpc.useQuery([
		"operation.getAll", {
			page: filter.page,
			take: 10
		}
	], {
		onSuccess(data) {
			return {
				...data,
				operations: data.operations.reverse()
			}
		},
		enabled: false,
		keepPreviousData: true
	})

	const onPageChange = (page: number) => {
		router.push({
			query: {
				...router.query,
				page
			}
		})
		setFilter({
			...filter,
			page
		})
	}

	useEffect(() => {
		!!filter.page && refetch()
	}, [filter, refetch])

	return (
		<div className="mt-4">
			<ControlPanel
				totalItemsCount={data?.totalCount || 0}
				isFetchingStatus={isFetching}
				isLoadingStatus={isLoading}
			/>
			<div className="flex flex-wrap mt-4 p-2 max-w-6xl">
				{ data?.operations.map((purchase, id) =>
					<ViewCard
						key={ purchase.id }
						index={ id }
						{ ...purchase }
					/>
				) }
			</div>
			<div className="flex justify-center mt-4">
				<Paginator
					currentPage={ filter.page }
					pageSize={ 10 }
					portionSize={ 10 }
					totalCount={ data?.totalCount || 0 }
					onPageChanged={ onPageChange }
				/>
			</div>
		</div>
	)
}

export default ViewAll