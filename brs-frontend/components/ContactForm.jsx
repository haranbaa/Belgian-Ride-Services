import { Form } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "./ui/button";
const ContactForm = () => {
    return (
        <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm shadow-lg rounded-lg p-9" id="form">
                <Form>
                  <h1>Contact form</h1>
                  <p>Please contact us using the contact form below. You will receive a response from us as soon as possible.</p>
                    <Label htmlFor="name" className="text-gray-700">Name</Label>
                    <Input
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    required
                    />
                    <Label htmlFor="phoneNumber" className="text-gray-700">Phone number</Label>
                    <Input
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder="Enter your number"
                    required
                    />
                    <Label htmlFor="email" className="text-gray-700">Email</Label>
                    <Input
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                    />
                    <Label htmlFor="message" className="text-gray-700">Message</Label>
                    <Textarea
                    id="message"
                    name="message"
                    placeholder="Enter your message"
                    required
                    />
                    <Button className="bg-yellow-500 hover:bg-yellow-600 text-white mt-5">Submit</Button>
                </Form>
            </div>
    )
}
export default ContactForm;