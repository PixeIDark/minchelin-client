'use client';

import { useForm } from 'react-hook-form';
import { LoginRequest } from '@/types/auth';
import { loginSchema } from '@/lib/zod/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { useLoginSubmit } from '@/app/(auth)/login/components/LoginForm/useLoginSubmit';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { styled } from '@/styled-system/jsx';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
function LoginForm() {
  const form = useForm<LoginRequest>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const { handleSubmit, isPending } = useLoginSubmit();

  return (
    <Card maxW='md' mx='auto' w='full'>
      <CardHeader>
        <CardTitle textAlign='center' fontSize='2xl' fontWeight='bold'>
          로그인
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <styled.form
            onSubmit={form.handleSubmit(handleSubmit)}
            display='flex'
            flexDir='column'
            gap='4'
          >
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input type='email' placeholder='이메일 주소를 입력하세요' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input type='password' placeholder='비밀번호를 입력하세요' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type='submit' w='full' disabled={isPending}>
              {isPending ? '로그인 중...' : '로그인'}
            </Button>
          </styled.form>
        </Form>
      </CardContent>
    </Card>
  );
}

export default LoginForm;
