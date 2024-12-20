'use client';

import { useEffect, useState } from 'react';

export default function DestinationsPage() {
    const [count, setCount] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDestinations = async () => {
            try {
                const response = await fetch('/api/destination-test');
                const data = await response.json();

                if (response.ok) {
                    setCount(data.count); // Set the count from the API response
                } else {
                    console.error('Error fetching destinations:', data.error);
                }
            } catch (error) {
                console.error('Error fetching destinations:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchDestinations();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Destinations</h1>
            <p>Total Destinations: {count}</p>
        </div>
    );
}
