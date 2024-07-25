import { supabase } from '@/lib/supabase'
import { User } from '../types/data'

export async function createUser (user: User) {

    if(!user) return {hola : 'gola'}

    const {error} = await supabase.from('User')
    .insert([
        { email: user.email, password: user.password, username: user.username, questionR : [] },
    ])
    .select()

    if(error) return error
}
