import { createClient } from '@supabase/supabase-js';

const supabaseURL = 'https://wgvdgckfeojpcxlqocnl.supabase.co';
const supabaseKEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndndmRnY2tmZW9qcGN4bHFvY25sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM5MjI5NDcsImV4cCI6MjA2OTQ5ODk0N30.a9qUHlGEe48HNVLFKkmpwBcmujWMsCu-lUgvZ4ZdeRY';

export const supabase = createClient (supabaseURL, supabaseKEY);