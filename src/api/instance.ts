import { getSession } from 'next-auth/react';
import { authApi } from '@/api/auth';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

interface FetchOptions extends RequestInit {
  token?: string;
}

class FetchInstance {
  private baseURL: string;
  private retryCount = 0;
  private readonly MAX_RETRY = 3;

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

  async put<T>(url: string, data?: unknown, options?: FetchOptions): Promise<T> {
    return this.fetchWithInterceptor<T>(url, {
      ...options,
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async delete<T>(url: string, options?: FetchOptions): Promise<T> {
    return this.fetchWithInterceptor<T>(url, { ...options, method: 'DELETE' });
  }

  async postFormData<T>(url: string, formData: FormData, options?: FetchOptions): Promise<T> {
    try {
      const authHeaders = await this.getAuthHeader();
      const headers: HeadersInit = {
        ...authHeaders,
        ...options?.headers,
      };

      const response = await fetch(`${this.baseURL}${url}`, {
        method: 'POST',
        body: formData,
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

      if (response.status === 401 && this.retryCount < this.MAX_RETRY) {
        this.retryCount++;
        const session = await getSession();
        if (session?.refreshToken) {
          await authApi.refresh(session.refreshToken);

          const newSession = await getSession();
          const newHeaders = {
            ...options.headers,
            Authorization: `Bearer ${newSession?.accessToken}`,
          };

          return this.fetchWithInterceptor<T>(url, {
            ...options,
            headers: newHeaders,
          });
        }
      }

      if (this.retryCount === this.MAX_RETRY)
        throw new Error('재시도 횟수 초과, 토큰 자동 재발급 실패'); // 나중에 로그인 리다이렉트로 바꿔주자.

      this.retryCount = 0;

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
