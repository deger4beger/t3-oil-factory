import { NextPage } from "next"
import React from "react"
import ControlPanel from "../components/control-panel"
import GroupControl from "../components/group-control"
import InputDatalist from "../components/input-datalist"
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
			>
				<div className="inline-flex items-center">
					<InputDatalist
						type="date"
						style="dark"
						title="Выберите период"
						value={ "" }
						onChange={ () => void 0 }
					/>
					<span> - </span>
					<InputDatalist
						type="date"
						style="dark"
						title="..."
						value={ "" }
						onChange={ () => void 0 }
					/>
				</div>
			</ControlPanel>
			<Common />
		</PageShell>
	)
}

export default Statistics