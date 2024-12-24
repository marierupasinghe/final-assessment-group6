'use client'

import { useState } from 'react';
import { SlCalender } from "react-icons/sl";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Still import the base styles for layout

export default function Calender() {
    const [isCalendarVisible, setIsCalendarVisible] = useState(false);
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    const toggleCalendar = () => {
        setIsCalendarVisible(!isCalendarVisible);
    };

    const handleDateChange = (date: Date) => {
        setSelectedDate(date);
        setIsCalendarVisible(false); // Hide calendar after selecting a date
    };

    return (
        <div className="relative">
            {/* Calendar Button */}
            <button 
                className="bg-blue-600 text-white rounded-full w-full max-w-[160px] px-4 py-2 font-semibold flex items-center justify-between cursor-pointer hover:bg-blue-700 transition"
                onClick={toggleCalendar}
            >
                Calendar
                <SlCalender className="ml-2 text-lg" />
            </button>

            {/* Display the selected date */}
            {selectedDate && (
                <div className="mt-2 text-blue-500 font-medium">
                    <p>Selected Date: {selectedDate.toLocaleDateString()}</p>
                </div>
            )}

            {/* Conditional rendering of the calendar */}
            {isCalendarVisible && (
                <div className="absolute mt-4 bg-gray-800 text-black shadow-lg rounded-lg w-80 p-4 border z-10">
                    <Calendar 
                        value={selectedDate}
                        className="custom-calendar" // Custom class for further control
                    />
                </div>
            )}
        </div>
    );
}
