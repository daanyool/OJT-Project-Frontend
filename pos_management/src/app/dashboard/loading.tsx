
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
    return (
        <main className="flex flex-col gap-10 md:gap-8 lg:gap-10 w-full h-full min-h-screen px-2 md:px-6 lg:px-12 py-2">
            
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 md:mb-4 gap-2 md:gap-4 w-full">
                <Skeleton className="h-8 w-32" />
                <Skeleton className="h-10 w-40" />
            </div>
            
            <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4 md:mb-6 gap-2 md:gap-4 w-full">
                <Skeleton className="h-10 w-64" />
                <Skeleton className="h-10 w-64" />
            </div>
            

            <div className="grid grid-cols-3 gap-10 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-3 lg:gap-4 h-[60vh]">
                <Skeleton className="h-100 w-full" />
                <Skeleton className="h-100 w-full" />
                <Skeleton className="h-100 w-full" />
                <div className="lg:col-start-1 lg:col-span-2 flex gap-5">
                    <Skeleton className="h-50 w-full" />
                    <Skeleton className="h-50 w-full" />
                </div>
                <div className="lg:col-start-1 lg:col-span-2 flex gap-4">
                    <Skeleton className="h-50 w-full" />
                    <Skeleton className="h-50 w-full" />
                    <Skeleton className="h-50 w-full" />
                </div>
            </div>
        </main>
    );
}