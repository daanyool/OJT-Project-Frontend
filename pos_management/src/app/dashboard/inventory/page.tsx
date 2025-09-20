'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import React, { useState } from 'react';
import Image from 'next/image';
import Footer from '@/components/ui/footer';



export default function InventoryPage() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const pathname = usePathname();

  const tabs = [
    { name: 'Sales', route: '/dashboard/sales' },
    { name: 'Inventory', route: '/dashboard/inventory' },
    { name: 'Finance', route: '/dashboard/finance' },
  ];

  return (
    <main className="p-2 m-4 flex flex-col gap-10 h-[80vh]">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Inventory</h1>
        <div className="flex items-center gap-4">
          <input 
            type="text"
            placeholder="Branch..."
            className="border rounded px-3 py-2"
          />
        </div>
      </div>
      {/* Tab Buttons and Date Range Picker */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex bg-gray-100 p-2 rounded-md w-max">
          {tabs.map(tab => (
            <Link
              key={tab.name}
              href={tab.route}
              className={`px-6 py-2 rounded-md font-medium border transition-colors ${
                pathname === tab.route
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-100'
              }`}
            >
              {tab.name}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <input
            type="date"
            value={startDate}
            onChange={e => setStartDate(e.target.value)}
            className="border rounded px-3 py-2"
          />
          <span className="mx-2 font-semibold">TO</span>
          <input
            type="date"
            value={endDate}
            onChange={e => setEndDate(e.target.value)}
            className="border rounded px-3 py-2"
          />
        </div>
      </div>
      {/* Cards */}
      <div className='flex flex-col lg:flex-row gap-5 h-[100vh]'>
        <div className="flex-1 grid grid-cols-3 grid-rows-1 gap-5">
        <Card className="w-[100%] h-[100%] border shadow-sm border-blue-500">
          <CardHeader>
            <CardTitle className="text-lg font-bold">Card Title 1</CardTitle>
          </CardHeader>
        </Card>
        <Card className="w-[100%] h-[100%] border shadow-sm border-blue-500">
          <CardHeader>
            <CardTitle className="text-lg font-bold">Card Title 2</CardTitle>
          </CardHeader>
        </Card>
        <Card className="w-[100%] h-100 border shadow-sm border-blue-500">
          <CardHeader>
            <CardTitle className="text-lg font-bold">Card Title 3</CardTitle>
          </CardHeader>
        </Card>
        </div>
       </div>
        <div className="flex-1 grid grid-cols-2 grid-rows-1 gap-5 h-[100%]">
          <Card className="w-[100%] h-80 border shadow-sm border-blue-500">
          <CardHeader>
            <CardTitle className="text-lg font-bold">Card Title</CardTitle>
          </CardHeader>
        </Card>
        <Card className="w-[100%] h-80 border shadow-sm border-blue-500">
          <CardHeader>
            <CardTitle className="text-lg font-bold">Card Title</CardTitle>
          </CardHeader>
        </Card>
      </div>
      <div className="flex-1 grid grid-cols-2 grid-rows-1 gap-5 h-[100%]">
          <Card className="w-[100%] h-80 border shadow-sm border-blue-500">
          <CardHeader>
            <CardTitle className="text-lg font-bold">Card Title</CardTitle>
          </CardHeader>
        </Card>
        <Card className="w-[100%] h-80 border shadow-sm border-blue-500">
          <CardHeader>
            <CardTitle className="text-lg font-bold">Card Title</CardTitle>
          </CardHeader>
        </Card>
      </div>
      <Footer />
    </main>
  )
}
