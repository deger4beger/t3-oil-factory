import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useState } from "react";
import ControlPanel from "../components/control-panel";
import GroupControl from "../components/group-control";
import InputDatalist from "../components/input-datalist";
import PageShell from "../components/page-shell";
import Chart from "../features/statistics/chart";
import Common from "../features/statistics/common";
import { trpc } from "../utils/trpc";

const Statistics: NextPage = () => {
	const router = useRouter();

	const [date, setDate] = useState({
		from: router.query.from
			? new Date(router.query.from as string)
			: new Date(),
		to: router.query.to
			? new Date(router.query.to as string)
			: new Date(),
	});
	const { data, isLoading, isFetching } = trpc.useQuery([
		"statistics.getTotal",
		date,
	]);
	const { operationsByDate, ...commonData } = data || {};

	const onSetDate = (value: { from?: Date; to?: Date }) => {
		setDate({
			...date,
			...value,
		});
		router.push({
			query: {
				...router.query,
				...{
					from: value.from?.toLocaleDateString(),
					to: value.to?.toLocaleDateString(),
				},
			},
		});
	};

	return (
		<PageShell title="Статистика" isProtected>
			<GroupControl title="Статистика за выбранные даты"></GroupControl>
			<ControlPanel
				totalItemsCount={(data?.purchasesCount || 0) + (data?.salesCount || 0)}
				isLoadingStatus={isLoading}
				isFetchingStatus={isFetching}
			>
				<div className="inline-flex items-center">
					<InputDatalist
						type="date"
						style="dark"
						title="Выберите период"
						value={""}
						onChange={(date) => onSetDate({ from: date as any })}
					/>
					<span> - </span>
					<InputDatalist
						type="date"
						style="dark"
						title="..."
						value={""}
						onChange={(date) => onSetDate({ to: date as any })}
					/>
				</div>
			</ControlPanel>
			<Common {...commonData} />
			<Chart data={operationsByDate} />
		</PageShell>
	);
};

export default Statistics;
