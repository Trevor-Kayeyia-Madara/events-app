// lib/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://gjlnwcvgvfdicegawwro.supabase.co';
const supabaseAnonKey ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdqbG53Y3ZndmZkaWNlZ2F3d3JvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg5Nzk5NDcsImV4cCI6MjA0NDU1NTk0N30.du3mQuMEgu2lKFf3Rj3IgxST_947217DLngBM0fdCJ0';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
