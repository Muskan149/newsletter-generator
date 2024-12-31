"use client";

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Copy, Wand2, Loader2 } from 'lucide-react';

const NewsletterGenerator = () => {
  const [schedule, setSchedule] = useState('');
  const [newsletter, setNewsletter] = useState('');
  const [copied, setCopied] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const generateNewsletter = async () => {
    setIsLoading(true);
    setNewsletter(''); // Clear existing newsletter while loading

    // Simulate loading delay
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    const template = `
✨ Women @ College of Computing Monthly Update ✨

Hey CodeLettes! 💻 👩‍💻

We hope this finds you coding and creating amazing things! Here's what's coming up:

🍫️ Welcome Back Event - Hot Chocolate Social
Thursday, January 18th, 2024 | 6:30 PM | Reserved Meeting Space
Warm up with us and enjoy hot chocolate, sweet treats, and great company!

📝 CAP Meeting
Thursday, January 25th, 2024 | 6:30 PM | Reserved Meeting Space
Join us for our monthly CAP meeting to discuss important club matters and plan exciting events!

🔓 Escape Room Challenge
Thursday, February 1st, 2024 | 6:30 PM | Reserved Meeting Space
Test your problem-solving skills and teamwork in our thrilling escape room challenge!

🎲 Game Night
Thursday, February 8th, 2024 | 6:30 PM | Reserved Meeting Space
Unwind and have fun with friends at our game night, featuring board games and snacks!

🎨 Visit to High Museum of Art
Sunday, February 11th, 2024 | 12:00 PM | High Museum of Art
Explore the world of art and culture with us on a special visit to the High Museum of Art.

Remember to join our Discord for real-time updates and discussions!

Stay awesome and keep coding! 
The W@CC Team 🌟
    `;
    
    setNewsletter(template);
    setIsLoading(false);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(newsletter);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  if (!isClient) {
    return null; // or a loading spinner if you prefer
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 p-8">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="flex items-center justify-center space-x-2">
          <Sparkles className="text-pink-500" size={24} />
          <h1 className="text-3xl font-bold text-gray-800">W@CC Newsletter Generator</h1>
          <Sparkles className="text-pink-500" size={24} />
        </div>
        
        <Card className="bg-white/80 backdrop-blur">
          <CardHeader>
            <CardTitle className="text-lg text-gray-700">Input Monthly Schedule</CardTitle>
          </CardHeader>
          <CardContent>
            <textarea
              value={schedule}
              onChange={(e) => setSchedule(e.target.value)}
              placeholder="Enter the monthly schedule here..."
              className="w-full h-48 p-4 rounded-lg border border-pink-200 focus:ring-2 focus:ring-pink-300 focus:border-transparent resize-none"
            />
            
            <button
              onClick={generateNewsletter}
              disabled={isLoading}
              className="mt-4 w-full bg-gradient-to-r from-pink-400 to-purple-400 text-white py-2 px-4 rounded-lg hover:from-pink-500 hover:to-purple-500 transition-all flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <Loader2 size={20} className="animate-spin" />
                  <span>Generating...</span>
                </>
              ) : (
                <>
                  <Wand2 size={20} />
                  <span>Generate Newsletter</span>
                </>
              )}
            </button>
          </CardContent>
        </Card>

        {(newsletter || isLoading) && (
          <Card className="bg-white/80 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-lg text-gray-700">Generated Newsletter</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="whitespace-pre-wrap bg-white p-4 rounded-lg border border-pink-200 min-h-48">
                {isLoading ? (
                  <div className="flex items-center justify-center h-48">
                    <Loader2 size={32} className="animate-spin text-pink-500" />
                  </div>
                ) : (
                  newsletter
                )}
              </div>
              
              <button
                onClick={copyToClipboard}
                disabled={isLoading}
                className="mt-4 w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-all flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Copy size={20} />
                <span>{copied ? 'Copied!' : 'Copy to Clipboard'}</span>
              </button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default NewsletterGenerator;