'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import SummaryCards, { SummaryCardsData, SummaryCardsSkeleton } from '@/components/ui/dashboard/summarycards';
import React, { useState, Suspense } from 'react';

import BranchSales from '@/components/ui/dashboard/branchsales';
import StoreStatistics from '@/components/ui/dashboard/storestatistics';
import { storesStatsData, storeSalesData } from '@/components/ui/dashboard/mockdata';

import Footer from '@/components/ui/footer';
import { Skeleton } from '@/components/ui/skeleton';

export default function SalesPage() {
  
  const summaryCardsData: SummaryCardsData = {
    todaySales: 0,
    todaySalesChange: 0,
    todayOrders: 0,
    todayRevenue: 0,
    todayRevenueChange: 0,
  };
  
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const pathname = usePathname();

  const tabs = [
    { name: 'Sales', route: '/dashboard/sales' },
    { name: 'Inventory', route: '/dashboard/inventory' },
    { name: 'Finance', route: '/dashboard/finance' },
  ];

  // storeSalesData is now imported from mockdata.ts

  return (
  <main className="flex flex-col gap-4 md:gap-8 lg:gap-10 w-full h-full min-h-screen px-2 md:px-6 lg:px-12 py-2">
  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 md:mb-4 gap-2 md:gap-4 w-full">
  <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">Sales</h1>
        <div className="flex items-center gap-2 md:gap-4 w-full md:w-auto">
          <input 
            type="text"
            placeholder="Branch..."
            className="border rounded px-3 py-2 w-full md:w-auto"
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4 md:mb-6 gap-2 md:gap-4 w-full">
        <div className="flex bg-gray-100 p-2 rounded-md w-full lg:w-max overflow-x-auto">
          {tabs.map(tab => (
            <Link
              key={tab.name}
              href={tab.route}
              className={`px-4 md:px-6 py-2 rounded-md font-medium border transition-colors whitespace-nowrap ${
                pathname === tab.route
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-100'
              }`}
            >
              {tab.name}
            </Link>
          ))}
        </div>
  <div className="flex flex-col sm:flex-row items-center gap-2 w-full sm:w-auto">
          <input
            type="date"
            value={startDate}
            onChange={e => setStartDate(e.target.value)}
            className="border rounded px-3 py-2 w-full sm:w-auto"
          />
          <span className="mx-2 font-semibold">TO</span>
          <input
            type="date"
            value={endDate}
            onChange={e => setEndDate(e.target.value)}
            className="border rounded px-3 py-2 w-full sm:w-auto"
          />
        </div>
      </div>

      <div className="flex-1 flex flex-col lg:flex-row gap-4 w-full">
        <div className="flex flex-col gap-4 w-full lg:w-2/3">
          <Suspense fallback={<SummaryCardsSkeleton />}>
            <SummaryCards data={summaryCardsData} />
          </Suspense>
          <Suspense fallback={<Skeleton className="w-full h-48" />}>
            <BranchSales storeSalesData={storeSalesData} />
          </Suspense>
        </div>
        <div className="w-full lg:w-1/3 flex">
          <Suspense fallback={<Skeleton className="w-full h-[320px]" />}>
            <StoreStatistics storesStatsData={storesStatsData} />
          </Suspense>
        </div>
      </div>
      <Footer />
    </main>
    
  )
}
