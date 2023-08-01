'use client'
import dynamic from 'next/dynamic';
import { Pie, Sector, Cell, ResponsiveContainer, Tooltip } from 'recharts';


const data = [
  { name: 'Enmax', value: 100 },
  { name: 'Mammoet', value: 20 },
  { name: 'Stampede', value: 10 },
  { name: 'NForce', value: 30 },
];

const COLORS = ['#FF5353', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF', '#FFA07A'];


const PieChart = dynamic(() => (
  import("recharts").then(recharts => recharts.PieChart)
), { ssr: false });

const PieGraph = () => {
  return (
    <PieChart width={400} height={400}>
    <Pie
      data={data}
      cx={200}
      cy={200}
      innerRadius={60}
      outerRadius={80}
      fill="#8884d8"
      dataKey="value"
      label
    >
      {data.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
      ))}
    </Pie>
    <Tooltip />
  </PieChart>
  );
};

export default PieGraph;
