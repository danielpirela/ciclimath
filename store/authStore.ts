import { create, StateCreator } from "zustand"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { persist } from "zustand/middleware"
import { User } from "@/types/data"
// ? Types for slices

interface AuthSlice {
  user: User
  isLogged: boolean

  setUser: (user: User) => void
  setAuth: (isLogged: boolean) => void
}

const initialUserState = {
  id: "",
  email: "",
  username: "",
  question: [],
}

// * Slices
const createAuthSlice: StateCreator<AuthSlice> = (set) => ({
  user: initialUserState,
  isLogged: false,
  setUser: (user: User) => set({ user }),
  setAuth: (isLogged: boolean) => set({ isLogged }),
})

// * Final store

// ...

export const useAuthStore = create<AuthSlice>()(
  persist(
    (...a) => ({
      ...createAuthSlice(...a),
    }),
    { name: "AuthStore", getStorage: () => AsyncStorage }
  )
)
