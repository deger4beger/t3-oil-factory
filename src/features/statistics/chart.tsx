import {
	CartesianGrid,
	Legend,
	Line,
	LineChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts";

const Chart = ({
	data,
}: {
	data:
		| {
				date: string;
				закупки: number;
				продажи: number;
		  }[]
		| undefined;
}) => {
	return (
		<div className="bg-zinc-900 m-4 mt-8 p-6 rounded text-zinc-50">
			<ResponsiveContainer width="100%" height={500}>
				<LineChart width={500} height={300} data={data}>
					<CartesianGrid strokeDasharray="0 0" stroke="#3A3A3A" />
					<XAxis
						dataKey="date"
						stroke="#C7C7C7"
						tickLine={{ strokeWidth: 1 }}
						padding={{ left: 16, right: 16 }}
					/>
					<YAxis
						yAxisId="price"
						stroke="#C7C7C7"
						tickCount={10}
						tickSize={10}
						tickLine={{ strokeWidth: 0.5 }}
					/>
					<Tooltip />
					<Legend iconType="rect" />
					<Line
						yAxisId="price"
						type="monotone"
						dataKey="продажи"
						stroke="#008962"
						dot={{ strokeWidth: 3, r: 4 }}
						strokeWidth={3}
						strokeOpacity={0.8}
					/>
					<Line
						yAxisId="price"
						type="monotone"
						dataKey="закупки"
						stroke="#C63535"
						dot={{ strokeWidth: 3, r: 4 }}
						strokeWidth={3}
						strokeOpacity={0.8}
					/>
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
};

export default Chart;
