import { useState } from "react";

import { Button, Card, CardContent, Input } from "@mui/material";

export default function Feedback() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && message.trim()) {
      // Handle sending logic here (e.g., API call)
      setSubmitted(true);
      setName("");
      setMessage("");
    }
  };

  return (
    <Card className="max-w-lg mx-auto p-6 mt-10 shadow-xl rounded-2xl">
      <CardContent>
        <h2 className="text-2xl font-semibold mb-4 text-center">Send us your Feedback</h2>

        {submitted ? (
          <div className="text-green-600 text-center font-medium">
            Thank you for your feedback!
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <Textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
              required
            />
            <Button type="submit" className="w-full">
              Submit Feedback
            </Button>
          </form>
        )}
      </CardContent>
    </Card>
  );
}
