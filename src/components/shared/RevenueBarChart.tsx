"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { Card, CardContent } from "@/components/ui/card";

type ChartData = {
  name: string;
  revenue: number;
};

type Props = {
  data: ChartData[];
};

const RevenueBarChart = ({ data }: Props) => {
  return (
    <Card>
      <CardContent className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            {/* Grid */}
            <CartesianGrid stroke="#e5e7eb" strokeDasharray="3 3" />

            {/* X Axis */}
            <XAxis
              dataKey="name"
              stroke="#6b7280"
              tick={{ fill: "#6b7280", fontSize: 12 }}
            />

            {/* Y Axis */}
            <YAxis stroke="#6b7280" tick={{ fill: "#6b7280", fontSize: 12 }} />

            {/* Tooltip */}
            <Tooltip
              contentStyle={{
                backgroundColor: "#ffffff",
                border: "1px solid #e5e7eb",
                color: "#111827",
                borderRadius: "8px",
              }}
            />

            {/* Bar */}
            <Bar
              dataKey="revenue"
              fill="#3b82f6" // blue-500
              radius={[6, 6, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default RevenueBarChart;
