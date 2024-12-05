import { getSession } from 'next-auth/react';

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

  private async getAuthHeader(): Promise<HeadersInit> {
    const session = await getSession();
    const token = session?.accessToken;

    return token ? { Authorization: `Bearer ${token}` } : {};
  }

  private async fetchWithInterceptor<T>(url: string, options: FetchOptions = {}): Promise<T> {
    try {
      const authHeaders = await this.getAuthHeader();
      const headers: HeadersInit = {
        'Content-Type': 'application/json',
        ...authHeaders,
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
