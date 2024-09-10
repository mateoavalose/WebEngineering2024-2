import OpenAI from 'openai';

interface Option {
    prompt: string;
}

export const prosConsDiscussionUseCase = async (openai:OpenAI, {prompt}:Option) => {
    const response = await openai.chat.completions.create({
        model:'gpt-4o',
        messages:[
            {
                role:'system',
                content:`Discuss the pros and cons of the prompt that the user will give you using a markdown bullet list`         
            },
            {
                role:'user',
                content:prompt
            }
        ],
        temperature: 0.8,
        max_tokens: 200
    });
    return {message:response.choices[0].message.content};
}