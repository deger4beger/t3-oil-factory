import { Brush, CartesianGrid, Legend, Line,
	LineChart, ResponsiveContainer,
Tooltip, XAxis, YAxis } from "recharts"

const Chart = ({ data }: { data: {
	date: string
	закупки: number
	продажи: number
}[] | undefined }) => {
	return (
		<div className="border-4 border-zinc-700 bg-zinc-300 m-4 mt-8 p-6 rounded">
			<ResponsiveContainer width="100%" height={500}>
	      <LineChart
	        width={500}
	        height={300}
	        data={data}
	      >
	        <CartesianGrid strokeDasharray="0 0" stroke="#CBCBCB" />
	        <XAxis dataKey="date" stroke="black" tickLine={{ strokeWidth: 1 }}
	          padding={{ left: 16, right: 16 }}
	        />
	        <YAxis yAxisId="price" stroke="black" tickCount={10} tickSize={10}
	          tickLine={{ strokeWidth: 0.5 }}
	        />
	        <Tooltip />
	        <Legend iconType="rect" />
	        <Line yAxisId="price" type="monotone" dataKey="продажи" stroke="#047857"
	          dot={{ strokeWidth: 3, r: 4 }}
	          strokeWidth={3}
	          strokeOpacity={0.8}
	        />
	        <Line yAxisId="price" type="monotone" dataKey="закупки" stroke="#b91c1c"
	          dot={{ strokeWidth: 3, r: 4 }}
	          strokeWidth={3}
	          strokeOpacity={0.8}
	        />
	        <Brush dataKey="date" height={30} />
	      </LineChart>
	    </ResponsiveContainer>
    </div>
	)
}

export default Chart