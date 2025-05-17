// /src/supabaseClient.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://sgyogaoanvidoeujzfoc.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNneW9nYW9hbnZpZG9ldWp6Zm9jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDczMzM2ODQsImV4cCI6MjA2MjkwOTY4NH0.CBjG7Q2TIF88w92ktp46Exu4P6vFEkRWAPeyPsCR37U'

export const supabase = createClient(supabaseUrl, supabaseKey)
