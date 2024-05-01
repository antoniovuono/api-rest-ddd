import { expect, test } from "vitest"
import { AnswerQuestion } from "./answer-question"

test('create an answer', () => {
    const answerQuestion = new AnswerQuestion()

    const answer = answerQuestion.execute({
        instructorId: '123',
        questionId: '456',
        content: 'Answer content'
    })

    expect(answer.content).toBe('Answer content')
})