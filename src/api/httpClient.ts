import API_BASE_URL from '../config/api';

interface ApiResponse<T> {
  success: boolean;
  message: string;
  data?: T;
}

let csrfToken = '';

export const setCsrfToken = (token: string) => {
  csrfToken = token;
};

export const clearCsrfToken = () => {
  csrfToken = '';
};

const extractCsrfToken = (response: Response): void => {
  const token = response.headers.get('x-csrf-token');
  if (token) csrfToken = token;
};

const sanitizePayload = (obj: unknown): unknown => {
  if (typeof obj === 'string') return obj.replace(/<[^>]*>/g, '');
  if (Array.isArray(obj)) return obj.map(sanitizePayload);
  if (obj && typeof obj === 'object') {
    return Object.fromEntries(
      Object.entries(obj as Record<string, unknown>).map(([k, v]) => [k, sanitizePayload(v)])
    );
  }
  return obj;
};

export const get = async <T>(endpoint: string): Promise<ApiResponse<T>> => {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    credentials: 'include',
  });
  extractCsrfToken(response);
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Request failed');
  }
  return response.json();
};

export const post = async <T>(endpoint: string, data: unknown): Promise<ApiResponse<T>> => {
  const headers: Record<string, string> = { 'Content-Type': 'application/json' };
  if (csrfToken) {
    headers['x-csrf-token'] = csrfToken;
  }
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    method: 'POST',
    headers,
    body: JSON.stringify(sanitizePayload(data)),
    credentials: 'include',
  });
  extractCsrfToken(response);
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Request failed');
  }
  return response.json();
};

export const put = async <T>(endpoint: string, data: unknown): Promise<ApiResponse<T>> => {
  const headers: Record<string, string> = { 'Content-Type': 'application/json' };
  if (csrfToken) {
    headers['x-csrf-token'] = csrfToken;
  }
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    method: 'PUT',
    headers,
    body: JSON.stringify(sanitizePayload(data)),
    credentials: 'include',
  });
  extractCsrfToken(response);
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Request failed');
  }
  return response.json();
};
