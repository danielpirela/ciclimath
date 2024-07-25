import { supabase } from '@/lib/supabase'

export async function getQuestions () {
    const {data : Question, error} = await supabase.from('Question').select('*')
    if(Question) {
        return Question
    }
    return {error}
}
