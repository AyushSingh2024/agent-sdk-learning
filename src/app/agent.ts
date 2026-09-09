export class AgentBuilder {
    private instrustions: string | undefined


    public setInstructions(instruction: string) {
        this.instrustions = instruction
        return this
    }

    public build() {
        return new Agent(this)
    }
}

export class Agent {
    constructor(builder: AgentBuilder) { }
    static builder() {
        return new AgentBuilder()
    }

    public async run(query: string) {
        console.log(`this is the function to run agent `, query)
    }
}