export class AgentBuilder {
    instrustions;
    setInstructions(instruction) {
        this.instrustions = instruction;
        return this;
    }
    build() {
        return new Agent(this);
    }
}
export class Agent {
    constructor(builder) { }
    static builder() {
        return new AgentBuilder();
    }
    async run(query) {
        console.log(`this is the function to run agent `, query);
    }
}
//# sourceMappingURL=agent.js.map