'use client';

import { useEffect, useState } from 'react';

type Destination = {
    id: number;
    name: string;
    description: string;
};

export default function DestinationsPage() {
    const [count, setCount] = useState(0);
    const [destinations, setDestinations] = useState<Destination[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDestinations = async () => {
            try {
                const response = await fetch('/api/destination-test');
                const data = await response.json();

                if (response.ok) {
                    setCount(data.count); // Set the count from the API response
                    setDestinations(data.destinations); // Set the list of destinations
                } else {
                    console.log('Error fetching destinations:', data.error);
                }
            } catch (error) {
                console.log('Error fetching destinations:', error);
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
            <ul>
                {destinations.map((destination) => (
                    <li key={destination.id}>
                        <h3>{destination.name}</h3>
                        <p>{destination.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
