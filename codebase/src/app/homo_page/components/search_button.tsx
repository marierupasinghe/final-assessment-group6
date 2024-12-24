'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const destinations = [
    { name: 'Central Province', url: '/destinations/central' },
    { name: 'Eastern Province', url: '/destinations/eastern' },
    { name: 'Northern Province', url: '/destinations/northern' },
    { name: 'Southern Province', url: '/destinations/southern' },
    { name: 'Western Province', url: '/destinations/western' },
    { name: 'North Western Province', url: '/destinations/north-western' },
    { name: 'North Central Province', url: '/destinations/north-central' },
    { name: 'Uva Province', url: '/destinations/uva' },
    { name: 'Sabaragamuwa Province', url: '/destinations/sabaragamuwa' },
];

const festivals = [
    { name: 'January', url: '/festivals/january' },
    { name: 'February', url: '/festivals/february' },
    { name: 'March', url: '/festivals/march' },
    { name: 'April', url: '/festivals/april' },
    { name: 'May', url: '/festivals/may' },
    { name: 'June', url: '/festivals/june' },
    { name: 'July', url: '/festivals/july' },
    { name: 'August', url: '/festivals/august' },
    { name: 'September', url: '/festivals/september' },
    { name: 'October', url: '/festivals/october' },
    { name: 'November', url: '/festivals/november' },
    { name: 'December', url: '/festivals/december' },
];

export default function SearchComponent() {
    const [searchType, setSearchType] = useState<'destinations' | 'festivals'>('destinations');
    const [searchInput, setSearchInput] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    const data = searchType === 'destinations' ? destinations : festivals;

    const filteredData = data.filter((item) =>
        item.name.toLowerCase().includes(searchInput.toLowerCase())
    );

    // Navigate to URL if the input fully matches a name
    useEffect(() => {
        const matchedItem = data.find(
            (item) => item.name.toLowerCase() === searchInput.toLowerCase()
        );
        if (matchedItem) {
            router.push(matchedItem.url);
        }
    }, [searchInput, data, router]);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative w-80 " ref={dropdownRef}>
            {/* Search Input */}
            <input
                type="text"
                placeholder="Search..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                onClick={() => setIsOpen(!isOpen)}
                className="w-full p-3 rounded-full border bg-gray-700  focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {isOpen && (
                <>
                    {/* Tabs */}
                    <div className="flex justify-evenly mt-2 ">
                        <button
                            onClick={() => setSearchType('destinations')}
                            className={`text-sm font-semibold ${
                                searchType === 'destinations' ? 'text-blue-300' : 'text-white'
                            }`}
                        >
                            Destinations
                        </button>
                        <button
                            onClick={() => setSearchType('festivals')}
                            className={`text-sm font-semibold ${
                                searchType === 'festivals' ? 'text-blue-300' : 'text-white'
                            }`}
                        >
                            Festivals
                        </button>
                    </div>

                    {/* Dropdown List */}
                    <div className="absolute top-20 bg-white w-full rounded-lg shadow-lg p-4 max-h-60 overflow-y-auto border border-gray-300 text-black">
                        <h4 className="text-sm font-bold mb-2">
                            {searchType === 'destinations' ? 'Destinations' : 'Festivals'}
                        </h4>
                        {filteredData.length > 0 ? (
                            filteredData.map((item, index) => (
                                <div
                                    key={index}
                                    onClick={() => router.push(item.url)}
                                    className="text-sm py-1 hover:text-blue-500 cursor-pointer"
                                >
                                    {item.name}
                                </div>
                            ))
                        ) : (
                            <div className="text-sm text-gray-500">No results found</div>
                        )}
                    </div>
                </>
            )}
        </div>
    );
}
