import { expect, test } from "vitest"
import { AnswerQuestion } from "./answer-question"
import { AnswerRepository } from "../repositories/answers-repositories"
import { Answer } from "../entities/answer"

const fakeAnswerRepository: AnswerRepository = {
    create: async (answer: Answer) => {
      return
    }
}

test('create an answer',async  () => {
    const answerQuestion = new AnswerQuestion(fakeAnswerRepository)

    const answer = await answerQuestion.execute({
        instructorId: '123',
        questionId: '456',
        content: 'Answer content'
    })

    expect(answer.content).toBe('Answer content')
})