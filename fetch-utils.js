const SUPABASE_URL = 'https://hivhhethskjbmsiiuepr.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhpdmhoZXRoc2tqYm1zaWl1ZXByIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQ0MzU1ODUsImV4cCI6MTk2MDAxMTU4NX0.3tUMXfEr4bDY-62YnajMALVtGgKdGMrYB3yDPPU19qM';
const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getConsoles() {
    const response = await client.from('consoles').select('*');
    // console.log(response);
    return checkError(response);
}

export async function getConsole(id) {
    const consoleId = await client.from('consoles').select('*').eq('id', id).single();
    console.log(consoleId);
    return checkError(consoleId);
}

function checkError({ data, error }) {
    return error ? console.error(error) : data;
}
