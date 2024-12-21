import { fetchInstance } from '@/api/instance';

interface CloudinaryResponse {
  url: string;
}

interface CloudinaryMultipleResponse {
  urls: string[];
}

export const uploadApi = {
  single: async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);

    return fetchInstance.postFormData<CloudinaryResponse>('/upload/single', formData);
  },

  multiple: async (files: File[]) => {
    const formData = new FormData();
    files.forEach((file) => {
      formData.append('files', file);
    });

    return fetchInstance.postFormData<CloudinaryMultipleResponse>('/upload/multiple', formData);
  },
};
