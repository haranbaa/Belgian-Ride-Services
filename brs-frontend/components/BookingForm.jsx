// BookingForm.jsx
'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue
} from '@/components/ui/select';
import { useState } from 'react';
import { DatePicker } from '@/components/DatePicker';

const BookingForm = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [time, setTime] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [driverNote, setDriverNote] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Your Booking Is Successful! We will confirm it soon.');
  };

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input id="name" type="text" placeholder="Enter your name" required className="mt-1" />
        </div>

        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="Enter your email" required className="mt-1" />
        </div>

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

        <div>
          <Label htmlFor="payment">Payment Type</Label>
          <Select onValueChange={(value) => setPaymentMethod(value)} required>
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Select Payment Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="cash">Cash</SelectItem>
              <SelectItem value="apple_pay">Apple Pay</SelectItem>
              <SelectItem value="payconiq">Payconiq</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="driverNote">Note for the Driver</Label>
          <Input
            id="driverNote"
            type="text"
            placeholder="Enter a note for the driver (e.g., specific instructions)"
            value={driverNote}
            onChange={(e) => setDriverNote(e.target.value)}
            className="mt-1"
          />
        </div>

        <div className="text-center">
          <Button type="submit" className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded">
            Book Now
          </Button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
