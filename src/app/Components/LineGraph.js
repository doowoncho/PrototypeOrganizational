'use client'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Jan', 'Completed Jobs': 10 },
  { name: 'Feb', 'Completed Jobs': 50 },
  { name: 'Mar', 'Completed Jobs': 30 },
  { name: 'Apr', 'Completed Jobs': 20 },
  { name: 'May', 'Completed Jobs': 64 },
  { name: 'Jun', 'Completed Jobs': 39 },
];

const LineGraph = () => {
  return (
    <LineChart width={1000} height={500} data={data}> 
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="Completed Jobs" stroke="#F8A47D" fill="#FFFF" activeDot={{ r: 8 }} />
    </LineChart>
  );
};

export default LineGraph;
