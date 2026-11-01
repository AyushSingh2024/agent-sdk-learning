import { Agent } from './app/agent.js'

async function main() {
    const agent = Agent.builder()
        .setInstructions('You are an expert math agent.')
        .build()

    const result = await agent.run('What is 12 multiplied by 8?')

    console.log(result)
}

main().catch((error: unknown) => {
    if (error instanceof Error) {
        console.error(error.message)
    } else {
        console.error('An unexpected error occurred', error)
    }

    process.exitCode = 1
})