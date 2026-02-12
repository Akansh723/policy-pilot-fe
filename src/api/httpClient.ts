import API_BASE_URL from '../config/api';

interface ApiResponse<T> {
  success: boolean;
  message: string;
  data?: T;
}
console.log(API_BASE_URL, "akansh saxena checking")
export const get = async <T>(endpoint: string): Promise<ApiResponse<T>> => {
  const response = await fetch(`${API_BASE_URL}${endpoint}`);
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Request failed');
  }
  return response.json();
};

export const post = async <T>(endpoint: string, data: unknown, token?: string): Promise<ApiResponse<T>> => {
  const headers: Record<string, string> = { 'Content-Type': 'application/json' };
  if (token) headers['Authorization'] = `Bearer ${token}`;
  
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    method: 'POST',
    headers,
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Request failed');
  }
  return response.json();
};

export const put = async <T>(endpoint: string, data: unknown, token?: string): Promise<ApiResponse<T>> => {
  const headers: Record<string, string> = { 'Content-Type': 'application/json' };
  if (token) headers['Authorization'] = `Bearer ${token}`;
  
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    method: 'PUT',
    headers,
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Request failed');
  }
  return response.json();
};
