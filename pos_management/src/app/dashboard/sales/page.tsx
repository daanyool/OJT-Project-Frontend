'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import React, { useState } from 'react';
import Image from 'next/image';

export default function SalesPage() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const pathname = usePathname();

  const tabs = [
    { name: 'Sales', route: '/dashboard/sales' },
    { name: 'Inventory', route: '/dashboard/inventory' },
    { name: 'Finance', route: '/dashboard/finance' },
  ];

  return (
    <main className="p-2 m-4 flex flex-col gap-6 md:gap-10 h-[80vh]">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
        <h1 className="text-xl md:text-2xl font-bold">Sales</h1>
        <div className="flex items-center gap-4">
          <input 
            type="text"
            placeholder="Branch..."
            className="border rounded px-3 py-2 w-full md:w-auto"
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6 gap-4">
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
        <div className="flex flex-col sm:flex-row items-center gap-2">
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

      <div className="flex-1 flex gap-4">
        <div className='flex flex-col gap-4 w-full lg:w-2/3'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
            <Card className="border shadow-sm h-24 md:h-32">
              <CardHeader className="p-2 md:p-2">
                <CardTitle className="text-sm md:text-sm font-semibold">Today Sales</CardTitle>
              </CardHeader>
            </Card>
            <Card className="border shadow-sm h-24 md:h-32">
              <CardHeader className="p-2 md:p-2">
                <CardTitle className="text-sm md:text-sm font-semibold">Today Orders</CardTitle>
              </CardHeader>
            </Card>
            <Card className="border shadow-sm h-24 md:h-32 sm:col-span-2 md:col-span-1">
              <CardHeader className="p-2 md:p-2">
                <CardTitle className="text-sm md:text-sm font-semibold">Today Revenue</CardTitle>
              </CardHeader>
            </Card>
          </div>
          <Card className="border shadow-sm flex-1 min-h-[200px]">
            <CardHeader className="p-3 md:p-4">
              <CardTitle className="text-sm md:text-lg font-bold">Stores Sales</CardTitle>
            </CardHeader>
          </Card>
        </div>

        <Card className="border shadow-sm w-full h-150 min-h-[400px]">
          <CardHeader className="p-3 md:p-4 text-left">
            <CardTitle className="text-sm md:text-lg font-bold">Analytics Chart</CardTitle>
          </CardHeader>
        </Card>
      </div>
        <footer className="text-right text-sm text-gray-500 py-4"> 
          <span className='align-middle'>&copy;Powered By:</span>
          <Image className='inline-block mb-1'
            src="/Logo_RAI.png"
            alt="Your Company Logo"
            width={100}
            height={55}
          />
        </footer>

    </main>
    
  )
}
