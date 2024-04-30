The act of writing documentation requires empathy. Our goal is not to simply describe the objective reality that is already evident in the source code. Instead, we aim to shape the relationship between users and the Vue ecosystem. To achieve this, we provide a continuously evolving guide that offers rules and recommendations for consistent communication within the Vue ecosystem.

Our principles are as follows:
- A feature is only considered to exist once it has been thoroughly documented.
- We must respect the cognitive capacity of our users, understanding that they have limited brain power. As they read, their capacity diminishes, eventually leading to a halt in their learning process.
- Complex sentences, the need to learn multiple concepts simultaneously, and abstract examples that do not directly relate to a user's work deplete cognitive capacity at a faster rate.
- To slow down the depletion of cognitive capacity, we strive to make users feel consistently intelligent, capable, and curious. This can be achieved by breaking down information into easily digestible pieces and ensuring a smooth flow throughout the document.
- It is crucial to always consider the user's perspective. When we have a deep understanding of a topic, it may seem obvious to us. However, this can create a "curse of knowledge" where we struggle to see things from the user's point of view.

The first thing you should consider when learning this concept is the jargon that you need to understand. It's important to identify what you may have misunderstood and what took a while for you to fully grasp. Effective documentation should be accessible to users at their level of understanding. It can be beneficial to practice explaining the concept to others in person beforehand.

To effectively communicate a feature, it is crucial to first describe the problem it solves before diving into the solution. This provides users with the necessary context to determine if the information is relevant to them and if it addresses a problem they encounter. Additionally, it helps users connect the feature to their prior knowledge and experiences.

While writing, don't hesitate to ask questions, particularly if you feel they may be perceived as "foolish". It can be challenging to be vulnerable, but it is the only way to gain a deeper understanding of what needs to be explained.

Be actively involved in feature discussions. The best APIs are developed with a documentation-driven approach, where features are designed to be easily explained rather than trying to figure out how to explain them later. Asking questions, even if they may seem foolish, at an early stage often uncovers confusions, inconsistencies, and problematic behavior before making breaking changes becomes necessary.

- **Introduction/Getting Started**:
- Offer a brief overview of the project's purpose and the issues it addresses, all within a span of under 10 minutes.
- Present an in-depth explanation of how the project tackles the problems it solves, along with when and why to utilize it, supported by simple code examples. Upon conclusion, provide links to the Installation page and the beginning of the Essentials Guide.
- **Guide**: Foster a sense of empowerment, intelligence, and curiosity among users, ensuring they are motivated and mentally equipped to continue their learning journey. Arrange the guide pages in a sequential manner, prioritizing the most impactful and least effort-intensive topics.
- **Essentials**: The Essentials should be easily digestible within 5 hours, although a shorter duration is preferable. Its purpose is to equip users with the fundamental knowledge needed to handle the majority of use cases, representing the 20% that yields 80% of the desired outcomes. While it is acceptable to include links to more advanced guides and the API, it is generally advisable to limit such references.

Many users struggle to fully grasp the content on their first read-through. Instead of trying to understand every aspect of a feature before moving on, they end up exhausting their cognitive capacity by constantly jumping from one link to another. This causes them to never finish reading the Essentials. It's important to prioritize a smooth reading experience over being thorough. We want to provide people with the necessary information to avoid frustration, but they can always come back to read more or search for specific problems they encounter.

In addition to the Essentials, there are subsequent guides that help users handle around 95% of use cases. These guides provide more detailed information on non-essential features like transitions and animations, more complex convenience features like mixins and custom directives, and improvements in the development experience such as JSX and plugins. The remaining 5% of use cases, which are more niche, complex, or prone to abuse, will be covered in the cookbook and API reference. These resources can be accessed through links provided in the advanced guides.

The reference/API section aims to provide a comprehensive list of features, including type information, descriptions of the problems they solve, examples of various options combinations, and links to guides, cookbook recipes, and other internal resources for further details.

- **Migration Guide**: This section provides detailed information and instructions on how to transition from one version to another. It includes a comprehensive list of changes, along with explanations for why these changes were made. Users can easily skim through this guide to find the specific information they need for their projects.
- **Comparison with Other Software**: It is important to understand how our software compares to similar ones in the market. This helps users determine what unique problems our software can solve for them, as well as how much of their existing knowledge can be applied. By providing this comparison, we enable users to make informed decisions.
- **Style Recommendations**: While developing, there are certain aspects that require decisions but are not crucial to the API. The style guide offers knowledgeable and opinionated suggestions to assist in making these decisions. These recommendations should not be blindly followed, but they can save time by ensuring team alignment on smaller details.
- **Cookbook**: The cookbook contains recipes that assume a certain level of familiarity with Vue and its ecosystem. It provides step-by-step instructions for specific tasks or scenarios, allowing users to easily follow along and implement solutions.

## Writing & Grammar
### Style
- **Headings should focus on the problem**, not the solution. Instead of using a heading like "Using props", which suggests a solution, use a heading like "Passing Data to Child Components with Props" to provide the context of the problem that props solve. Users are more likely to engage with the explanation of a feature when they understand why and when to use it.
- **If assuming prior knowledge, state it upfront** and provide resources for less common knowledge that may be expected.
- **Introduce one new concept at a time whenever possible** (both in text and code examples). While some people may be able to understand multiple concepts at once, others may get lost, and even those who don't get lost will use more cognitive capacity.
- **When possible, integrate tips and caveats naturally into the main content** instead of using separate content blocks. For example, you can build on examples to demonstrate edge cases.
- **Limit interwoven tips and caveats to a maximum of two per page.**

If additional information is necessary, consider including a section that addresses any potential issues. The intention of the guide is to be read in a linear manner, and the inclusion of tips and caveats may overwhelm or distract readers who are trying to grasp the fundamental concepts.

Avoid using references to authority, such as stating that something should be done a certain way because it is considered a best practice. Instead, provide examples that demonstrate how specific patterns can either cause or solve human problems.

When deciding on the order in which to teach concepts, consider what knowledge will offer the greatest benefit in terms of the ratio between effort and power. This means focusing on teaching what will help users overcome the most significant challenges or solve the highest number of problems, while requiring the least amount of effort to learn. This approach will empower learners, make them feel intelligent and curious, and prevent cognitive fatigue.

Unless the context assumes the use of a specific string template or build system, ensure that the code provided is compatible with any software environment, such as Vue or Vuex.

Rather than simply explaining, aim to demonstrate concepts through practical examples.

When creating documentation for Vue, it is important to consider the value of including links to the compiled source. These links serve as a helpful resource for users seeking further information. It is also crucial to avoid incorporating humor, such as sarcasm or pop culture references, as it may not be easily understood across different cultures. Additionally, it is best to avoid assuming a higher level of understanding than necessary. In most cases, it is preferable to include links between different sections of the documentation rather than duplicating content. While some repetition is necessary for effective learning, excessive repetition can make the documentation more difficult to maintain. Striking the right balance between repetition and concise information is challenging. It is also recommended to use specific examples rather than generic ones. For instance, providing an example using a `` component is more beneficial than using a generic ``. Furthermore, relatable examples are more effective than obscure ones. By using examples that people can easily relate to, the documentation becomes more engaging. Lastly, it is always better to use simple and straightforward language rather than complex or technical jargon.

Use a script HTML element to accomplish the following task:
- Instead of using a higher order function, create a function that returns a function.
- Be mindful of the language used and avoid words that invalidate struggle, such as "easy," "just," and "obviously." For guidance, refer to the article "Words To Avoid in Educational Writing."
### Grammar
- Avoid abbreviations in both writing and code examples. For instance, use "attribute" instead of "attr" and "message" instead of "msg," unless referring to an abbreviation in an API like "$attrs." Abbreviation symbols found on standard keyboards, such as "@," "#," and "&," are acceptable.
- Use a colon (:) to end a sentence when referring to a directly following example, rather than a period (.).
- Utilize the Oxford comma (a, b, and c) instead of omitting it (a, b and c). [Refer to this source for the importance of the Oxford comma](https://www.inkonhand.com/2015/10/the-serial-oxford-comma-when-and-why-to-use-it/).
- When mentioning the name of a project, use the name that the project refers to itself as. For example, "webpack" and "npm" should both be written in lowercase, as that's how their documentation refers to them.
- Use Title Case for headings, at least for now, since it aligns with the format used throughout the rest of the documentation.

- **It is important to capitalize the first letter of sentences.** This enhances readability and reduces the mental effort required by documentation writers, as they don't need to remember whether to capitalize words like "and", "with", and "about".
- **Avoid using emojis (except in discussions).** Emojis may seem cute and friendly, but they can be distracting in documentation, and different cultures may interpret them differently.
## The Process of Iteration and Communication
- **Achieving excellence requires iteration.** Initial drafts are typically not great, but they are crucial for the overall process. It is challenging to avoid the gradual progression from Bad -> OK -> Good -> Great -> Inspiring -> Transcendent.
- **Don't wait for something to be "Good" before sharing it.** The community will assist in further refining it.
- **Try not to become defensive when receiving feedback.** Our writing is often personal, but reacting negatively to those who help us improve will either discourage them from providing feedback or limit the type of feedback they offer.
- **Review your own work before sharing it with others.**

- **When seeking feedback, clearly communicate your objectives and concerns to the reviewers.**
- **Remember that there is usually an underlying issue when someone reports a problem, even if their proposed solution isn't ideal. Ask follow-up questions to gain a better understanding.**
- Foster an environment where people feel comfortable asking questions and contributing to discussions. Here are some ways to achieve this:
- **Express gratitude for people's contributions and reviews, even if you're feeling irritable.** For instance:
- "That's a great question!"
- "Thank you for taking the time to explain. 🙂"
- "I appreciate your input, although this was intentional. 😊"
- **Pay close attention to what others are saying and reflect back to ensure understanding.** This validates their emotions and experiences, while also helping you confirm your comprehension.
- **Incorporate positive and empathetic emojis frequently.** It's better to come across as slightly odd than rude or impatient.
- **Kindly establish and communicate the rules and boundaries.**

In order to effectively communicate expectations of behavior, it is important to strike a balance between encouraging growth and maturity, while also making it clear that certain behaviors are not acceptable. It is necessary to outline the consequences that will be enforced according to the code of conduct if poor behavior persists.
### Suggestions, Notifications, Warnings, and Notable Lines
We have specific styles that can be used to draw attention to important information. You can find examples of these styles [on this page](https://vitepress.dev/guide/markdown#custom-containers). However, it is important to use them sparingly.
It can be tempting to overuse these styles, as it is easy to simply add a change within a notification. However, this disrupts the flow of reading for the user and should only be done in special circumstances. Whenever possible, we should strive to create a narrative and flow within the page to respect the reader's mental workload.
It is crucial to avoid using two warnings consecutively, as it indicates that we are not effectively explaining the context.
### Making Contributions
We appreciate small, focused pull requests. If you are considering making a significant change, please communicate with team members beforehand. You can find a [detailed explanation](https://www.netlify.com/blog/2020/03/31/how-to-scope-down-prs/) of why this is so important for our team to work effectively.

com/Cognitive-Load-Theory-Exploration-Instruction-ebook/dp/B00I7JXJZM) (see [popular quotes](https://www.goodreads.com/work/quotes/1881228-cognitive-load-theory-an-exploration-of-theory-practice-and-issues))
