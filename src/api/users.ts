import { fetchInstance } from '@/api/instance';
import {
  DeleteAccountResponse,
  UpdateProfileRequest,
  UpdateProfileResponse,
  User,
} from '@/types/user';

export const usersApi = {
  getMyProfile: () => fetchInstance.get<User>('/users/me'),

  updateProfile: (data: UpdateProfileRequest) =>
    fetchInstance.put<UpdateProfileResponse>('/users/me', data),

  deleteAccount: () => fetchInstance.delete<DeleteAccountResponse>('/users/me'),
};
