import React from "react";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  {
    name: "Closed",
    value: 2400,
  },
  {
    name: "Open",
    value: 4567,
  },
];
const PieGraph = () => {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          innerRadius={60}
          outerRadius={80}
          label
        >
          {data.map(
            (entry, index) => (
              console.log(entry),
              (
                <Cell
                  key={`cell-${index}`}
                  fill={entry?.name === "Closed" ? "#00d200" : "#1976d2"}
                />
              )
            ),
          )}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PieGraph;
const CustomTooltip = ({ active, payload, label }) => {
  if (active) {
    return (
      <div className="tooltip">
        <h4>label</h4>
        <p>Price: ${payload[0]?.payload.price}</p>
      </div>
    );
  } else {
    return null;
  }
};
