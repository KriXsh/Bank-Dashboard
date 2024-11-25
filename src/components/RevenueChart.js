import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mar', value: 2000 },
  { name: 'Apr', value: 2500 },
  { name: 'May', value: 1500 },
  { name: 'Jun', value: 2800 },
  { name: 'Jul', value: 3000 },
];

function RevenueChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="value" stroke="#61dafb" strokeWidth={3} dot={{ stroke: '#61dafb', strokeWidth: 2, r: 4 }} />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default RevenueChart;
