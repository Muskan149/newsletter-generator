// import { Configuration, OpenAIApi } from "openai";
// require("dotenv").config();

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });
// const openai = new OpenAIApi(configuration);

// async function llmGenerator(inputText) {
//   const prompt = `Prompt:
//     Transform the "Given Input" sentence (enclosed within backticks) by "uzzifying" it. Rules for uzzifying a sentence:

//     Add "-uzz" to all nouns (e.g., "club" → "cluzz", "bros" → "bruzz", "London" -> "Londuzz").
//     Optionally apply "-uzz" to emphasized verbs or adjectives for comedic effect.
//     Skip small functional words (e.g., articles, prepositions, and pronouns like "the," "is," "on").
//     Skip verbs.

//     Example Input: "When you walk in the club with bros and see fine hoes."
//     Example Output: "When you walk in the cluzz with bruzz and see fine huzz."

//     Given Input: \`\`\`${inputText}\`\`\`
//     Generate your output as a JSON with key uzzified_sentence.
//   `;

//   try {
//     const response = await openai.createChatCompletion({
//       model: "gpt-4o-mini",
//       messages: [
//         {
//           role: "user",
//           content: prompt,
//         },
//       ],
//       temperature: 1,
//       max_tokens: 1000,
//       top_p: 1,
//       frequency_penalty: 0,
//       presence_penalty: 0,
//     });

//     const generation = response.data.choices[0].message.content;

//     // Remove the ```json at the beginning and closing backticks
//     const generationCleaned = generation.replace(/^```json\n/, "").replace(/```$/, "");

//     console.log("Generation:", generationCleaned);

//     // Parse the JSON string
//     const generationJSON = JSON.parse(generationCleaned);

//     console.log("Input Text:", inputText);
//     console.log("Parsed JSON:", generationJSON);

//     return generationJSON.uzzified_sentence;
//   } catch (error) {
//     console.error("Error generating uzzified sentence:", error);
//     throw error;
//   }
// }

// // Example usage
// (async () => {
//   const inputText = "When you walk in the club with bros and see fine hoes.";
//   const result = await llmGenerator(inputText);
//   console.log("Uzzified Sentence:", result);
// })();
