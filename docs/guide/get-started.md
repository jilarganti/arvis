# Get started with A.R.V.I.S.

A.R.V.I.S. is a self-learning LLM agent tailored to the specifics of your video conferences – this includes records of meetings, chat discussions, screen presentations, and attached documents. **A.R.V.I.S. attends every non-confidential meeting and memorizes only what you permit it to.** Its abilities depend on the level of knowledge it is allowed to acquire and grow with each subsequent meeting. Once it achieves your level of intelligence, it will be capable of substituting you and conducting meetings in your stead.

 [Theory](theory.md)

 [Features](features.md)


AaaS – agent as a service

Guard работает только на вас. Его нельзя схантить или подкупить. Он не устает и всегда одинаковрр.


При создании встречи организатору необходимо [добавить данные](/guide/links#add-knowledge-sources), имеющие непосредственнное отношение к планируемой встрече.
Для повторной встречи добавлять подобные данные не обязательно, так как будут использованы уже полученные знания предыдущих встреч. Необходимо [научить ассистента понимать любой формат данных](/guide/links#formatting-knowledge-sources), чтобы не заставлять пользователя выполнять преобразования форматов. Тема, описание и показатели для оценки в ходе встречи будут [автоматически определены после анализа предоставленных данных](/guide/links#topic-description-and-evaluation-metrics).

Во время встречи, Arvis будет использовать [специально обученную для данной темы встречи модель ассистента, наиболее полно соответствующую описанию встречи](/guide/links#selecting-an-agent-model-that-matches-the-topic-and-description-of-the-meeting). Arvis оценивает показатели в ходе встречи и помогает вести дискуссию. 

Необходимо учитывать особенности:
- **язык общения** 
    - если модель ассистента обучена на другом языке, то необходимо переводить запросы для модели на ее язык, что, в свою очередь, учеличивает кост
    - либо использовать модель, уже обученную на языке общения
- **качество 



