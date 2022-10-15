import { useState } from "react"
import { trpc } from "../../utils/trpc"
import ControlPanel from "../../components/control-panel"
import { useAutoAnimate } from "@formkit/auto-animate/react"
import ViewCard from "./view-card"
import { useRouter } from "next/router"
import Paginator from "../../components/paginator"

const ViewAll = () => {

	const [animationParent] = useAutoAnimate()
	const router = useRouter()
	const take = 6
	const [filter, setFilter] = useState({
		page: Number(router.query.page) || 1
	})
	const { data, isLoading, isFetching } = trpc.useQuery([
		"operation.getAll", {
			...filter,
			take: take
		}
	], {
		onSuccess(data) {
			return {
				...data,
				operations: data.operations.reverse()
			}
		},
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

	return (
		<div className="mt-4">
			<ControlPanel
				totalItemsCount={data?.totalCount || 0}
				isFetchingStatus={isFetching}
				isLoadingStatus={isLoading}
			/>
			<div className="flex flex-wrap mt-4 p-2 max-w-6xl" ref={ animationParent as any }>
				{ data?.operations.map(purchase =>
					<ViewCard
						key={ purchase.id }
						{ ...purchase }
					/>
				) }
			</div>
			<Paginator
				currentPage={ filter.page }
				pageSize={ take }
				portionSize={ 4 }
				totalCount={ data?.totalCount || 0 }
				onPageChanged={ onPageChange }
			/>
		</div>
	)
}

export default ViewAll