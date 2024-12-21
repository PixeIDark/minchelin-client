'use client';

import React, { useState } from 'react';
import { css } from '@/styled-system/css';
import { vstack, flex } from '@/styled-system/patterns';
import { uploadApi } from '@/api/image-upload';

function ImagePage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files[0]) {
      setSelectedFile(files[0]);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert('파일을 선택해주세요.');
      return;
    }

    try {
      setIsLoading(true);
      const response = await uploadApi.single(selectedFile);
      setImageUrl(response.url);
      alert('업로드 성공!');
    } catch (error) {
      alert('업로드 실패: ' + error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={css({ p: '4' })}>
      <div className={vstack({ maxW: 'md', mx: 'auto', gap: '4' })}>
        <h1 className={css({ fontSize: '2xl', fontWeight: 'bold' })}>이미지 업로드</h1>

        <div className={vstack({ gap: '4' })}>
          <div className={flex({ direction: 'column', gap: '2' })}>
            <label className={css({ fontWeight: 'medium' })}>이미지 선택</label>
            <input
              type='file'
              accept='image/*'
              onChange={handleFileSelect}
              className={css({
                border: '1px solid',
                borderColor: 'gray.200',
                p: '2',
                borderRadius: 'md',
              })}
            />
          </div>

          {selectedFile && (
            <div className={css({ fontSize: 'sm', color: 'gray.600' })}>
              선택된 파일: {selectedFile.name}
            </div>
          )}

          <button
            onClick={handleUpload}
            disabled={!selectedFile || isLoading}
            className={css({
              w: 'full',
              py: '2',
              px: '4',
              borderRadius: 'md',
              color: 'white',
              bg: !selectedFile || isLoading ? 'gray.400' : 'blue.500',
              _hover: {
                bg: !selectedFile || isLoading ? 'gray.400' : 'blue.600',
              },
            })}
          >
            {isLoading ? '업로드 중...' : '업로드'}
          </button>
        </div>

        {imageUrl && (
          <div className={vstack({ gap: '2' })}>
            <h2 className={css({ fontWeight: 'medium' })}>업로드된 이미지:</h2>
            <img
              src={imageUrl}
              alt='Uploaded'
              className={css({
                w: 'full',
                borderRadius: 'md',
                boxShadow: 'lg',
              })}
            />
            <div
              className={css({
                mt: '2',
                fontSize: 'sm',
                color: 'gray.600',
                wordBreak: 'break-all',
              })}
            >
              URL: {imageUrl}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ImagePage;
