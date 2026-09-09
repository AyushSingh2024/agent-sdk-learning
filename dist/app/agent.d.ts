export declare class AgentBuilder {
    private instrustions;
    setInstructions(instruction: string): this;
    build(): Agent;
}
export declare class Agent {
    constructor(builder: AgentBuilder);
    static builder(): AgentBuilder;
    run(query: string): Promise<void>;
}
//# sourceMappingURL=agent.d.ts.map