'use client';
import Navbar from '@/components/Navbar';
import Footer from "@/components/Footer"; 
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue
} from "@/components/ui/select";
import { useState } from "react";
import { DatePicker } from "@/components/DatePicker";

const BookingPage = () => {
  const [ selectedDate, setSelectedDate]= useState(null);
  const [ time, setTime] =useState( ' ' );

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your Booking Is Successful! We will confirm it soon.");
  };

  return (
    <div className="bg-black text-black font-bold  min-h-screen">
      <Navbar /> 
      <div className="relative w-full h-64">
        <Image
          src="/taxi.jpg" 
          alt="Taxi Image"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <h1 className="text-center text-4xl font-bold  mt-4">Book Your Trip</h1>
      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto mt-8 p-4 border rounded bg-gray-200 ">
        <div className="mb-4 ">
          <Label htmlFor="name" className="text-black font-bold text-md">Your Name:</Label>
          <Input type="text" id="name" required  className="bg-gray-50 shadow-sm shadow-gray-600 text-black font-semibold" />
        </div>
        <div className="mb-4">
          <Label htmlFor="pickup"
          className="text-black font-bold text-md">Pick Up:</Label>
          <Input type="text" id="pickup" required className="bg-gray-50 shadow-sm shadow-gray-600 text-black font-semibold" />
        </div>
        <div className="mb-4">
          <Label htmlFor="dropoff" className="text-black font-bold text-md">Drop Off:</Label>
          <Input type="text" id="dropoff" required className="bg-gray-50 shadow-sm shadow-gray-600 text-black font-semibold"/>
        </div>

        {/* Date Picker Component */}
        <div className="mb-4">
          <Label htmlFor="date" className="text-black font-bold text-md">When:</Label>
          <DatePicker selectedDate={selectedDate} setSelectedDate={setSelectedDate}  />
        </div>
        
        {/* Manual Time Input */}
        <div className="mb-4">
          <Label htmlFor="time" className="text-black font-bold text-md">Time:</Label>
          <Input 
            type="time" 
            id="time" 
            value={time} 
            onChange={(e) => setTime(e.target.value)} 
            required 
            className="bg-gray-50 shadow-sm shadow-gray-600  text-black font-bold"
          />
        </div>

        <div className="mb-4">
          <Label htmlFor="carType" className="text-black font-bold text-md">Type of Car:</Label>
          <Select id="carType" required >
            <SelectTrigger className="bg-gray-50 shadow-sm shadow-gray-600 font-semibold">
              <SelectValue placeholder="Select type"  />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="electrical">Electrical</SelectItem>
              <SelectItem value="non-electrical">Non-Electrical</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="mb-4">
          <Label htmlFor="passengers" className="text-black font-bold text-md">Passengers:</Label>
          <Input type="number" id="passengers" min="1" max="5" required className="bg-gray-50 shadow-sm shadow-gray-600 font-semibold" />
        </div>
        <div className="mb-4">
          <Label htmlFor="email" className="text-black font-bold text-md">Your Email:</Label>
          <Input type="email" id="email" required  className="bg-gray-50 shadow-sm shadow-gray-600 font-semibold"/>
        </div>
        <div className="mb-4">
          <Label htmlFor="phone" className="text-black font-bold text-md">Your Phone Number:</Label>
          <Input type="tel" id="phone" required  className="bg-gray-50 shadow-sm shadow-gray-600 font-semibold"/>
        </div>
        <Button type="submit" className="w-full mt-4  bg-yellow-500 text-black  text-xl font-bold rounded-lg shadow hover:bg-green-600">Submit</Button>
      </form>
      <Footer /> 
    </div>
  );
};

export default BookingPage;