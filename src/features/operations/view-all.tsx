import { useState } from "react"
import { trpc } from "../../utils/trpc"
import ControlPanel from "../../components/control-panel"
import { useAutoAnimate } from "@formkit/auto-animate/react"
import ViewCard from "./view-card"
import { useRouter } from "next/router"
import Paginator from "../../components/paginator"
import InputDatalist from "../../components/input-datalist"
import { useDebouncedState } from "../../hooks/use-debounced-state"

const ViewAll = () => {

	const [animationParent] = useAutoAnimate()
	const router = useRouter()
	const take = 6

	const [filter, setFilter] = useState({
		page: Number(router.query.page) || 1,
		name: router.query.name as string || ""
	})
	const { data, isLoading, isFetching } = trpc.useQuery([
		"operation.getAll", {
			...filter,
			name: useDebouncedState(filter.name, 500),
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

	const updateFilter = (value: Partial<typeof filter>) => {
		router.push({
			query: {
				...router.query,
				...value
			}
		})
		setFilter({
			...filter,
			...value
		})
	}

	return (
		<div className="mt-4">
			<ControlPanel
				totalItemsCount={data?.totalCount || 0}
				isFetchingStatus={isFetching}
				isLoadingStatus={isLoading}
			>
				<InputDatalist
					style="dark"
					title="Название операции"
					value={ filter.name }
					onChange={ (name) => updateFilter({ name }) }
				/>
			</ControlPanel>
			<div className="flex flex-wrap p-2 max-w-6xl" ref={ animationParent as any }>
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
				onPageChanged={ (page) => updateFilter({ page }) }
			/>
		</div>
	)
}

export default ViewAll