import API_BASE_URL from '../config/api';

interface ApiResponse<T> {
  success: boolean;
  message: string;
  data?: T;
}

const getCsrfToken = (): string =>
  document.cookie.match(/(?:^|;\s*)csrf-token=([^;]*)/)?.[1] ?? '';

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

export const get = async <T>(endpoint: string, auth = false): Promise<ApiResponse<T>> => {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, auth ? { credentials: 'include' } : {});
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Request failed');
  }
  return response.json();
};

export const post = async <T>(endpoint: string, data: unknown, auth = false): Promise<ApiResponse<T>> => {
  const headers: Record<string, string> = { 'Content-Type': 'application/json' };
  if (auth) {
    const csrf = getCsrfToken();
    if (csrf) headers['x-csrf-token'] = csrf;
  }
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    method: 'POST',
    headers,
    body: JSON.stringify(sanitizePayload(data)),
    ...(auth && { credentials: 'include' as RequestCredentials }),
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Request failed');
  }
  return response.json();
};

export const put = async <T>(endpoint: string, data: unknown, auth = false): Promise<ApiResponse<T>> => {
  const headers: Record<string, string> = { 'Content-Type': 'application/json' };
  if (auth) {
    const csrf = getCsrfToken();
    if (csrf) headers['x-csrf-token'] = csrf;
  }
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    method: 'PUT',
    headers,
    body: JSON.stringify(sanitizePayload(data)),
    ...(auth && { credentials: 'include' as RequestCredentials }),
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Request failed');
  }
  return response.json();
};
