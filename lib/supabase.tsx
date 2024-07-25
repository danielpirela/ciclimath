import { createClient } from '@supabase/supabase-js'
const url = 'https://cgkxelidpgpffopqiuuh.supabase.co'
const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNna3hlbGlkcGdwZmZvcHFpdXVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE1NzA5OTUsImV4cCI6MjAzNzE0Njk5NX0.d0r78Aek2-RoX2uhYjrzc3z5V1uTmtid37O9OoUGeBs'

export const supabase = createClient(url, key)
