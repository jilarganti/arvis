# Introduction

## What is A.R.V.I.S.?

Introducing J.A.R.V.I.S.'s protégé, designed to infuse the essence of its mentor's intelligence into your meetings. This AI assistant uses historical data from your video conferences—including records of meetings, chat discussions, screen presentations, and attached documents—to help you meet your goals, representing you with strategic insight and a focus on tangible outcomes. **J.A.R.V.I.S.'s Apprentice attends every non-confidential meeting and retains only the information you allow it to.** Its effectiveness is built on the knowledge it's permitted to gather, evolving with every meeting it observes. Once it reaches a level of intelligence comparable to yours, it can act in your place, running meetings with the same focus on achieving specific results.

Simplified, think of J.A.R.V.I.S.'s Apprentice as a sophisticated digital aide that learns from the discussions and information shared in your video meetings. It is programmed to participate in meetings without compromising sensitive information, and it meticulously records only the details you deem necessary. Through its "observation" and "learning" from these engagements, it enhances its ability to understand and act, aiming to emulate your decision-making capabilities closely enough to lead meetings focused on achieving concrete goals without your direct involvement.

<div class="tip custom-block" style="padding-top: 8px">

Just want to try it out? Skip to the [Quickstart](./get-started).

</div>

## How It Works!

Similar to a video conference like Google Meet, Zoom, or MS Teams, but with the presence of an AI assistant named A.R.V.I.S. during group meetings. It retains the entire context of the group's communications throughout the entire duration of the group's interactions, including all conversations during meetings, chat interactions, presentations, and attached documents. 

For the user, think of it as having an additional participant in your conference – an AI bot named A.R.V.I.S. Behind the scenes, this involves a group of [AI assistants](https://platform.openai.com/docs/assistants/overview?context=with-streaming) each having access to specific types of data:

**Access for a Registered User's Assistant**:
- Metadata of all meetings involving the user: titles, descriptions, participant lists, durations, etc.
- Data from all meetings involving the user: recordings, chats, documents, and presentations.

**Access for a Public Meeting's Assistant**:
- Metadata of all meetings with a given ID: titles, descriptions, participant lists, durations, etc.
- Data from all meetings with a given ID: recordings, chats, documents, and presentations.

Assistants [enhance their capabilities](https://platform.openai.com/docs/assistants/tools/knowledge-retrieval) with the data available after each meeting. To maintain the context of the dialogue with the assistant over time, they have access to [persistent threads](https://platform.openai.com/docs/assistants/how-it-works). This means when you interact with A.R.V.I.S. in the chat of a new meeting, it's like continuing a previous conversation with them.

**Restrictions**:
You can interact with your assistant or the meeting's assistant if you are:
- The organizer of the meeting.
- Have received a personal invitation to the meeting.

You cannot communicate or access the knowledge of other assistants in any way. **Assistants are not available for private meetings; consequently, no data or metadata from such meetings is saved.**

