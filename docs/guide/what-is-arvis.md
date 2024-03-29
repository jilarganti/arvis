# What is A.R.V.I.S.?

A.R.V.I.S. is a self-learning LLM agent tailored to the specifics of your video conferences – this includes records of meetings, chat discussions, screen presentations, and attached documents. **A.R.V.I.S. attends every non-confidential meeting and memorizes only what you permit it to.** Its abilities depend on the level of knowledge it is allowed to acquire and grow with each subsequent meeting. Once it achieves your level of intelligence, it will be capable of substituting you and conducting meetings in your stead.

In simpler terms, imagine A.R.V.I.S. as a digital assistant that learns from the content and discussions in your video meetings. It is programmed to be present at meetings where sensitive information isn't shared, and it will only keep track of the information you've explicitly allowed. As it "listens" and "learns" from these interactions, its capacity to understand and perform tasks improves. The ultimate goal for A.R.V.I.S. is to learn enough to mimic your thinking and decision-making processes, potentially running meetings without your direct input.

## How It Works!

Similar to a video conference like Google Meet, Zoom, or MS Teams, but with the presence of an AI bot named A.R.V.I.S. during [group meetings.](#групповые-встречи-это '45678') It retains the entire context of the group's communications throughout the entire duration of the group's interactions, including all conversations during meetings, chat interactions, presentations, and attached documents. A.R.V.I.S. can assist you in various ways:

- **Discovering Goals, Summaries, and Outcomes of Past Meetings**: A.R.V.I.S. enables you to comprehend the objectives, summaries, and results of previous gatherings.
- **Setting Goals for Future Meetings**: It aids in establishing new objectives, crafting agendas, and predicting the accomplishment of these objectives.
- **Monitoring the Discussion**: Guided by the agenda, established goals, and timing of the meeting, A.R.V.I.S. ensures that the conversation remains on track.
- **Serving as a Consultant**: Throughout the meeting, A.R.V.I.S. acts as a consultant to you and other participants, providing insights and information.

Every registered user and each group meeting possess their unique agent:

- **User Agent**: Specifically trained on the context of a user's group meetings. It is exclusively accessible to that user.
- **Group Agent**: Trained on the context of the group's meeting participants. It is available to all members of the group.

The types of data accessible for agent training can be restricted up to complete inaccessibility of any information. Upon the deletion of a user or group, the corresponding agent is eliminated and is irrecoverable. If a user re-registers, the agent will start its training from the beginning.

<div class="tip custom-block" style="padding-top: 8px">

<!-- Just want to try it out? Skip to the [Quickstart](./getting-started). -->

</div>

###### Групповые встречи это


## Why Not Fine-Tuning?

> Fine-tuning can transform LLMs into <mark>domain-specific experts</mark>, and consistently infuse the transformer with the latest information, but it comes with several drawbacks:

> It demands domain-specific fine-tuning, which is burdensome not merely due to its cost but also because it compromises generality. This process requires finetuning of the transformer’s neural network parameters and data collections across every specific domain.
> Fine-tuning a pre-trained LLM requires careful operation, as the model acts like a “black box”; otherwise, there’s a risk of overwriting or conflicting with existing knowledge.
> In specific tasks, LLMs, being closed systems and being language models, struggle without external tools such as calculators or specialized APIs. They naturally exhibit weaknesses in areas like math, as observed in GPT-3’s performance with arithmetic calculations involving 4-digit operations or even more complex tasks. Even if the LLMs are trained frequently with the latest data, they inherently lack the capability to provide real-time solutions, like current datetime or weather details. The incorporation of external knowledge retrieval and tool utilization is essential. After all, it’s unnecessary to make an entity like Albert Einstein universally adept; what’s crucial is its ability to know when and where to source relevant information or tools. (Lilian Weng et al. “How to Build an Open-Domain Question Answering System” )
> Enhancing reasoning capabilities through fine-tuning proves challenging. Pretrained LLMs come with a fixed number of transformer parameters, and enhancing their reasoning often depends on increasing these parameters (stemming from emergent behaviors from upscaling complex networks). Simply fine-tuning based on pretrained transformer models rarely augments this reasoning capability, especially if the pretrained models are aleady adequately trained. This is particularly true for tasks that prioritize reasoning over domain knowledge, like solving mathematical or physics reasoning problems.
> In this perspective, solely relying on fine-tuning or mere scaling isn’t an all-in-one solution. It’s a sensible to construct a system around LLMs, leveraging their innate reasoning prowess to plan, decompose the complex task, reason, and action at each step. Given that LLMs inherently possess commendable reasoning and tool-utilizing skills, our role is primarily to guide them to perform these intrinsic abilities in appropriate circumstances.

**[A Complete Guide to LLMs-based Autonomous Agents (Part I):](https://medium.com/the-modern-scientist/a-complete-guide-to-llms-based-autonomous-agents-part-i-69515c016792)**
