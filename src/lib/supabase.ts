import { createClient } from '@supabase/supabase-js'

// Verificar se estamos no ambiente do navegador
const isBrowser = typeof window !== 'undefined'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

// Criar cliente com fallback seguro para build
export const supabase = (supabaseUrl && supabaseAnonKey) 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

// Helper para verificar se o cliente está disponível
export const isSupabaseConfigured = () => {
  return supabaseUrl && supabaseAnonKey && supabase !== null
}
