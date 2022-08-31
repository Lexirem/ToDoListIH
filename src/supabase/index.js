import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://pxucqjumfwhsacuiapbi.supabase.co';
const supabaseAnonToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB4dWNxanVtZndoc2FjdWlhcGJpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjE5MzM4MDIsImV4cCI6MTk3NzUwOTgwMn0.idU5Q440IjezyJV1yXuvhHg8BYdXKE4BaZJp9JTvbmM';

export default createClient(supabaseUrl, supabaseAnonToken);
