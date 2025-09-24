"use client";
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer
} from 'recharts';

interface BranchSalesProps {
	storeSalesData: { date: string; sales: number }[];
}

export default function BranchSales({ storeSalesData }: BranchSalesProps) {
	return (
		<Card className="border shadow-sm flex-1 min-h-[180px] md:min-h-[200px] lg:min-h-[260px] flex flex-col">
			<CardHeader>
				<CardTitle className="text-sm md:text-lg font-bold">Branch Sales</CardTitle>
			</CardHeader>
			<div className="flex-1 w-full h-[160px] md:h-[200px] lg:h-[220px] px-2 pb-2">
				<ResponsiveContainer width="100%" height="100%">
					<LineChart data={storeSalesData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis dataKey="date" tick={{ fontSize: 12 }} />
						<YAxis />
						<Tooltip />
						<Line type="monotone" dataKey="sales" stroke="#2563eb" strokeWidth={5} dot={{ r: 4 }} activeDot={{ r: 6 }} />
					</LineChart>
				</ResponsiveContainer>
			</div>
		</Card>
	);
}

