const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

interface FetchOptions extends RequestInit {
  token?: string;
}

class FetchInstance {
  private baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  async get<T>(url: string, options?: FetchOptions): Promise<T> {
    return this.fetchWithInterceptor<T>(url, { ...options, method: 'GET' });
  }

  async post<T>(url: string, data?: unknown, options?: FetchOptions): Promise<T> {
    return this.fetchWithInterceptor<T>(url, {
      ...options,
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  private async fetchWithInterceptor<T>(url: string, options: FetchOptions = {}): Promise<T> {
    try {
      const headers: HeadersInit = {
        'Content-Type': 'application/json',
        ...(options.token && { Authorization: `Bearer ${options.token}` }),
        ...options.headers,
      };

      const response = await fetch(`${this.baseURL}${url}`, {
        ...options,
        headers,
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || '서버 오류가 발생했습니다');
      }

      return response.json();
    } catch (error) {
      console.error('API 오류:', error);
      throw error;
    }
  }
}

export const fetchInstance = new FetchInstance(BASE_URL || '');
