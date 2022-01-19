import { format, parseISO } from "date-fns";
import { subDays } from "date-fns/esm";
import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "styles/admin/dashboard/chart.css";

const data = [];
for (let index = 30; index >= 0; index--) {
  data.push({
    date: subDays(new Date(), index).toISOString().substring(0, 10),
    price: Math.floor(Math.random(0, 100) * 100),
  });
}
const AreaGraph = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1976d2" stopOpacity={0.6}></stop>
            <stop offset="75%" stopColor="#1976d2" stopOpacity={0.09}></stop>
          </linearGradient>
        </defs>
        <Area
          stroke="#2451B7"
          type="monotone"
          dataKey="price"
          fill="url(#color)"
        />
        <XAxis
          dataKey="date"
          axisLine={false}
          tickLine={false}
          tickFormatter={(str) => {
            return "";
          }}
        />
        <YAxis
          dataKey="price"
          axisLine={false}
          tickLine={false}
          tickCount={4}
        />
        <Tooltip content={<CustomTooltip />} />
        <CartesianGrid opacity={0.4} vertical={false} />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default AreaGraph;

const CustomTooltip = ({ active, payload, label }) => {
  if (active) {
    return (
      <div className="tooltip">
        <h4>{format(parseISO(label), "eeee, d MMM, yyyy")}</h4>
        <p>Price: ${payload[0]?.payload.price}</p>
      </div>
    );
  } else {
    return null;
  }
};
