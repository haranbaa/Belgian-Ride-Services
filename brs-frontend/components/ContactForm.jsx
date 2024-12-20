import { Form } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactForm = () => {
    return (
        <div className="mx-20">
                <Form>
                    <Label htmlFor="name">Name:</Label>
                    <Input
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    required
                    />
                    <Label htmlFor="phoneNumber">Phone number:</Label>
                    <Input
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder="Enter your number"
                    required
                    />
                    <Label htmlFor="email">Email:</Label>
                    <Input
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                    />
                    <Label htmlFor="message">Message:</Label>
                    <Textarea
                    id="message"
                    name="message"
                    placeholder="Enter your message"
                    required
                    />
                </Form>
            </div>
    )
}

export default ContactForm;