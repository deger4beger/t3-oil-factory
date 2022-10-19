import { Brush, CartesianGrid, Legend, Line,
	LineChart, ReferenceLine, ResponsiveContainer,
Tooltip, XAxis, YAxis } from "recharts"

const fakeData = [
  {
    date: "Дата 1",
    закупки: 120000,
    продажи: 200000,
  },
  {
    date: "Дата 2",
    закупки: 150000,
    продажи: 230000,
  },
  {
    date: "Дата 3",
    закупки: 100000,
    продажи: 300000,
  },
  {
    date: "Дата 4",
    закупки: 130000,
    продажи: 210000,
  },
  {
    date: "Дата 5",
    закупки: 120000,
    продажи: 100000,
  },
  {
    date: "Дата 6",
    закупки: 150000,
    продажи: 130000,
  },
  {
    date: "Дата 7",
    закупки: 100000,
    продажи: 200000,
  },
  {
    date: "Дата 8",
    закупки: 130000,
    продажи: 150000,
  },
];

const Chart = () => {
	return (
		<div className="border-4 border-zinc-700 bg-zinc-300 m-4 mt-8 p-6 rounded">
			<ResponsiveContainer width="100%" height={500}>
	      <LineChart
	        width={500}
	        height={300}
	        data={fakeData}
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
	        <ReferenceLine y={140000} // средняя покупка
	          stroke="red"
	          yAxisId="price"
	          strokeDasharray="3 3"
	          strokeWidth={2}
	          strokeOpacity={0.6}
	          ifOverflow="extendDomain"
	        />
	        <ReferenceLine y={200000} // средняя покупка
	          stroke="green"
	          yAxisId="price"
	          strokeDasharray="3 3"
	          strokeWidth={2}
	          strokeOpacity={0.6}
	          ifOverflow="extendDomain"
	        />
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