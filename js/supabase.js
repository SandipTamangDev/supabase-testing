// supabase.js
const { createClient } = supabase;
const SUPABASE_URL = "https://YOUR-PROJECT.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind3cWVrbnpqcnpqbWh1cHNvZGNrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA0Njc1NjUsImV4cCI6MjA3NjA0MzU2NX0.sXHW0QWwqAEfRfTy3H5TGTn7QiY0Pk_eCg4SpNBtTJc";

window.supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
