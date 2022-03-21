import React from "react";
import "./Chart.css";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";



const Chart = ({data,title,grid,dataKey}) => {
  return (
    <>
      <h5 style={{ marginTop: 20, marginLeft: 40, color: "gray" }}>
       {title}
      </h5>
      <ResponsiveContainer width="100%" height="30%">
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 5, right: 50, left: 50, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopOpacity={0.8} />
              <stop offset="95%" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey={dataKey}
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
};

export default Chart;
