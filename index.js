import { config } from 'dotenv'
config()
import { Configuration, OpenAIApi } from 'openai'
import readline from 'readline'

const openai = new OpenAIApi(new Configuration({
 apiKey: process.env.API_KEY
}))

const userInterface = readline.createInterface({
 input: process.stdin,
 output: process.stdout
})

userInterface.prompt()
userInterface.on('line', async input => {
 const result = await openai.createChatCompletion({
  model: "gpt-3.5-turbo-0301",
  messages: [{ role: "user", content: input }]
 })
 console.log(result.data.choices[0].message.content)
 userInterface.prompt()
})