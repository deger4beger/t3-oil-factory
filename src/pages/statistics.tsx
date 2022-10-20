import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
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
		from: "",
		to: "",
	});

	const { data, isLoading, isFetching } = trpc.useQuery([
		"statistics.getTotal",
		( date.from && date.to ) ? {
			from: new Date(date.from),
			to: new Date(date.to),
		} : {},
	]);
	const { operationsByDate, ...commonData } = data || {};

	const onSetDate = (value: { from?: string; to?: string }) => {
		router.push({
			query: {
				from: value.from || date.from,
				to: value.to || date.to,
			},
		});
	};

	useEffect(() => {
		setDate({
			...date,
			...router.query,
		});
	}, [router.query])

	return (
		<PageShell title="Статистика" isProtected>
			<GroupControl title="Статистика за выбранные даты" />
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
						value={ date.from }
						onChange={ (selectedDate) => onSetDate({ from: selectedDate }) }
					/>
					<span> - </span>
					<InputDatalist
						type="date"
						style="dark"
						title="..."
						value={ date.to }
						onChange={ (selectedDate) => onSetDate({ to: selectedDate }) }
					/>
				</div>
			</ControlPanel>
			<Common {...commonData} />
			<Chart data={operationsByDate} />
		</PageShell>
	);
};

export default Statistics;
