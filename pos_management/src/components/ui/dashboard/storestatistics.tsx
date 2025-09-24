"use client";
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import {
  BarChart,
  Bar,
  Cell,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip
} from 'recharts';
interface StoreStatisticsProps {
  storesStatsData: { name: string; sales: number }[];
}

export default function StoreStatistics({ storesStatsData }: StoreStatisticsProps) {
  return (
    <Card className="border shadow-sm w-full min-h-[220px] md:min-h-[300px] lg:min-h-[400px] flex-1 flex flex-col">
      <CardHeader className="p-3 md:p-4 text-left">
        <CardTitle className="text-sm md:text-lg font-bold">Stores Statistics</CardTitle>
      </CardHeader>
      <div className="flex-1 w-full h-[180px] md:h-[240px] lg:h-[320px] px-2 pb-2">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={[...storesStatsData].sort((a, b) => b.sales - a.sales)}
            layout="vertical"
            margin={{ top: 10, right: 20, left: 10, bottom: 10 }}
            barCategoryGap={12}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" tick={{ fontSize: 12 }} hide={false} />
            <YAxis dataKey="name" type="category" tick={{ fontSize: 13 }} width={110} />
            <Tooltip formatter={value => `₱${value}`} />
            <Bar dataKey="sales" fill="#2563eb" radius={[6, 6, 6, 6]}>
              {
                storesStatsData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={index === 0 ? '#16a34a' : '#2563eb'} />
                ))
              }
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}