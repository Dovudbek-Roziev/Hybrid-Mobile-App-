const BASE = process.env.EXPO_PUBLIC_API_URL?.replace(/\/$/, '');
export type User = { id: string; email: string; displayName: string };
export type AuthResponse = { token: string; user: User };
async function request<T>(path: string, options: RequestInit = {}, token?: string): Promise<T> {
  if (!BASE) throw new Error('Set EXPO_PUBLIC_API_URL in your .env file');
  const headers = new Headers(options.headers);
  if (options.body) headers.set('Content-Type', 'application/json');
  if (token) headers.set('Authorization', 'Bearer ' + token);
  const response = await fetch(BASE + path, { ...options, headers });
  const result: any = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(result.error ?? 'API request failed');
  return result as T;
}
export const api = {
  health: () => request<{status:string}>('/api/health'),
  modules: () => request<{modules:{id:number;title:string;month:number}[]}>('/api/modules'),
  login: (email:string,password:string) => request<AuthResponse>('/api/auth/login', {method:'POST',body:JSON.stringify({email,password})}),
  register: (email:string,password:string,displayName:string) => request<{user:User}>('/api/auth/register', {method:'POST',body:JSON.stringify({email,password,displayName})}),
  progress: (token:string) => request<{progress:{lessonId:string;completedAt:string}[]}>('/api/progress', {}, token),
  complete: (token:string,id:string) => request<{completed:boolean}>('/api/progress/'+encodeURIComponent(id), {method:'PUT'}, token),
};
