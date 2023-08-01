'use client'
import dynamic from 'next/dynamic';
import { Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'January',
    Completed: 20,
    Requests: 40,
    amt: 2400,
  },
  {
    name: 'February',
    Completed: 50,
    Requests: 50,
    amt: 2210,
  },
  {
    name: 'March',
    Completed: 10,
    Requests: 100,
    amt: 2290,
  },
  {
    name: 'April',
    Completed: 60,
    Requests: 79,
    amt: 2000,
  }
];

const BarChart = dynamic(() => (
  import("recharts").then(recharts => recharts.BarChart)
), { ssr: false });

const BarGraph = () => {
  return (
        <BarChart
          width={400}
          height={300}
          data={data}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Requests" fill="#F8A47D" />
          <Bar dataKey="Completed" fill="#69C5FF" />
        </BarChart>
  );
};

export default BarGraph;
