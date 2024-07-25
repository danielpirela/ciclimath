import { supabase } from '@/lib/supabase'
import type { Question } from '@/types/data'
import { getUser } from './getUser'


const questions : Question[] = [
    {
        question: '15 + 20',
        answers: [35, 30, 40],
        correct: 35
    },
    {
        question: '25 - 5',
        answers: [20, 15, 30],
        correct: 20
    },
    {
        question: '45 + 10',
        answers: [55, 50, 60],
        correct: 55
    },
    {
        question: '80 - 25',
        answers: [55, 60, 50],
        correct: 55
    },
    {
        question: '35 + 25',
        answers: [60, 50, 55],
        correct: 60
    },
    {
        question: '90 - 40',
        answers: [50, 55, 45],
        correct: 50
    },
    {
        question: '20 + 30',
        answers: [50, 40, 60],
        correct: 50
    },
    {
        question: '70 - 35',
        answers: [35, 40, 30],
        correct: 35
    },
    {
        question: '55 + 20',
        answers: [75, 70, 65],
        correct: 75
    },
    {
        question: '100 - 50',
        answers: [50, 60, 40],
        correct: 50
    }
]

export async function saveQuestionsToSupabase() {
    for (const question of questions) {
        const { data, error } = await supabase
            .from('Question')
            .insert([
                { question: question.question, answers: question.answers, correct: question.correct }
            ])

        if (error) {
            console.error('Error al guardar la pregunta:', question, error)
        } else {
            console.log('Pregunta guardada:', data)
        }
    }
}

export async function setRelationIdQuestion (userId :string, id : string) {
    const {data : User} = await supabase.from('User').select('*').eq('id', userId)

    if(User) {
        const { error } = await supabase
        .from('User')
        .update({questionR : [...User[0]?.questionR, id]})
        .eq('id', userId)
    }
}
