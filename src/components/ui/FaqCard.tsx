'use client';
import { useRef, useState } from "react";

export type Faq = {
    q: string;
    a: string;
};

type FaqsCardProps = {
    faqsList: Faq;
};

const FaqsCard: React.FC<FaqsCardProps> = ({ faqsList }) => {
    const answerElRef = useRef<HTMLDivElement>(null);
    const [state, setState] = useState<boolean>(false);
    const [answerH, setAnswerH] = useState<string>('0px');

    const handleOpenAnswer = () => {
        const childHeight = answerElRef.current?.childNodes[0] as HTMLElement;
        const answerElH = childHeight?.offsetHeight || 0;
        setState(!state);
        setAnswerH(`${answerElH + 20}px`);
    };

    return (
        <div
            className="space-y-3 mt-5 overflow-hidden border-b border-border"
            onClick={handleOpenAnswer}
        >
            <h4 className="cursor-pointer pb-5 flex items-center justify-between text-lg text-text-subtle font-medium">
                {faqsList.q}
                {
                    state ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-text-muted ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-text-muted ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                    )
                }
            </h4>
            <div
                ref={answerElRef}
                className="duration-300"
                style={state ? { height: answerH } : { height: '0px' }}
            >
                <div>
                    <p className="text-text-muted">
                        {faqsList.a}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FaqsCard;
