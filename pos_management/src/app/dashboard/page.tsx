'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import React, { useState } from 'react';
import Image from 'next/image';

export default function DashboardPage() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [selectedBranch, setSelectedBranch] = useState('');
  const pathname = usePathname();

  const tabs = [
    { name: 'Sales', route: '/dashboard/sales' },
    { name: 'Inventory', route: '/dashboard/inventory' },
    { name: 'Finance', route: '/dashboard/finance' },
  ];

  const branches = [
    { value: '', label: 'Select Branch' },
    { value: 'north', label: 'North Branch' },
    { value: 'south', label: 'South Branch' },
    { value: 'east', label: 'East Branch' },
    { value: 'west', label: 'West Branch' },
  ];

  return (
    <main className="p-2 m-4 flex flex-col gap-10 h-[80vh]">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="flex items-center gap-4">
          <select
            value={selectedBranch}
            onChange={e => setSelectedBranch(e.target.value)}
            className="border rounded px-3 py-2"
          >
            {branches.map(branch => (
              <option key={branch.value} value={branch.value}>
                {branch.label}
              </option>
            ))}
          </select>
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
      <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-2">
        <Card className="w-100 h-100 border shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg font-bold">Card Title</CardTitle>
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
