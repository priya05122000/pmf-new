import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

export const Pagination = () => (
    <div className="flex items-center justify-between pt-10 ">
        <button className="flex items-center gap-2 text-gray-900 font-medium bg-transparent border-none outline-none cursor-pointer">
            <ChevronLeftIcon className="w-5 h-5" />
            Previous
        </button>
        <nav className="flex items-center gap-2" aria-label="Pagination">
            <button className="w-8 h-8 flex items-center justify-center rounded-md bg-gray-100 text-gray-900 font-semibold cursor-pointer">1</button>
            <button className="w-8 h-8 flex items-center justify-center rounded-md text-gray-900 cursor-pointer">2</button>
            <button className="w-8 h-8 flex items-center justify-center rounded-md text-gray-900 cursor-pointer">3</button>
            <span className="w-8 h-8 flex items-center justify-center text-gray-400">...</span>
            <button className="w-8 h-8 flex items-center justify-center rounded-md text-gray-900 cursor-pointer">8</button>
            <button className="w-8 h-8 flex items-center justify-center rounded-md text-gray-900 cursor-pointer">9</button>
            <button className="w-8 h-8 flex items-center justify-center rounded-md text-gray-900 cursor-pointer">10</button>
        </nav>
        <button className="flex items-center gap-2 text-gray-900 font-medium bg-transparent border-none outline-none cursor-pointer">
            Next
            <ChevronRightIcon className="w-5 h-5" />
        </button>
    </div>
);