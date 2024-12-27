'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { DatePicker } from '@/components/DatePicker';

const BookingPage = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [time, setTime] = useState('');
  const [isDelivery, setIsDelivery] = useState(false); // Toggle between Taxi and Delivery

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isDelivery) {
      alert('Your Delivery Request is Successful!');
    } else {
      alert('Your Booking Is Successful!');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full h-64">
        <Image
          src="/taxi.jpg"
          alt="Taxi Service"
          layout="fill"
          objectFit="cover"
          className="opacity-80"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow bg-gray-100 py-10 px-4">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Toggle Section */}
            <div className="flex justify-between">
              <Button
                type="button"
                className={`w-1/2 py-3 rounded-l-lg ${
                  !isDelivery ? 'bg-yellow-500 text-white' : 'bg-gray-200 text-gray-700'
                }`}
                onClick={() => setIsDelivery(false)}
              >
                Book a Taxi
              </Button>
              <Button
                type="button"
                className={`w-1/2 py-3 rounded-r-lg ${
                  isDelivery ? 'bg-yellow-500 text-white' : 'bg-gray-200 text-gray-700'
                }`}
                onClick={() => setIsDelivery(true)}
              >
                Door-to-Door Delivery
              </Button>
            </div>

            {/* Shared Fields */}
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" type="text" placeholder="Enter your name" required className="mt-1" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" required className="mt-1" />
            </div>

            {/* Conditional Fields */}
            {!isDelivery ? (
              <>
                {/* Taxi Fields */}
                <div>
                  <Label htmlFor="pickup">Pickup Location</Label>
                  <Input id="pickup" type="text" placeholder="Enter pickup location" required className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="destination">Destination</Label>
                  <Input id="destination" type="text" placeholder="Enter destination" required className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="date">Date</Label>
                  <DatePicker selected={selectedDate} onChange={setSelectedDate} className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="time">Time</Label>
                  <Input
                    id="time"
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    required
                    className="mt-1"
                  />
                </div>
              </>
            ) : (
              <>
                {/* Delivery Fields */}
                <div>
                  <Label htmlFor="item">Item Description</Label>
                  <Input id="item" type="text" placeholder="Describe the item" required className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="pickup">Pickup Location</Label>
                  <Input id="pickup" type="text" placeholder="Enter pickup location" required className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="dropoff">Dropoff Location</Label>
                  <Input id="dropoff" type="text" placeholder="Enter dropoff location" required className="mt-1" />
                </div>
              </>
            )}

            {/* Payment Section */}
            <div>
              <Label htmlFor="payment">Payment Type</Label>
              <select
                id="payment"
                className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
              >
                <option value="cash">Cash</option>
                <option value="apple_pay">Apple Pay</option>
                <option value="payconiq">Payconiq</option>
              </select>
            </div>

            {/* Notes Section */}
            <div>
              <Label htmlFor="note">{isDelivery ? 'Delivery Note' : 'Note for the Driver'}</Label>
              <textarea
                id="note"
                rows="3"
                placeholder={
                  isDelivery
                    ? 'Enter specific delivery instructions (e.g., fragile item, leave at the door)'
                    : 'Enter a note for the driver (e.g., specific instructions)'
                }
                className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <Button type="submit" className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded">
                {isDelivery ? 'Schedule Delivery' : 'Book Now'}
              </Button>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BookingPage;
