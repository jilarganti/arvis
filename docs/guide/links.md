# External ref

## Add knowledge sources

Можно добавлять файлы знаний из Google Drive, Microsoft OneDrive, Dropbox, либо просто подгрузив в сервис. Примеры:
- для тестирования, экзамена и тп:
    - закрытые экзаминационные тесты (с выбором ответа из предложенных вариантов)
- для собеседования с кандидатом на вакансию:
    - подробное описание вакансии с требованиями к кандидату
    - резюме кандидата
    - тесты
- для консультации с врачoм:
    - результаты обследования перед консультацией с врачом
    - документы, имеющие отношение к истории болезни

## Formatting knowledge sources

 Чтобы не заставлять пользователя приводить данные к формату, который понимает спецассистент, необходимо научить ассистента понимать любой формат. Для этого используется [Enhancing LLM-based Agents with Concise Tool Instruction](https://github.com/microsoft/JARVIS/tree/main/easytool).
 ![](/front.png)
 > LLM-based agents usually employ tool documentation to grasp the selection and usage of tools from different sources, but these documentations could be inconsistent in formats, redundant with excessive length, and lacking demonstrations for instructions.

> EasyTool is an easy but effective method to create clear, structured, and unified instructions from tool documentations for improving LLM-based agents in using tools.

## Auto-detect meeting topic and description. Formulation of evaluation hypotheses.

По результатам анализа источников знаний[1] [2] [3] будут автоматически определены:
1. тема встречи
1. подробное описание встречи
1. одна или несколько гипотез для периодической оценки в ходе встречи, например:
    - Общие метрики:
        1. **честность**: собеседник не вводит вас в заблуждение предоставляемой информацией
    - Частные метрики:
        1. для тестирования, экзамена и тп:
            - результативность по каждому тесту
            - итоговый балл тестирования
        1. для собеседования с кандидатом на вакансию:
            - cтепень соответствия кандидата представленной вакансии
            - итоговый балл тестирования
        1. для консультации с врачoм:
            - вероятность диагноза, например:
                - ОРВИ
                - грипп
                - ковид

Будут созданы промпы для оценки созданных гипотез уже в ходе самой встречи. Все автоматичестки созданные данные можно будет уточнить до начала встречи.

[1]: https://towardsdatascience.com/zero-shot-vs-similarity-based-text-classification-83115d9879f5
[2]: https://huggingface.co/tasks/zero-shot-classification
[3]: https://huggingface.co/models?pipeline_tag=zero-shot-classification&sort=trending

## Selecting an agent model that matches the topic and description of the meeting

Во время встречи, Arvis будет использовать специально обученную для данной темы встречи модель ассистента, наиболее полно соответствующую описанию встречи. При этом, необходимо принимать в расчет [Benchmarking Large Language Models for Task Automation](https://github.com/microsoft/JARVIS/tree/main/taskbench).
- при собеседовании на разные позиции необходимо использовать разные модели:
    - разработчика – [CodeBERT fine-tuned](https://huggingface.co/mrm8488/codebert-base-finetuned-detect-insecure-code)
    - юриста – [LEGAL-BERT: The Muppets straight out of Law School](https://huggingface.co/nlpaueb/legal-bert-base-uncased)
    - финансиста – [finbert](https://huggingface.co/ProsusAI/finbert)

- при консультации с врачом выбор модели ассистента также будет зависеть от диагноза. ClinicalBERT[4] [5] может поставить предварительный диагноз и направить к нужному врачу.

[4]: https://huggingface.co/emilyalsentzer/Bio_ClinicalBERT
[5]: https://huggingface.co/medicalai/ClinicalBERT

## Upgrading the assistant with external functions

Ассистент может помочь:
- собрать дополнительную информацию о кандидате, если у него есть доступ к Linkedin
- выписать необходимые лекарства, если доступны данные из аптечной сети

Для этого, ассистент должен [получать данные через API функций](https://platform.openai.com/docs/assistants/tools/function-calling).