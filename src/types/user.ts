export interface User {
  id: number;
  email: string;
  name: string;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}

export interface UpdateProfileRequest {
  name?: string;
  password?: string;
}

export interface UpdateProfileResponse {
  id: number;
  email: string;
  name: string;
  created_at: string;
  updated_at: string;
}

export interface DeleteAccountResponse {
  message: string;
}
