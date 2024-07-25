import { supabase } from '@/lib/supabase'
import { useAuthStore } from '@/store/authStore'
import type {User} from '../types/data'

export async function getUser(email : string) : Promise<User | any > {
    const {data : User, error} = await supabase.from('User').select('*').eq('email', email)
    if(User) {
        return User[0]
    }
    return { error }
}


export async function setUserState(user : User) {
    const setUser = useAuthStore(state => state.setUser)
    if(user) return setUser(user)
}
