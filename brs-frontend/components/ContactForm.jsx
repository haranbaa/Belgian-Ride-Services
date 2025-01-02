import { Form } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "./ui/button";

const ContactForm = () => {
    return (
        <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm shadow-lg rounded-lg p-9 mt-12" id="form">
            <h1 className="text-2xl font-bold mb-4">Contact Form</h1>
            <p className="mb-6 text-lg">Please fill out the contact form below. We’ll get back to you as soon as possible.</p>
            <Form>
                <div className="space-y-4">
                    <div>
                        <Label htmlFor="name" className="text-gray-700">Name</Label>
                        <Input id="name" name="name" placeholder="Enter your name" required className="w-full p-3 mt-1 rounded-md border border-gray-300 focus:ring-2 focus:ring-yellow-500"/>
                    </div>
                    <div>
                        <Label htmlFor="phoneNumber" className="text-gray-700">Phone Number</Label>
                        <Input id="phoneNumber" name="phoneNumber" placeholder="Enter your phone number" required className="w-full p-3 mt-1 rounded-md border border-gray-300 focus:ring-2 focus:ring-yellow-500"/>
                    </div>
                    <div>
                        <Label htmlFor="email" className="text-gray-700">Email</Label>
                        <Input id="email" name="email" placeholder="Enter your email" required className="w-full p-3 mt-1 rounded-md border border-gray-300 focus:ring-2 focus:ring-yellow-500"/>
                    </div>
                    <div>
                        <Label htmlFor="message" className="text-gray-700">Message</Label>
                        <Textarea id="message" name="message" placeholder="Enter your message" required className="w-full p-3 mt-1 rounded-md border border-gray-300 focus:ring-2 focus:ring-yellow-500"/>
                    </div>
                    <div className="flex justify-center mt-5">
                      <Button className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-6 rounded-lg shadow-lg">Submit</Button>
                    </div>
                </div>
            </Form>
        </div>
    );
};

export default ContactForm;
