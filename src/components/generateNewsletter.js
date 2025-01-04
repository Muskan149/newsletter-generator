'use client'; // Add this if this is a client component

import { HfInference } from "@huggingface/inference";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Define the function to generate the newsletter
export async function generateNewsletter(schedule) {

  console.log("started")
  alert("LATEST")
  // const hfToken = process.env.HF_TOKEN; // Ensure the token is in your .env file as HF_TOKEN

  const hfToken = "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";

  if (!hfToken) {
    throw new Error("Hugging Face token (HF_TOKEN) is missing from .env file.");
  }

  const client = new HfInference(hfToken);
  let out = "";

  // const stream = client.chatCompletionStream({
  //   model: "meta-llama/Llama-3.2-3B-Instruct",
  //   messages: [
  //     {
  //       role: "user",
  //       content: `you are a newsletter generator for women-oriented clubs on campus\n\n
  //       given the club schedule below, encapsulated by backticks, which may include dates, names, and details of the event, generate a newsletter keeping the members up to date on the events.\n\n
  //       start with greetings and newsletter intro. give a one (preferred) to two (max) liner description of every event\n\n
  //       feel free to pepper the newsletter with relevant emojis to make it fun\n\n
  //       name of club: w@cc\n\n
  //       schedule:\n\n
  //       \`\`
  //       ${schedule}
  //       \`\``,
  //     },
  //   ],
  //   temperature: 0.5,
  //   max_tokens: 2048,
  //   top_p: 0.7,
  // });

  const stream = client.chatCompletionStream({
    model: "Qwen/Qwen2.5-72B-Instruct",
    messages: [
      {
        role: "user",
        content: `you are a newsletter generator for women-oriented clubs on campus\n\n
        given the club schedule below, encapsulated by backticks, which may include dates, names, and details of the event, generate a newsletter keeping the members up to date on the events.\n\n
        start with greetings and newsletter intro. give a one (preferred) to two (max) liner description of every event\n\n
        feel free to pepper the newsletter with relevant emojis to make it fun\n\n
        name of club: w@cc\n\n
        schedule:\n\n
        \`\`
        ${schedule}
        \`\``,
      },
    ],
    temperature: 0.5,
    max_tokens: 2048,
    top_p: 0.7
  });

  for await (const chunk of stream) {
    if (chunk.choices && chunk.choices.length > 0) {
      const newContent = chunk.choices[0].delta.content;
      out += newContent;
      console.log(newContent); // Print each chunk to the console
    }
  }

  console.log("Generated Newsletter:\n", out); // Final newsletter output
  return out; // Return the generated newsletter text
}
