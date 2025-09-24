import { Skeleton } from '@/components/ui/skeleton';
export function SummaryCardsSkeleton() {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
			<Skeleton className="h-24 md:h-32 lg:h-36 w-full" />
			<Skeleton className="h-24 md:h-32 lg:h-36 w-full" />
			<Skeleton className="h-24 md:h-32 lg:h-36 w-full sm:col-span-2 md:col-span-1" />
		</div>
	);
}
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

export interface SummaryCardsData {
	todaySales: number;
	todaySalesChange: number;
	todayOrders: number;
	todayRevenue: number;
	todayRevenueChange: number;
}

interface SummaryCardsProps {
	data: SummaryCardsData;
}

export default function SummaryCards({ data }: SummaryCardsProps) {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
			<Card className="border shadow-sm h-24 md:h-32 lg:h-36 flex flex-col justify-between">
				<CardHeader className="flex flex-row items-center gap-3 pb-2">
					<TrendingUp className="text-blue-600 w-6 h-6 md:w-7 md:h-7" />
					<CardTitle className="text-sm md:text-base lg:text-lg font-semibold">Today Sales</CardTitle>
				</CardHeader>
				<div className="px-4 pb-3">
					<div className="text-2xl md:text-3xl font-bold">{data.todaySales}</div>
					<div className="text-xs text-gray-500">{data.todaySalesChange >= 0 ? '+' : ''}{data.todaySalesChange}% from yesterday</div>
				</div>
			</Card>
			<Card className="border shadow-sm h-24 md:h-32 lg:h-36 flex flex-col justify-between">
				<CardHeader className="flex flex-row items-center gap-3 pb-2">
					<ShoppingCart className="text-green-600 w-6 h-6 md:w-7 md:h-7" />
					<CardTitle className="text-sm md:text-base lg:text-lg font-semibold">Today Orders</CardTitle>
				</CardHeader>
				<div className="px-4 pb-3">
					<div className="text-2xl md:text-3xl font-bold">{data.todayOrders}</div>
					<div className="text-xs text-gray-500">{data.todayOrders} orders today</div>
				</div>
			</Card>
			<Card className="border shadow-sm h-24 md:h-32 lg:h-36 flex flex-col justify-between sm:col-span-2 md:col-span-1">
				<CardHeader className="flex flex-row items-center gap-3 pb-2">
					<Image src="/peso.png" alt="Peso" width={28} height={28} className="w-6 h-6 md:w-7 md:h-7" />
					<CardTitle className="text-sm md:text-base lg:text-lg font-semibold">Today Revenue</CardTitle>
				</CardHeader>
				<div className="px-4 pb-3">
					<div className="text-2xl md:text-3xl font-bold">₱{data.todayRevenue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
					<div className="text-xs text-gray-500">{data.todayRevenueChange}% from yesterday</div>
				</div>
			</Card>
		</div>
	);
}
