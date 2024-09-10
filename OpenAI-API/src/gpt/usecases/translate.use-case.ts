import OpenAI from 'openai';

interface Option {
    prompt: string;
    lang: string;
}

export const translateUseCase = async (openai:OpenAI, {prompt, lang}:Option) => {
    const response = await openai.chat.completions.create({
        model:'gpt-4o',
        messages:[
            {
                role:'system',
                content:`Translate the following text to ${lang}: ${prompt}`
            }
        ],
        temperature: 0.2,
    });
    return {message:response.choices[0].message.content};
};