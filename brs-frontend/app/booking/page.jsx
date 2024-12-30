'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';

const BookingPage = () => {
  const [selectedDate, setSelectedDate] = useState(undefined);
  const [time, setTime] = useState('');
  const [isDelivery, setIsDelivery] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isDelivery) {
      alert('Your Delivery Request is Successful!');
    } else {
      alert('Your Booking Is Successful!');
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/taxi.jpg"
          alt="Taxi Service"
          layout="fill"
          objectFit="cover"
          className="opacity-80"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        {/* Main Content */}
        <main className="flex-grow py-10 px-4" style={{ paddingTop: '100px' }}>
          <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm shadow-lg rounded-lg p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Toggle Section */}
              <div className="flex rounded-lg overflow-hidden border border-yellow-500">
                <Button
                  type="button"
                  variant={isDelivery ? 'ghost' : 'default'}
                  className={cn(
                    'w-1/2 py-3 rounded-none transition-colors',
                    !isDelivery && 'bg-yellow-500 hover:bg-yellow-600 text-white',
                    isDelivery && 'hover:bg-yellow-100 text-yellow-700'
                  )}
                  onClick={() => setIsDelivery(false)}
                >
                  Book a Taxi
                </Button>
                <Button
                  type="button"
                  variant={isDelivery ? 'default' : 'ghost'}
                  className={cn(
                    'w-1/2 py-3 rounded-none transition-colors',
                    isDelivery && 'bg-yellow-500 hover:bg-yellow-600 text-white',
                    !isDelivery && 'hover:bg-yellow-100 text-yellow-700'
                  )}
                  onClick={() => setIsDelivery(true)}
                >
                  Door-to-Door Delivery
                </Button>
              </div>

              {/* Shared Fields */}
              <div>
                <Label htmlFor="name" className="text-gray-700">Name</Label>
                <Input id="name" type="text" placeholder="Enter your name" required className="mt-1" />
              </div>
              <div>
                <Label htmlFor="email" className="text-gray-700">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" required className="mt-1" />
              </div>

              {/* Conditional Fields */}
              {!isDelivery ? (
                <>
                  {/* Taxi Fields */}
                  <div>
                    <Label htmlFor="pickup" className="text-gray-700">Pickup Location</Label>
                    <Input id="pickup" type="text" placeholder="Enter pickup location" required className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="destination" className="text-gray-700">Destination</Label>
                    <Input id="destination" type="text" placeholder="Enter destination" required className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="date" className="text-gray-700">Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            'w-full justify-start text-left font-normal mt-1',
                            !selectedDate && 'text-muted-foreground'
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {selectedDate ? format(selectedDate, 'PPP') : <span>Pick a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0 bg-white">
                        <Calendar
                          mode="single"
                          selected={selectedDate}
                          onSelect={setSelectedDate}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div>
                    <Label htmlFor="time" className="text-gray-700">Time</Label>
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
                    <Label htmlFor="item" className="text-gray-700">Item Description</Label>
                    <Input id="item" type="text" placeholder="Describe the item" required className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="pickup" className="text-gray-700">Pickup Location</Label>
                    <Input id="pickup" type="text" placeholder="Enter pickup location" required className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="dropoff" className="text-gray-700">Dropoff Location</Label>
                    <Input id="dropoff" type="text" placeholder="Enter dropoff location" required className="mt-1" />
                  </div>
                </>
              )}

              {/* Payment Section */}
              <div>
                <Label htmlFor="payment" className="text-gray-700">Payment Type</Label>
                <select
                  id="payment"
                  className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 bg-white"
                >
                  <option value="cash">Cash</option>
                  <option value="apple_pay">Apple Pay</option>
                  <option value="payconiq">Payconiq</option>
                </select>
              </div>

              {/* Notes Section */}
              <div>
                <Label htmlFor="note" className="text-gray-700">{isDelivery ? 'Delivery Note' : 'Note for the Driver'}</Label>
                <textarea
                  id="note"
                  rows={3}
                  placeholder={
                    isDelivery
                      ? 'Enter specific delivery instructions (e.g., fragile item, leave at the door)'
                      : 'Enter a note for the driver (e.g., specific instructions)'
                  }
                  className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 bg-white"
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
    </div>
  );
};

export default BookingPage;
