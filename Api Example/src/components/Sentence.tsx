import { SentenceBD } from '../models/sentence.models';

interface SentenceProps {
    quote: SentenceBD;
}

export const Sentence = ( {quote}:SentenceProps) => {
    return (
        <div>
            <p className="text-2x1 font-bold text-gray-800">{quote.quote}</p>
            <p className="text-xl font-light text-gray-600">{quote.author}</p>
        </div>
    )
}