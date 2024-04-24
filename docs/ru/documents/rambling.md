# Get started with A.R.V.I.S.

A.R.V.I.S. is a self-learning LLM agent tailored to the specifics of your video conferences – this includes records of meetings, chat discussions, screen presentations, and attached documents. **A.R.V.I.S. attends every non-confidential meeting and memorizes only what you permit it to.** Its abilities depend on the level of knowledge it is allowed to acquire and grow with each subsequent meeting. Once it achieves your level of intelligence, it will be capable of substituting you and conducting meetings in your stead.

AaaS – agent as a service

Guard работает только на вас. Его нельзя схантить или подкупить. Он не устает и всегда одинаковрр. 

Необходимо учитывать особенности:
- **язык общения** 
    - если модель ассистента обучена на другом языке, то необходимо переводить запросы для модели на ее язык, что, в свою очередь, учеличивает кост
    - либо использовать модель, уже обученную на языке общения
- **качество 




Для пользователя, думайте об этом как о наличии дополнительного участника в вашей конференции – бота ИИ по имени A.R.V.I.S. За кулисами это включает в себя группу [помощников ИИ](https://platform.openai.com/documents/assistants/overview?context=with-streaming), каждый из которых имеет доступ к определенным типам данных:

**Доступ для помощника зарегистрированного пользователя**:
- Метаданные всех встреч с участием пользователя: названия, описания, списки участников, продолжительность и т.д.
- Данные со всех встреч с участием пользователя: записи, чаты, документы и презентации.

**Доступ для помощника общедоступной встречи**:
- Метаданные всех встреч с данным ID: названия, описания, списки участников, продолжительность и т.д.
- Данные со всех встреч с данным ID: записи, чаты, документы и презентации.

Помощники [улучшают свои возможности](https://platform.openai.com/documents/assistants/tools/knowledge-retrieval) с доступными данными после каждой встречи. Чтобы сохранить контекст диалога с помощником со временем, они имеют доступ к [постоянным веткам](https://platform.openai.com/documents/assistants/how-it-works). Это означает, когда вы взаимодействуете с A.R.V.I.S. в чате новой встречи, это как продолжение предыдущего разговора с ним.




**Ограничения**:
Вы можете взаимодействовать с вашим помощником или помощником встречи, если вы:
- Организатор встречи.
- Получили личное приглашение на встречу.

Вы не можете общаться или получать доступ к знаниям других помощников никаким образом. **Помощники недоступны для частных встреч; следовательно, данные или метаданные из таких встреч не сохраняются.**



<!-- Это просто тест инвайта в Дискорд -->

<iframe src="https://discord.com/widget?id=1230122547652333660&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>

[Open Source Explained](https://www.youtube.com/watch?v=PVD1LNDxOnc)


## Лицензирование

- документация – <a rel="license" href="https://creativecommons.org/licenses/by-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://licensebuttons.net/l/by-sa/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="https://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>
- код – MIT | Apache 2.0


## Три кита

- использовать LLM c лучшим [Elo](https://en.wikipedia.org/wiki/Elo_rating_system) для конкретных юскейсов. Например:
    - 