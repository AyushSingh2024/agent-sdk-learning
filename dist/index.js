import { Agent, AgentBuilder } from './app/agent.js';
async function init() {
    const agent = Agent.builder().setInstructions(`you are an expert math agent`).build();
    agent.run('hey, how are you?');
}
init();
//# sourceMappingURL=index.js.map