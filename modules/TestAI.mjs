import { fileURLToPath } from 'url';
import path from 'path';
import axios from 'axios';
import dotenv from 'dotenv';
import { Configuration, OpenAIApi } from 'openai';

// Get the current file path
const __filename = fileURLToPath(import.meta.url);

// Get the directory name
const __dirname = path.dirname(__filename);

// Load environment variables from .env file
dotenv.config({ path: path.join(__dirname, '../.env') });

// Access the environment variables
const openAiKey = process.env.OPENAI_KEY;

// Configure OpenAI
const configuration = new Configuration({
  apiKey: openAiKey,
});

const openai = new OpenAIApi(configuration);

async function createEditRequest() {
  try {
    const response = await openai.createEdit({
      model: 'code-davinci-edit-001',
      input: 'What day of the week is it?',
      instruction: 'Fix the spelling mistakes',
    });

    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

createEditRequest();
