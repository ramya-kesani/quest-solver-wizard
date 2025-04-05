
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import ServerResponse from '@/components/ServerResponse';

const Index = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [serverResponse, setServerResponse] = useState<null | { name: string; email: string; message: string; timestamp: string }>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  // Simulate server processing
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!name || !email || !message) {
      toast({
        title: "Validation Error",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }

    // Simulate server processing delay
    setIsLoading(true);
    
    // Simulate server-side processing
    setTimeout(() => {
      // This would normally be handled by an actual server endpoint
      const serverData = {
        name,
        email,
        message,
        timestamp: new Date().toISOString()
      };
      
      setServerResponse(serverData);
      setIsLoading(false);
      
      toast({
        title: "Form Submitted",
        description: "Your data has been processed by the server",
      });
      
      console.log("Server processed data:", serverData);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-pink-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Level 1: Beginner - HTML Structure and Server Interaction
          </h1>
          <p className="mt-2 text-xl text-gray-600">
            Task 1: Form submission with server-side rendering demonstration
          </p>
          <div className="mt-4 flex justify-center">
            <img 
              src="/lovable-uploads/3d3c267b-7dc2-43e8-925c-d25950b26e54.png" 
              alt="Cognifyz Task" 
              className="w-full max-w-md rounded-lg shadow-md" 
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Client-side Form */}
          <Card>
            <CardHeader>
              <CardTitle>User Input Form</CardTitle>
              <CardDescription>Fill out this form to see server-side rendering in action</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input 
                    id="name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    placeholder="Enter your name" 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder="Enter your email" 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    value={message} 
                    onChange={(e) => setMessage(e.target.value)} 
                    placeholder="Enter your message" 
                    rows={3} 
                  />
                </div>
                
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Processing..." : "Submit to Server"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Server Response Section */}
          <ServerResponse data={serverResponse} />
        </div>

        <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Task Completion Steps:</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li className="text-gray-700">Created an HTML structure with forms for user input</li>
            <li className="text-gray-700">Simulated a Node.js server using client-side JavaScript</li>
            <li className="text-gray-700">Created a "server-side" endpoint to handle form submissions</li>
            <li className="text-gray-700">Used "server-side rendering" to dynamically generate the response HTML</li>
          </ol>
          <div className="mt-4 p-4 bg-yellow-50 rounded border border-yellow-200">
            <p className="text-sm text-gray-600">
              <strong>Note:</strong> In a real implementation, steps 2-4 would be handled by an actual 
              Node.js server with Express. This demo simulates those steps in the browser.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
