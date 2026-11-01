export class AgentBuilder {
    private instructions: string = ''


    public setInstructions(instructions: string): this {
        this.instructions = instructions
        return this
    }

    public build(): Agent {
        if (!this.instructions.trim()) {
            throw new Error('Agent instructions cannot be empty')
        }

        return new Agent(this.instructions)
    }
}

export class Agent {
    private readonly instructions: string

    constructor(instructions: string) {
        this.instructions = instructions
    }
    public static builder(): AgentBuilder {
        return new AgentBuilder()
    }

    public async run(query: string): Promise<string> {

        if (!query.trim()) {
            throw new Error(`Query cannot be empty`)
        }

        return `Instructions: ${this.instructions} \nQuery: ${query}`
    }
}