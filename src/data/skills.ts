export interface Skill {
  name: string
  abbr: string
  bg: string
  color: string
}

export const skills: Skill[] = [
  { name: 'Python', abbr: 'Py', bg: '#FFD43B', color: '#22221a' },
  { name: 'FastAPI', abbr: 'Fa', bg: '#05998b', color: '#fff' },
  { name: 'Django', abbr: 'Dj', bg: '#0C4B33', color: '#fff' },
  { name: 'JavaScript', abbr: 'Js', bg: '#F7DF1E', color: '#222' },
  { name: 'TypeScript', abbr: 'Ts', bg: '#3178C6', color: '#fff' },
  { name: 'React', abbr: 'Re', bg: '#20232a', color: '#61dafb' },
  { name: 'HTML5', abbr: 'Ht', bg: '#E44D26', color: '#fff' },
  { name: 'Tailwind', abbr: 'Tw', bg: '#38BDF8', color: '#0b2531' },
  { name: 'PostgreSQL', abbr: 'Pg', bg: '#336791', color: '#fff' },
  { name: 'Supabase', abbr: 'Sb', bg: '#3ECF8E', color: '#06301f' },
  { name: 'Git / GitHub', abbr: 'Gh', bg: '#24292e', color: '#fff' },
  { name: 'Docker', abbr: 'Dk', bg: '#2496ED', color: '#fff' },
  { name: 'Linux / WSL', abbr: 'Lx', bg: '#FCC624', color: '#222' },
  { name: 'Redis / Celery', abbr: 'Rd', bg: '#DC382D', color: '#fff' },
  { name: 'LLM APIs', abbr: 'AI', bg: '#D97757', color: '#fff' },
  { name: 'Ollama', abbr: 'Ol', bg: '#000000', color: '#fff' },
  { name: 'Whisper', abbr: 'Wh', bg: '#74AA9C', color: '#0b2420' },
  { name: 'Nmap / NSE', abbr: 'Nm', bg: '#4682B4', color: '#fff' },
  { name: 'JWT / AuthN', abbr: 'Jw', bg: '#D63AFF', color: '#fff' },
]
