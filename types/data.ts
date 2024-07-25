export interface Question {
  id: string
  question: string
  answers: number[]
  correct: number
}

export interface Item {
  item: Question
  index: number
}

export interface User {
  id: string
  email: string
  username: string
  password?: string
  question: string[]
}
