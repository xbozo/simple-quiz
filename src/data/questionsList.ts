import { uuid } from 'uuidv4';

interface QuestionType {
    question: string;
    questionAnswer: string;
    questionOptions: string[];
    id: string;
}

export const questionsList: QuestionType[] = [
    {
        question: "Qual ingrediente não pode faltar?",
        questionAnswer: "Corante",
        questionOptions: [
            "Farinha",
            "Corante",
            "Água",
            "Açúcar",
        ],
        id: uuid(),
    },
    {
        question: "Qual é mais gostoso?",
        questionAnswer: "Bolo",
        questionOptions: [
            "Bolo",
            "Pizza",
            "Macarrão",
            "Lasanha",
        ],
        id: uuid(),
    },
    {
        question: "Qual é mais caro?",
        questionAnswer: "Açafrão",
        questionOptions: [
            "Camarão",
            "Lagosta",
            "Caviar",
            "Açafrão",
        ],
        id: uuid(),
    },
]