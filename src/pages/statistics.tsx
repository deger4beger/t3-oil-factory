import { NextPage } from "next"
import React from "react"
import ControlPanel from "../components/control-panel"
import GroupControl from "../components/group-control"
import PageShell from "../components/page-shell"
import Common from "../features/statistics/common"
import { trpc } from "../utils/trpc"


const Statistics: NextPage = () => {

	const { data, isLoading, isFetching } = trpc.useQuery(["statistics.getTotal"])

	return (
		<PageShell title="Статистика" isProtected>
			<GroupControl title="Статистика за выбранные даты">

			</GroupControl>
			<ControlPanel
				totalItemsCount={ (data?.purchasesCount || 0) + (data?.salesCount || 0) }
				isLoadingStatus={ isLoading }
				isFetchingStatus={ isFetching }
			/>
			<Common />
		</PageShell>
	)
}

export default Statistics