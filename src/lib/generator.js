// import { HfInference } from "@huggingface/inference"

// const client = new HfInference("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")

// let out = "";

// const stream = client.chatCompletionStream({
// 	model: "google/gemma-1.1-2b-it",
// 	messages: [
// 		{ role: "user", content: "you are a newsletter generator for women-oriented clubs on campus\n\ngiven the club schedule below, encapsulated by backticks, which may include dates, names and details of the event, generate a newsletter keeping the members up to date on the events.\n\nstart with greetings and newsletter intro. give a one (preferred) to two (max) liner description of every event\n\nfeel free to pepper the newsletter with relevant emojis to make it fun\n\nname of club: w@cc\n\nschedule:\n```\nThursday, January 18th, 2024 6:30:00 PM Reserved meeting space Welcome Back Event - Hot Chocolate Social\nThursday, January 25th, 2024 6:30:00 PM Reserved meeting space CAP Meeting\nThursday, February 1st, 2024 6:30:00 PM Reserved Meeting space Escape Room\nThursday, February 8th, 2024 6:30:00 PM Reserved meeting space Game Night\nSunday, February 11th, 2024 12:00:00 PM High Museum of Art Visit to High Museum of Art\n```" },
// 	],
// 	temperature: 0.7,
// 	max_tokens: 2048,
// 	top_p: 0.7
// });

// for await (const chunk of stream) {
// 	if (chunk.choices && chunk.choices.length > 0) {
// 		const newContent = chunk.choices[0].delta.content;
// 		out += newContent;
// 		console.log(newContent);
// 	}  
// }