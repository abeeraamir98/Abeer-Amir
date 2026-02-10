import { create } from 'zustand'
import { supabase } from '../lib/supabase'

interface User {
  id: string
  email?: string
}

interface AuthStore {
  user: User | null
  loading: boolean
  isAdmin: boolean
  setUser: (user: User | null) => void
  setLoading: (loading: boolean) => void
  signUp: (email: string, password: string) => Promise<void>
  signIn: (email: string, password: string) => Promise<void>
  signOut: () => Promise<void>
  checkAuth: () => Promise<void>
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  loading: true,
  isAdmin: false,
  setUser: (user) => set({ user }),
  setLoading: (loading) => set({ loading }),
  signUp: async (email: string, password: string) => {
    try {
      const { error } = await supabase.auth.signUp({ email, password })
      if (error) throw error
    } catch (error) {
      throw error
    }
  },
  signIn: async (email: string, password: string) => {
    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password })
      if (error) throw error
    } catch (error) {
      throw error
    }
  },
  signOut: async () => {
    try {
      const { error } = await supabase.auth.signOut()
      if (error) throw error
      set({ user: null })
    } catch (error) {
      throw error
    }
  },
  checkAuth: async () => {
    try {
      const { data } = await supabase.auth.getSession()
      if (data.session?.user) {
        set({ user: { id: data.session.user.id, email: data.session.user.email } })
      }
    } catch (error) {
      console.error('Auth check error:', error)
    } finally {
      set({ loading: false })
    }
  }
}))
