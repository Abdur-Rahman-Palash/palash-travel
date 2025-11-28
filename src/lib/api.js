// Lightweight fetch helper using Vite env var `VITE_API_URL`
const API = import.meta.env.VITE_API_URL || '';

async function apiFetch(path, options = {}) {
  const url = path.startsWith('http') ? path : `${API}${path}`;
  const opts = {
    credentials: 'include',
    headers: { 'Content-Type': 'application/json', ...(options.headers || {}) },
    ...options,
  };

  const res = await fetch(url, opts);
  const text = await res.text();
  const contentType = res.headers.get('content-type') || '';
  const data = contentType.includes('application/json') ? JSON.parse(text || '{}') : text;
  if (!res.ok) {
    throw { status: res.status, data };
  }
  return data;
}

export async function get(path) {
  return apiFetch(path, { method: 'GET' });
}

export async function post(path, body) {
  return apiFetch(path, { method: 'POST', body: JSON.stringify(body) });
}

export default { get, post };
