import React from 'react'
import { Brush, CartesianGrid, Legend, Line, LineChart, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const fakeData = [
  {
    date: "Дата 1",
    purchase: 120000,
    sale: 200000,
  },
  {
    date: "Дата 2",
    purchase: 150000,
    sale: 230000,
  },
  {
    date: "Дата 3",
    purchase: 100000,
    sale: 300000,
  },
  {
    date: "Дата 4",
    purchase: 130000,
    sale: 210000,
  },
  {
    date: "Дата 5",
    purchase: 120000,
    sale: 100000,
  },
  {
    date: "Дата 6",
    purchase: 150000,
    sale: 130000,
  },
  {
    date: "Дата 7",
    purchase: 100000,
    sale: 200000,
  },
  {
    date: "Дата 8",
    purchase: 130000,
    sale: 150000,
  },
];

const Chart = () => {
	return (
		<div className="border-4 border-zinc-700 bg-zinc-300 mt-10 p-6 rounded">
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
	          alwaysShow
	        />
	        <ReferenceLine y={200000} // средняя покупка
	          stroke="green"
	          yAxisId="price"
	          strokeDasharray="3 3"
	          strokeWidth={2}
	          strokeOpacity={0.6}
	          alwaysShow
	        />
	        <Line yAxisId="price" type="monotone" dataKey="sale" stroke="#047857"
	          dot={{ strokeWidth: 3, r: 4 }}
	          strokeWidth={3}
	          strokeOpacity={0.8}
	        />
	        <Line yAxisId="price" type="monotone" dataKey="purchase" stroke="#b91c1c"
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