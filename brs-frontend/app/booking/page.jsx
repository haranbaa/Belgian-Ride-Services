'use client';
import Navbar from "../components/Navbar"; 
import Footer from "../components/Footer"; 
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

const BookingPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your Booking Is Successful! We will confirm it soon.");
  };

  return (
    <div className="bg-black text-yellow-500 min-h-screen">
      <Navbar /> {/* Use Navbar */}
      <div className="relative w-full h-64">
        <Image
          src="/taxi.jpg" 
          alt="Taxi Image"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <h1 className="text-center text-2xl mt-4">Book Your Trip</h1>
      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto mt-8 p-4 border rounded bg-black">
        <div className="mb-4">
          <Label htmlFor="name">Your Name:</Label>
          <Input type="text" id="name" required />
        </div>
        <div className="mb-4">
          <Label htmlFor="pickup">Pick Up:</Label>
          <Input type="text" id="pickup" required />
        </div>
        <div className="mb-4">
          <Label htmlFor="dropoff">Drop Off:</Label>
          <Input type="text" id="dropoff" required />
        </div>
        <div className="mb-4">
          <Label htmlFor="date">When:</Label>
          <Input type="date" id="date" required />
        </div>
        <div className="mb-4">
          <Label htmlFor="time">Time:</Label>
          <Input type="time" id="time" required />
        </div>
        <div className="mb-4">
          <Label htmlFor="carType">Type of Car:</Label>
          <Select id="carType" required>
            <SelectTrigger>
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="electrical">Electrical</SelectItem>
              <SelectItem value="non-electrical">Non-Electrical</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="mb-4">
          <Label htmlFor="passengers">Passengers:</Label>
          <Input type="number" id="passengers" min="1" required />
        </div>
        <div className="mb-4">
          <Label htmlFor="email">Your Email:</Label>
          <Input type="email" id="email" required />
        </div>
        <div className="mb-4">
          <Label htmlFor="phone">Your Phone Number:</Label>
          <Input type="tel" id="phone" required />
        </div>
        <Button type="submit" className="w-full mt-4">Submit</Button>
      </form>
      <Footer /> 
    </div>
  );
};

export default BookingPage;